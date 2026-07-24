const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'registrations.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Generate unique Ticket ID: HACK-XXXXXX
function generateTicketId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let random = '';
  for (let i = 0; i < 6; i++) {
    random += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `HACK-${random}`;
}

// Initial mock data if file doesn't exist
const initialMockData = [
  {
    id: 'HACK-8K9M2P',
    name: '张伟',
    school: '清华大学',
    department: '计算机科学与技术系',
    major: '软件工程',
    age: 21,
    email: 'zhangwei@example.edu.cn',
    phone: '13800138001',
    attendance: 'in_person',
    checkedIn: true,
    checkInTime: new Date(Date.now() - 3600000).toISOString(),
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    updatedAt: new Date(Date.now() - 3600000).toISOString()
  },
  {
    id: 'HACK-3F7X9L',
    name: '李娜',
    school: '北京大学',
    department: '信息科学技术学院',
    major: '人工智能',
    age: 20,
    email: 'lina@pku.edu.cn',
    phone: '13911223344',
    attendance: 'in_person',
    checkedIn: false,
    checkInTime: null,
    createdAt: new Date(Date.now() - 86400000 * 1.5).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 1.5).toISOString()
  },
  {
    id: 'HACK-7W2N5V',
    name: '王强',
    school: '北京航空航天大学',
    department: '软件学院',
    major: '网络空间安全',
    age: 22,
    email: 'wangqiang@buaa.edu.cn',
    phone: '13788990011',
    attendance: 'online',
    checkedIn: false,
    checkInTime: null,
    createdAt: new Date(Date.now() - 86400000 * 1.2).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 1.2).toISOString()
  },
  {
    id: 'HACK-9R4B1K',
    name: '陈静',
    school: '浙江大学',
    department: '计算机科学与技术学院',
    major: '数据科学与大数据技术',
    age: 21,
    email: 'chenjing@zju.edu.cn',
    phone: '13566778899',
    attendance: 'in_person',
    checkedIn: true,
    checkInTime: new Date(Date.now() - 1800000).toISOString(),
    createdAt: new Date(Date.now() - 86400000 * 1).toISOString(),
    updatedAt: new Date(Date.now() - 1800000).toISOString()
  },
  {
    id: 'HACK-5P8T3M',
    name: '刘洋',
    school: '上海交通大学',
    department: '电子信息与电气工程学院',
    major: '微电子科学与工程',
    age: 19,
    email: 'liuyang@sjtu.edu.cn',
    phone: '13644556677',
    attendance: 'online',
    checkedIn: false,
    checkInTime: null,
    createdAt: new Date(Date.now() - 43200000).toISOString(),
    updatedAt: new Date(Date.now() - 43200000).toISOString()
  }
];

class DB {
  constructor() {
    this.init();
  }

  init() {
    if (!fs.existsSync(DB_FILE)) {
      this.saveData(initialMockData);
    }
  }

  readData() {
    try {
      if (!fs.existsSync(DB_FILE)) {
        return [];
      }
      const raw = fs.readFileSync(DB_FILE, 'utf-8');
      return JSON.parse(raw);
    } catch (err) {
      console.error('Failed to read database:', err);
      return [];
    }
  }

  saveData(data) {
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
      return true;
    } catch (err) {
      console.error('Failed to save database:', err);
      return false;
    }
  }

  getAll() {
    return this.readData();
  }

  getById(id) {
    const list = this.readData();
    return list.find(item => item.id.toUpperCase() === id.toUpperCase());
  }

  getByPhone(phone) {
    const list = this.readData();
    return list.find(item => item.phone === phone);
  }

  create(registrationData) {
    const list = this.readData();
    
    // Check duplicate phone
    const existing = list.find(item => item.phone === registrationData.phone);
    if (existing) {
      throw new Error('该手机号已提交过报名，无法重复注册！');
    }

    let ticketId = generateTicketId();
    while (list.some(item => item.id === ticketId)) {
      ticketId = generateTicketId();
    }

    const now = new Date().toISOString();
    const record = {
      id: ticketId,
      name: registrationData.name.trim(),
      school: registrationData.school.trim(),
      department: registrationData.department.trim(),
      major: registrationData.major.trim(),
      age: parseInt(registrationData.age, 10),
      email: registrationData.email.trim(),
      phone: registrationData.phone.trim(),
      attendance: registrationData.attendance === 'in_person' ? 'in_person' : 'online',
      checkedIn: false,
      checkInTime: null,
      createdAt: now,
      updatedAt: now
    };

    list.unshift(record); // newest first
    this.saveData(list);
    return record;
  }

  checkIn(keyword) {
    const list = this.readData();
    const query = keyword.trim().toUpperCase();
    const index = list.findIndex(
      item => item.id.toUpperCase() === query || item.phone === query
    );

    if (index === -1) {
      return { success: false, message: '未找到该报名记录（请检查手机号或报名编号）' };
    }

    if (list[index].checkedIn) {
      return { 
        success: false, 
        alreadyCheckedIn: true, 
        message: '该选手已于先前完成核销签到！', 
        record: list[index] 
      };
    }

    list[index].checkedIn = true;
    list[index].checkInTime = new Date().toISOString();
    list[index].updatedAt = new Date().toISOString();
    this.saveData(list);

    return { success: true, message: '核销成功！选手已完成签到。', record: list[index] };
  }

  delete(id) {
    let list = this.readData();
    const initialLen = list.length;
    list = list.filter(item => item.id.toUpperCase() !== id.toUpperCase());
    if (list.length < initialLen) {
      this.saveData(list);
      return true;
    }
    return false;
  }

  getStats() {
    const list = this.readData();
    const total = list.length;
    const inPerson = list.filter(i => i.attendance === 'in_person').length;
    const online = list.filter(i => i.attendance === 'online').length;
    const checkedInCount = list.filter(i => i.checkedIn).length;

    // School statistics
    const schoolMap = {};
    list.forEach(i => {
      schoolMap[i.school] = (schoolMap[i.school] || 0) + 1;
    });

    // Age statistics
    const ageMap = {};
    list.forEach(i => {
      const group = `${i.age}岁`;
      ageMap[group] = (ageMap[group] || 0) + 1;
    });

    return {
      total,
      inPerson,
      online,
      checkedInCount,
      schools: schoolMap,
      ages: ageMap
    };
  }
}

module.exports = new DB();
