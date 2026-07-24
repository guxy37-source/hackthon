// ============================================
// i18n Multi-Language Module
// Supports: zh (中文), en (English), nl (Nederlands)
// ============================================

const I18N = {
  zh: {
    // ---- Registration Page (index.html) ----
    'header.badge': 'HACKATHON 2026',
    'header.title': '高校大学生黑客松活动',
    'header.subtitle': '扫码一键注册 • 探索无限创意与极客精神',
    'form.title': '选手信息注册',
    'form.required': '* 必填项',
    'field.name': '学生姓名',
    'field.school': '学校名称',
    'field.department': '院系名称',
    'field.major': '专业名称',
    'field.age': '年龄',
    'field.phone': '联系电话',
    'field.email': '电子邮箱',
    'field.attendance': '是否现场参加',
    'placeholder.name': '请输入您的真实姓名',
    'placeholder.school': '例如：清华大学 / 北京大学',
    'placeholder.department': '例如：计算机学院',
    'placeholder.major': '例如：软件工程',
    'placeholder.age': '例如：21',
    'placeholder.phone': '11位手机号码',
    'placeholder.email': 'your.name@example.com',
    'attendance.in_person': '现场参加 (🏢 线下)',
    'attendance.online': '线上参加 (🌐 远程)',
    'button.submit': '立即提交报名',
    'button.submitting': '提交中...',
    'ticket.success': '报名成功！',
    'ticket.subtitle': '这是您的 Hackathon 参赛通行证，请保存此凭证现场核销',
    'ticket.pass': 'HACKATHON 2026 PASS',
    'ticket.name': '选手姓名',
    'ticket.id': '通行证编号',
    'ticket.school': '所属学校',
    'ticket.major': '院系专业',
    'ticket.qrHint': '出示此二维码或编号即可完成现场签到核销',
    'ticket.reset': '提交另一份报名',
    'footer.organizer': '主办单位：大学生活动组织委员会',
    'footer.admin': '管理后台',
    'alert.phone': '请输入有效的国际格式手机号码',
    'alert.email': '请输入有效的电子邮箱地址',
    'alert.network': '网络异常，请检查连接后重试',
    'alert.fillAll': '请填写所有必填字段！',
    'alert.age': '请输入合理有效的年龄（15-60岁）！',
    'alert.duplicate': '该手机号已提交过报名，无法重复注册！',
    'badge.in_person': '🏢 现场参赛',
    'badge.online': '🌐 线上参赛',

    // ---- Admin Page (admin.html) ----
    'nav.title': '2026 黑客松管理后台',
    'nav.subtitle': '大学生活动注册 & 现场核销数据看板',
    'nav.qr': '宣传二维码',
    'nav.checkin': '现场签到/核销',
    'nav.export': '导出 Excel/CSV',
    'stat.total': '总报名人数',
    'stat.totalSub': '实时全网报名',
    'stat.inPerson': '现场参加人数',
    'stat.online': '线上远程参加',
    'stat.checked': '已现场签到',
    'stat.inPersonRatio': '占比',
    'stat.onlineRatio': '占比',
    'stat.checkedRatio': '现场签到率',
    'chart.attendance': '参会方式占比',
    'chart.attendanceSub': '实时更新',
    'chart.schools': '高校报名统计 (Top Schools)',
    'chart.schoolsSub': '报名来源学校',
    'chart.legend.inPerson': '现场参加',
    'chart.legend.online': '线上参加',
    'table.title': '选手报名列表',
    'table.count': '共',
    'table.records': '条',
    'table.search': '搜索姓名/学校/手机号/编号...',
    'filter.attendanceAll': '参会类型: 全部',
    'filter.inPerson': '🏢 现场参加',
    'filter.online': '🌐 线上参加',
    'filter.checkedAll': '核销状态: 全部',
    'filter.checked': '✅ 已签到',
    'filter.unchecked': '⏳ 未签到',
    'col.id': '通行证编号',
    'col.name': '姓名',
    'col.school': '学校',
    'col.dept': '院系 / 专业',
    'col.age': '年龄',
    'col.contact': '联系方式',
    'col.attendance': '参会形式',
    'col.status': '核销状态',
    'col.action': '操作',
    'table.empty': '未找到符合条件的报名记录',
    'table.checkin': '核销',
    'table.deleteConfirm': '确定要删除通行证编号为',
    'table.deleteConfirm2': '的报名记录吗？',
    'modal.checkin.title': '现场签到与核销',
    'modal.checkin.subtitle': '输入选手手机号或通行证编号（如 HACK-8K9M2P）',
    'modal.checkin.placeholder': '手机号 或 通行证编号...',
    'modal.checkin.confirm': '确认核销',
    'modal.checkin.success': '核销成功！选手已完成签到。',
    'modal.checkin.already': '该选手已于先前完成核销签到！',
    'modal.checkin.notFound': '未找到该报名记录（请检查手机号或报名编号）',
    'modal.checkin.player': '选手',
    'modal.checkin.id': '编号',
    'modal.checkin.phone': '电话',
    'modal.checkin.prevTime': '先前签到时间',
    'modal.checkin.error': '请求出错，请重试',
    'modal.qr.title': '活动宣传报名二维码',
    'modal.qr.subtitle': '打印贴在海报或推文中，学生扫码即可手机注册',
    'modal.qr.copy': '复制报名链接',
    'modal.qr.download': '保存二维码图片',
    'modal.qr.copied': '报名网址链接已复制到剪贴板！',
    'modal.qr.fail': '生成二维码失败',
    'lang.label': '语言'
  },

  en: {
    'header.badge': 'HACKATHON 2026',
    'header.title': 'University Student Hackathon',
    'header.subtitle': 'Scan to register • Explore creativity & geek spirit',
    'form.title': 'Participant Registration',
    'form.required': '* Required',
    'field.name': 'Student Name',
    'field.school': 'School Name',
    'field.department': 'Department',
    'field.major': 'Major',
    'field.age': 'Age',
    'field.phone': 'Phone Number',
    'field.email': 'Email Address',
    'field.attendance': 'On-site Attendance',
    'placeholder.name': 'Enter your full name',
    'placeholder.school': 'e.g. Tsinghua University',
    'placeholder.department': 'e.g. School of Computer Science',
    'placeholder.major': 'e.g. Software Engineering',
    'placeholder.age': 'e.g. 21',
    'placeholder.phone': 'Subscriber number',
    'placeholder.email': 'your.name@example.com',
    'attendance.in_person': 'On-site (🏢 In Person)',
    'attendance.online': 'Online (🌐 Remote)',
    'button.submit': 'Submit Registration',
    'button.submitting': 'Submitting...',
    'ticket.success': 'Registration Successful!',
    'ticket.subtitle': 'This is your Hackathon entry pass. Please save it for on-site check-in.',
    'ticket.pass': 'HACKATHON 2026 PASS',
    'ticket.name': 'Participant',
    'ticket.id': 'Pass ID',
    'ticket.school': 'School',
    'ticket.major': 'Department / Major',
    'ticket.qrHint': 'Present this QR code or ID for on-site check-in',
    'ticket.reset': 'Submit Another Registration',
    'footer.organizer': 'Organizer: Student Activities Committee',
    'footer.admin': 'Admin Dashboard',
    'alert.phone': 'Please enter a valid international phone number',
    'alert.email': 'Please enter a valid email address',
    'alert.network': 'Network error, please check connection and retry',
    'alert.fillAll': 'Please fill in all required fields!',
    'alert.age': 'Please enter a valid age (15-60)!',
    'alert.duplicate': 'This phone number has already been registered!',
    'badge.in_person': '🏢 On-site',
    'badge.online': '🌐 Online',

    'nav.title': '2026 Hackathon Admin',
    'nav.subtitle': 'Student Registration & On-site Check-in Dashboard',
    'nav.qr': 'Promo QR Code',
    'nav.checkin': 'Check-in / Verify',
    'nav.export': 'Export Excel/CSV',
    'stat.total': 'Total Registrations',
    'stat.totalSub': 'Real-time registrations',
    'stat.inPerson': 'On-site Participants',
    'stat.online': 'Online Participants',
    'stat.checked': 'Checked In',
    'stat.inPersonRatio': 'Ratio',
    'stat.onlineRatio': 'Ratio',
    'stat.checkedRatio': 'Check-in Rate',
    'chart.attendance': 'Attendance Mode',
    'chart.attendanceSub': 'Real-time',
    'chart.schools': 'School Distribution (Top Schools)',
    'chart.schoolsSub': 'Registration by school',
    'chart.legend.inPerson': 'On-site',
    'chart.legend.online': 'Online',
    'table.title': 'Registration List',
    'table.count': '',
    'table.records': 'records',
    'table.search': 'Search name/school/phone/ID...',
    'filter.attendanceAll': 'Attendance: All',
    'filter.inPerson': '🏢 On-site',
    'filter.online': '🌐 Online',
    'filter.checkedAll': 'Status: All',
    'filter.checked': '✅ Checked In',
    'filter.unchecked': '⏳ Not Checked In',
    'col.id': 'Pass ID',
    'col.name': 'Name',
    'col.school': 'School',
    'col.dept': 'Department / Major',
    'col.age': 'Age',
    'col.contact': 'Contact',
    'col.attendance': 'Mode',
    'col.status': 'Check-in',
    'col.action': 'Action',
    'table.empty': 'No matching registration records found',
    'table.checkin': 'Verify',
    'table.deleteConfirm': 'Delete registration record',
    'table.deleteConfirm2': '?',
    'modal.checkin.title': 'On-site Check-in / Verification',
    'modal.checkin.subtitle': 'Enter participant phone number or pass ID (e.g. HACK-8K9M2P)',
    'modal.checkin.placeholder': 'Phone or Pass ID...',
    'modal.checkin.confirm': 'Verify',
    'modal.checkin.success': 'Verification successful! Participant checked in.',
    'modal.checkin.already': 'This participant has already been checked in!',
    'modal.checkin.notFound': 'Registration not found (check phone or pass ID)',
    'modal.checkin.player': 'Participant',
    'modal.checkin.id': 'ID',
    'modal.checkin.phone': 'Phone',
    'modal.checkin.prevTime': 'Previous check-in time',
    'modal.checkin.error': 'Request failed, please retry',
    'modal.qr.title': 'Promotion Registration QR Code',
    'modal.qr.subtitle': 'Print on posters or share in posts for students to scan & register',
    'modal.qr.copy': 'Copy Registration URL',
    'modal.qr.download': 'Download QR Image',
    'modal.qr.copied': 'Registration URL copied to clipboard!',
    'modal.qr.fail': 'Failed to generate QR code',
    'lang.label': 'Language'
  },

  nl: {
    'header.badge': 'HACKATHON 2026',
    'header.title': 'Universitaire Student Hackathon',
    'header.subtitle': 'Scan om te registreren • Ontdek creativiteit & geek spirit',
    'form.title': 'Deelnemer Registratie',
    'form.required': '* Verplicht',
    'field.name': 'Studentennaam',
    'field.school': 'Schoolnaam',
    'field.department': 'Faculteit',
    'field.major': 'Studierichting',
    'field.age': 'Leeftijd',
    'field.phone': 'Telefoonnummer',
    'field.email': 'E-mailadres',
    'field.attendance': 'Ter plaatse deelname',
    'placeholder.name': 'Voer uw volledige naam in',
    'placeholder.school': 'bijv. Universiteit van Amsterdam',
    'placeholder.department': 'bijv. Faculteit der Exacte Wetenschappen',
    'placeholder.major': 'bijv. Informatica',
    'placeholder.age': 'bijv. 21',
    'placeholder.phone': 'Abonneenummer',
    'placeholder.email': 'jouw.naam@example.com',
    'attendance.in_person': 'Ter plaatse (🏢 In persoon)',
    'attendance.online': 'Online (🌐 Op afstand)',
    'button.submit': 'Registratie indienen',
    'button.submitting': 'Indienen...',
    'ticket.success': 'Registratie succesvol!',
    'ticket.subtitle': 'Dit is uw Hackathon toegangsbewijs. Bewaar dit voor ter plaatse inchecken.',
    'ticket.pass': 'HACKATHON 2026 PASS',
    'ticket.name': 'Deelnemer',
    'ticket.id': 'Pas ID',
    'ticket.school': 'School',
    'ticket.major': 'Faculteit / Richting',
    'ticket.qrHint': 'Toon deze QR-code of ID voor ter plaatse inchecken',
    'ticket.reset': 'Nog een registratie indienen',
    'footer.organizer': 'Organisator: Studenten Activiteiten Commissie',
    'footer.admin': 'Admin Dashboard',
    'alert.phone': 'Voer een geldig internationaal telefoonnummer in',
    'alert.email': 'Voer een geldig e-mailadres in',
    'alert.network': 'Netwerkfout, controleer verbinding en probeer opnieuw',
    'alert.fillAll': 'Vul alle verplichte velden in!',
    'alert.age': 'Voer een geldige leeftijd in (15-60)!',
    'alert.duplicate': 'Dit telefoonnummer is al geregistreerd!',
    'badge.in_person': '🏢 Ter plaatse',
    'badge.online': '🌐 Online',

    'nav.title': '2026 Hackathon Admin',
    'nav.subtitle': 'Studenten Registratie & Incheck Dashboard',
    'nav.qr': 'Promo QR-code',
    'nav.checkin': 'Inchecken / Verifiëren',
    'nav.export': 'Exporteer Excel/CSV',
    'stat.total': 'Totaal Registraties',
    'stat.totalSub': 'Real-time registraties',
    'stat.inPerson': 'Ter plaatse deelnemers',
    'stat.online': 'Online deelnemers',
    'stat.checked': 'Ingecheckt',
    'stat.inPersonRatio': 'Verhouding',
    'stat.onlineRatio': 'Verhouding',
    'stat.checkedRatio': 'Incheckpercentage',
    'chart.attendance': 'Deelnamemodus',
    'chart.attendanceSub': 'Real-time',
    'chart.schools': 'Schoolverdeling (Top Schools)',
    'chart.schoolsSub': 'Registratie per school',
    'chart.legend.inPerson': 'Ter plaatse',
    'chart.legend.online': 'Online',
    'table.title': 'Registratielijst',
    'table.count': '',
    'table.records': 'records',
    'table.search': 'Zoek naam/school/telefoon/ID...',
    'filter.attendanceAll': 'Deelname: Alle',
    'filter.inPerson': '🏢 Ter plaatse',
    'filter.online': '🌐 Online',
    'filter.checkedAll': 'Status: Alle',
    'filter.checked': '✅ Ingecheckt',
    'filter.unchecked': '⏳ Niet ingecheckt',
    'col.id': 'Pas ID',
    'col.name': 'Naam',
    'col.school': 'School',
    'col.dept': 'Faculteit / Richting',
    'col.age': 'Leeftijd',
    'col.contact': 'Contact',
    'col.attendance': 'Modus',
    'col.status': 'Inchecken',
    'col.action': 'Actie',
    'table.empty': 'Geen overeenkomende registraties gevonden',
    'table.checkin': 'Verifieer',
    'table.deleteConfirm': 'Registratie verwijderen',
    'table.deleteConfirm2': '?',
    'modal.checkin.title': 'Ter plaatse inchecken / Verificatie',
    'modal.checkin.subtitle': 'Voer telefoonnummer of pas ID in (bijv. HACK-8K9M2P)',
    'modal.checkin.placeholder': 'Telefoon of Pas ID...',
    'modal.checkin.confirm': 'Verifieer',
    'modal.checkin.success': 'Verificatie succesvol! Deelnemer ingecheckt.',
    'modal.checkin.already': 'Deze deelnemer is al ingecheckt!',
    'modal.checkin.notFound': 'Registratie niet gevonden (controleer telefoon of pas ID)',
    'modal.checkin.player': 'Deelnemer',
    'modal.checkin.id': 'ID',
    'modal.checkin.phone': 'Telefoon',
    'modal.checkin.prevTime': 'Eerdere inchecktijd',
    'modal.checkin.error': 'Verzoek mislukt, probeer opnieuw',
    'modal.qr.title': 'Promotie Registratie QR-code',
    'modal.qr.subtitle': 'Print op posters of deel in berichten voor studenten om te scannen',
    'modal.qr.copy': 'Kopieer registratie URL',
    'modal.qr.download': 'Download QR-afbeelding',
    'modal.qr.copied': 'Registratie URL gekopieerd naar klembord!',
    'modal.qr.fail': 'QR-code genereren mislukt',
    'lang.label': 'Taal'
  }
};

