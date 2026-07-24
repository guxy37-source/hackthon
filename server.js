const express = require('express');
const cors = require('cors');
const path = require('path');
const QRCode = require('qrcode');
const { Parser } = require('json2csv');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend assets
app.use(express.static(path.join(__dirname, 'public')));

// API 1: Register Student
app.post('/api/register', (req, res) => {
  try {
    const { name, school, department, major, age, email, phone, attendance } = req.body;

    // Validation
    if (!name || !school || !department || !major || !age || !email || !phone) {
      return res.status(400).json({ success: false, message: '请填写所有必填字段！' });
    }

    // Phone validation - E.164 format (+<country_code><subscriber_number>)
    const phoneRegex = /^\+\d{6,15}$/;
    if (!phoneRegex.test(phone.trim())) {
      return res.status(400).json({ success: false, message: '请输入有效的国际格式手机号码（E.164）！' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, message: '请输入有效的电子邮箱地址！' });
    }

    const ageNum = parseInt(age, 10);
    if (isNaN(ageNum) || ageNum < 15 || ageNum > 60) {
      return res.status(400).json({ success: false, message: '请输入合理有效的年龄（15-60岁）！' });
    }

    const newRecord = db.create({
      name,
      school,
      department,
      major,
      age: ageNum,
      email,
      phone,
      attendance: attendance || 'in_person'
    });

    return res.status(201).json({
      success: true,
      message: '报名成功！',
      data: newRecord
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message || '报名提交失败，请重试！'
    });
  }
});

// API 2: Get Registrations List with Filter/Search
app.get('/api/registrations', (req, res) => {
  try {
    let list = db.getAll();
    const { search, attendance, checkedIn } = req.query;

    if (search) {
      const q = search.trim().toLowerCase();
      list = list.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.school.toLowerCase().includes(q) ||
        item.department.toLowerCase().includes(q) ||
        item.major.toLowerCase().includes(q) ||
        item.phone.includes(q) ||
        item.id.toLowerCase().includes(q)
      );
    }

    if (attendance && attendance !== 'all') {
      list = list.filter(item => item.attendance === attendance);
    }

    if (checkedIn && checkedIn !== 'all') {
      const isChecked = checkedIn === 'true';
      list = list.filter(item => item.checkedIn === isChecked);
    }

    res.json({
      success: true,
      total: list.length,
      data: list
    });
  } catch (err) {
    res.status(500).json({ success: false, message: '获取数据失败' });
  }
});

// API 3: Get Dashboard Statistics
app.get('/api/stats', (req, res) => {
  try {
    const stats = db.getStats();
    res.json({ success: true, data: stats });
  } catch (err) {
    res.status(500).json({ success: false, message: '获取统计数据失败' });
  }
});

// API 4: Attendance Check-in (核销/签到)
app.post('/api/check-in', (req, res) => {
  try {
    const { keyword } = req.body;
    if (!keyword) {
      return res.status(400).json({ success: false, message: '请输入手机号或报名编号！' });
    }

    const result = db.checkIn(keyword);
    if (!result.success) {
      return res.status(400).json(result);
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: '核销失败' });
  }
});

// API 5: Delete Registration
app.delete('/api/registrations/:id', (req, res) => {
  try {
    const { id } = req.params;
    const deleted = db.delete(id);
    if (deleted) {
      res.json({ success: true, message: '记录已成功删除' });
    } else {
      res.status(404).json({ success: false, message: '未找到指定记录' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: '删除失败' });
  }
});

// API 6: Export CSV Data
app.get('/api/export', (req, res) => {
  try {
    const list = db.getAll();
    const fields = [
      { label: '报名编号', value: 'id' },
      { label: '姓名', value: 'name' },
      { label: '学校名称', value: 'school' },
      { label: '院系', value: 'department' },
      { label: '专业', value: 'major' },
      { label: '年龄', value: 'age' },
      { label: '邮箱', value: 'email' },
      { label: '电话', value: 'phone' },
      { 
        label: '参会方式', 
        value: (row) => row.attendance === 'in_person' ? '现场参加' : '线上参加' 
      },
      { 
        label: '签到状态', 
        value: (row) => row.checkedIn ? '已签到' : '未签到' 
      },
      { label: '签到时间', value: (row) => row.checkInTime ? new Date(row.checkInTime).toLocaleString('zh-CN') : '-' },
      { label: '报名时间', value: (row) => new Date(row.createdAt).toLocaleString('zh-CN') }
    ];

    const json2csvParser = new Parser({ fields, withBOM: true });
    const csv = json2csvParser.parse(list);

    const filename = `Hackathon_Registrations_${new Date().toISOString().slice(0,10)}.csv`;
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(filename)}"`);
    res.status(200).send(csv);
  } catch (err) {
    console.error('Export CSV error:', err);
    res.status(500).json({ success: false, message: '导出CSV文件失败' });
  }
});

// API 7: Generate QR Code Data URL
app.get('/api/qrcode', async (req, res) => {
  try {
    const host = req.headers.host || `localhost:${PORT}`;
    const protocol = req.protocol || 'http';
    const targetUrl = req.query.url || `${protocol}://${host}/`;
    
    const qrDataUrl = await QRCode.toDataURL(targetUrl, {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      margin: 2,
      color: {
        dark: '#4F46E5', // Indigo primary color
        light: '#FFFFFF'
      },
      width: 300
    });

    res.json({ success: true, url: targetUrl, qrCode: qrDataUrl });
  } catch (err) {
    res.status(500).json({ success: false, message: '二维码生成失败' });
  }
});

// Catch-all route to serve register page for / and admin page for /admin
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 Hackathon Student Registration System Running!`);
  console.log(`📱 Mobile Registration UI: http://localhost:${PORT}/`);
  console.log(`💻 Admin Dashboard:        http://localhost:${PORT}/admin`);
  console.log(`====================================================`);
});