// ============================================
// Language Manager
// ============================================
const LangManager = {
  current: 'zh',
  languages: [
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'nl', label: 'Nederlands', flag: '🇳🇱' }
  ],

  init() {
    const saved = localStorage.getItem('hackathon-lang');
    if (saved && I18N[saved]) {
      this.current = saved;
    }
    this.apply();
  },

  set(lang) {
    if (!I18N[lang]) return;
    this.current = lang;
    localStorage.setItem('hackathon-lang', lang);
    this.apply();
    // Notify page-specific logic to re-render dynamic content
    if (typeof onLanguageChange === 'function') {
      onLanguageChange(lang);
    }
  },

  t(key) {
    return (I18N[this.current] && I18N[this.current][key]) || key;
  },

  apply() {
    // Apply text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });
    // Apply placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = this.t(key);
    });
    // Update active language indicator
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      if (btn.getAttribute('data-lang-btn') === this.current) {
        btn.classList.add('ring-2', 'ring-indigo-400', 'bg-indigo-600/20');
      } else {
        btn.classList.remove('ring-2', 'ring-indigo-400', 'bg-indigo-600/20');
      }
    });
    // Update <html lang>
    document.documentElement.lang = this.current;
  },

  // Create a language switcher dropdown HTML string
  renderSwitcher(compact = false) {
    const buttons = this.languages.map(l => 
      `<button data-lang-btn="${l.code}" onclick="LangManager.set('${l.code}')" 
        class="px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all hover:bg-slate-700/60 text-slate-300 flex items-center gap-1.5">
        <span>${l.flag}</span>${compact ? '' : `<span>${l.label}</span>`}
      </button>`
    ).join('');
    return `<div class="flex items-center gap-1 bg-slate-900/80 border border-slate-700/60 rounded-xl p-1">${buttons}</div>`;
  }
};
