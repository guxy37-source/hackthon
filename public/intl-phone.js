// ============================================
// International Phone Number Component
// E.164 format: +<country_code><subscriber_number>
// Features: searchable country code selector
// ============================================

const INTL_COUNTRIES = [
  { code: 'CN', dial: '86',  flag: '🇨🇳', name: 'China', nameZh: '中国' },
  { code: 'HK', dial: '852', flag: '🇭🇰', name: 'Hong Kong', nameZh: '香港' },
  { code: 'TW', dial: '886', flag: '🇹🇼', name: 'Taiwan', nameZh: '台湾' },
  { code: 'MO', dial: '853', flag: '🇲🇴', name: 'Macao', nameZh: '澳门' },
  { code: 'US', dial: '1',   flag: '🇺🇸', name: 'United States', nameZh: '美国' },
  { code: 'GB', dial: '44',  flag: '🇬🇧', name: 'United Kingdom', nameZh: '英国' },
  { code: 'JP', dial: '81',  flag: '🇯🇵', name: 'Japan', nameZh: '日本' },
  { code: 'KR', dial: '82',  flag: '🇰🇷', name: 'South Korea', nameZh: '韩国' },
  { code: 'SG', dial: '65',  flag: '🇸🇬', name: 'Singapore', nameZh: '新加坡' },
  { code: 'MY', dial: '60',  flag: '🇲🇾', name: 'Malaysia', nameZh: '马来西亚' },
  { code: 'TH', dial: '66',  flag: '🇹🇭', name: 'Thailand', nameZh: '泰国' },
  { code: 'VN', dial: '84',  flag: '🇻🇳', name: 'Vietnam', nameZh: '越南' },
  { code: 'ID', dial: '62',  flag: '🇮🇩', name: 'Indonesia', nameZh: '印度尼西亚' },
  { code: 'PH', dial: '63',  flag: '🇵🇭', name: 'Philippines', nameZh: '菲律宾' },
  { code: 'IN', dial: '91',  flag: '🇮🇳', name: 'India', nameZh: '印度' },
  { code: 'AU', dial: '61',  flag: '🇦🇺', name: 'Australia', nameZh: '澳大利亚' },
  { code: 'NZ', dial: '64',  flag: '🇳🇿', name: 'New Zealand', nameZh: '新西兰' },
  { code: 'CA', dial: '1',   flag: '🇨🇦', name: 'Canada', nameZh: '加拿大' },
  { code: 'DE', dial: '49',  flag: '🇩🇪', name: 'Germany', nameZh: '德国' },
  { code: 'FR', dial: '33',  flag: '🇫🇷', name: 'France', nameZh: '法国' },
  { code: 'NL', dial: '31',  flag: '🇳🇱', name: 'Netherlands', nameZh: '荷兰' },
  { code: 'IT', dial: '39',  flag: '🇮🇹', name: 'Italy', nameZh: '意大利' },
  { code: 'ES', dial: '34',  flag: '🇪🇸', name: 'Spain', nameZh: '西班牙' },
  { code: 'PT', dial: '351', flag: '🇵🇹', name: 'Portugal', nameZh: '葡萄牙' },
  { code: 'CH', dial: '41',  flag: '🇨🇭', name: 'Switzerland', nameZh: '瑞士' },
  { code: 'SE', dial: '46',  flag: '🇸🇪', name: 'Sweden', nameZh: '瑞典' },
  { code: 'NO', dial: '47',  flag: '🇳🇴', name: 'Norway', nameZh: '挪威' },
  { code: 'DK', dial: '45',  flag: '🇩🇰', name: 'Denmark', nameZh: '丹麦' },
  { code: 'FI', dial: '358', flag: '🇫🇮', name: 'Finland', nameZh: '芬兰' },
  { code: 'BE', dial: '32',  flag: '🇧🇪', name: 'Belgium', nameZh: '比利时' },
  { code: 'AT', dial: '43',  flag: '🇦🇹', name: 'Austria', nameZh: '奥地利' },
  { code: 'RU', dial: '7',   flag: '🇷🇺', name: 'Russia', nameZh: '俄罗斯' },
  { code: 'PL', dial: '48',  flag: '🇵🇱', name: 'Poland', nameZh: '波兰' },
  { code: 'UA', dial: '380', flag: '🇺🇦', name: 'Ukraine', nameZh: '乌克兰' },
  { code: 'TR', dial: '90',  flag: '🇹🇷', name: 'Turkey', nameZh: '土耳其' },
  { code: 'AE', dial: '971', flag: '🇦🇪', name: 'UAE', nameZh: '阿联酋' },
  { code: 'SA', dial: '966', flag: '🇸🇦', name: 'Saudi Arabia', nameZh: '沙特阿拉伯' },
  { code: 'IL', dial: '972', flag: '🇮🇱', name: 'Israel', nameZh: '以色列' },
  { code: 'ZA', dial: '27',  flag: '🇿🇦', name: 'South Africa', nameZh: '南非' },
  { code: 'EG', dial: '20',  flag: '🇪🇬', name: 'Egypt', nameZh: '埃及' },
  { code: 'BR', dial: '55',  flag: '🇧🇷', name: 'Brazil', nameZh: '巴西' },
  { code: 'AR', dial: '54',  flag: '🇦🇷', name: 'Argentina', nameZh: '阿根廷' },
  { code: 'MX', dial: '52',  flag: '🇲🇽', name: 'Mexico', nameZh: '墨西哥' },
  { code: 'CL', dial: '56',  flag: '🇨🇱', name: 'Chile', nameZh: '智利' },
  { code: 'CO', dial: '57',  flag: '🇨🇴', name: 'Colombia', nameZh: '哥伦比亚' },
  { code: 'PE', dial: '51',  flag: '🇵🇪', name: 'Peru', nameZh: '秘鲁' },
  // --- South America / Caribbean additions ---
  { code: 'SR', dial: '597', flag: '🇸🇷', name: 'Suriname', nameZh: '苏里南' },
  { code: 'GY', dial: '592', flag: '🇬🇾', name: 'Guyana', nameZh: '圭亚那' },
  { code: 'TT', dial: '1868',flag: '🇹🇹', name: 'Trinidad and Tobago', nameZh: '特立尼达和多巴哥' },
  { code: 'BB', dial: '1246',flag: '🇧🇧', name: 'Barbados', nameZh: '巴巴多斯' },
  { code: 'JM', dial: '1876',flag: '🇯🇲', name: 'Jamaica', nameZh: '牙买加' },
  { code: 'BS', dial: '1242',flag: '🇧🇸', name: 'Bahamas', nameZh: '巴哈马' },
  { code: 'HT', dial: '509', flag: '🇭🇹', name: 'Haiti', nameZh: '海地' },
  { code: 'DO', dial: '1809',flag: '🇩🇴', name: 'Dominican Republic', nameZh: '多米尼加' },
  { code: 'CU', dial: '53',  flag: '🇨🇺', name: 'Cuba', nameZh: '古巴' },
  { code: 'PA', dial: '507', flag: '🇵🇦', name: 'Panama', nameZh: '巴拿马' },
  { code: 'CR', dial: '506', flag: '🇨🇷', name: 'Costa Rica', nameZh: '哥斯达黎加' },
  { code: 'GT', dial: '502', flag: '🇬🇹', name: 'Guatemala', nameZh: '危地马拉' },
  { code: 'HN', dial: '504', flag: '🇭🇳', name: 'Honduras', nameZh: '洪都拉斯' },
  { code: 'NI', dial: '505', flag: '🇳🇮', name: 'Nicaragua', nameZh: '尼加拉瓜' },
  { code: 'SV', dial: '503', flag: '🇸🇻', name: 'El Salvador', nameZh: '萨尔瓦多' },
  { code: 'BZ', dial: '501', flag: '🇧🇿', name: 'Belize', nameZh: '伯利兹' },
  { code: 'VE', dial: '58',  flag: '🇻🇪', name: 'Venezuela', nameZh: '委内瑞拉' },
  { code: 'EC', dial: '593', flag: '🇪🇨', name: 'Ecuador', nameZh: '厄瓜多尔' },
  { code: 'BO', dial: '591', flag: '🇧🇴', name: 'Bolivia', nameZh: '玻利维亚' },
  { code: 'PY', dial: '595', flag: '🇵🇾', name: 'Paraguay', nameZh: '巴拉圭' },
  { code: 'UY', dial: '598', flag: '🇺🇾', name: 'Uruguay', nameZh: '乌拉圭' },
  { code: 'FJ', dial: '679', flag: '🇫🇯', name: 'Fiji', nameZh: '斐济' },
  { code: 'PG', dial: '675', flag: '🇵🇬', name: 'Papua New Guinea', nameZh: '巴布亚新几内亚' },
  { code: 'LK', dial: '94',  flag: '🇱🇰', name: 'Sri Lanka', nameZh: '斯里兰卡' },
  { code: 'PK', dial: '92',  flag: '🇵🇰', name: 'Pakistan', nameZh: '巴基斯坦' },
  { code: 'BD', dial: '880', flag: '🇧🇩', name: 'Bangladesh', nameZh: '孟加拉国' },
  { code: 'NG', dial: '234', flag: '🇳🇬', name: 'Nigeria', nameZh: '尼日利亚' },
  { code: 'KE', dial: '254', flag: '🇰🇪', name: 'Kenya', nameZh: '肯尼亚' },
  { code: 'GH', dial: '233', flag: '🇬🇭', name: 'Ghana', nameZh: '加纳' },
  { code: 'MA', dial: '212', flag: '🇲🇦', name: 'Morocco', nameZh: '摩洛哥' },
  { code: 'DZ', dial: '213', flag: '🇩🇿', name: 'Algeria', nameZh: '阿尔及利亚' },
  { code: 'TN', dial: '216', flag: '🇹🇳', name: 'Tunisia', nameZh: '突尼斯' }
];

const IntlPhone = {
  selectedCountry: INTL_COUNTRIES[0],
  dropdownOpen: false,

  render(containerId, inputName = 'phone') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="flex gap-2 relative">
        <!-- Searchable Country Selector -->
        <div class="flex-shrink-0 relative">
          <button type="button" id="intl-country-btn" onclick="IntlPhone.toggleDropdown()"
            class="flex items-center gap-1.5 bg-slate-900/80 border border-slate-700/80 focus:border-indigo-500 text-slate-100 text-sm rounded-xl pl-3 pr-2 py-2.5 outline-none transition-all cursor-pointer w-[120px] justify-between">
            <span id="intl-country-display" class="flex items-center gap-1.5 truncate"></span>
            <i class="fa-solid fa-chevron-down text-slate-400 text-[10px]"></i>
          </button>
          <!-- Dropdown Panel -->
          <div id="intl-dropdown" class="hidden absolute top-full left-0 mt-1 w-72 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 overflow-hidden">
            <div class="p-2 border-b border-slate-700/60">
              <div class="relative">
                <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-slate-400 text-xs"></i>
                <input type="text" id="intl-country-search" placeholder="Search country / code..."
                  oninput="IntlPhone.filterCountries(this.value)"
                  class="w-full bg-slate-800/80 border border-slate-700 focus:border-indigo-500 text-slate-100 text-xs rounded-lg pl-9 pr-3 py-2 outline-none placeholder:text-slate-500">
              </div>
            </div>
            <div id="intl-country-list" class="max-h-56 overflow-y-auto"></div>
          </div>
        </div>
        <!-- Phone Input -->
        <div class="relative flex-1">
          <i class="fa-solid fa-mobile-screen absolute left-3.5 top-3 text-slate-400 text-sm"></i>
          <input type="tel" id="intl-phone-input" name="${inputName}" autocomplete="tel"
            oninput="IntlPhone.onPhoneInput(this)"
            class="w-full bg-slate-900/80 border border-slate-700/80 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-slate-100 text-sm rounded-xl pl-10 pr-3 py-2.5 outline-none transition-all placeholder:text-slate-500">
          <input type="hidden" id="intl-phone-full" name="${inputName}_full">
        </div>
      </div>
    `;

    this.renderCountryList('');
    this.updateDisplay();

    const saved = localStorage.getItem('intl-phone-country');
    if (saved) {
      const country = INTL_COUNTRIES.find(c => c.code === saved);
      if (country) {
        this.selectedCountry = country;
        this.updateDisplay();
        this.updatePlaceholder();
      }
    }

    document.addEventListener('click', (e) => {
      const dropdown = document.getElementById('intl-dropdown');
      const btn = document.getElementById('intl-country-btn');
      if (dropdown && btn && !dropdown.contains(e.target) && !btn.contains(e.target)) {
        this.closeDropdown();
      }
    });
  },

  renderCountryList(filter) {
    const listEl = document.getElementById('intl-country-list');
    if (!listEl) return;
    const q = filter.toLowerCase().trim();
    const filtered = INTL_COUNTRIES.filter(c =>
      !q ||
      c.name.toLowerCase().includes(q) ||
      c.nameZh.includes(q) ||
      c.code.toLowerCase().includes(q) ||
      c.dial.includes(q)
    );

    if (filtered.length === 0) {
      listEl.innerHTML = '<div class="p-3 text-center text-slate-500 text-xs">No results</div>';
      return;
    }

    listEl.innerHTML = filtered.map(c => `
      <div onclick="IntlPhone.selectCountry('${c.code}')"
        class="flex items-center gap-2.5 px-3 py-2 hover:bg-indigo-600/20 cursor-pointer transition-colors ${c.code === this.selectedCountry.code ? 'bg-indigo-600/15' : ''}">
        <span class="text-lg">${c.flag}</span>
        <span class="text-xs text-slate-200 flex-1 truncate">${c.name}</span>
        <span class="text-xs text-indigo-400 font-mono">+${c.dial}</span>
      </div>
    `).join('');
  },

  filterCountries(value) {
    this.renderCountryList(value);
  },

  toggleDropdown() {
    const dd = document.getElementById('intl-dropdown');
    if (!dd) return;
    this.dropdownOpen = !this.dropdownOpen;
    dd.classList.toggle('hidden', !this.dropdownOpen);
    if (this.dropdownOpen) {
      const search = document.getElementById('intl-country-search');
      if (search) { search.value = ''; search.focus(); }
      this.renderCountryList('');
    }
  },

  closeDropdown() {
    const dd = document.getElementById('intl-dropdown');
    if (dd) dd.classList.add('hidden');
    this.dropdownOpen = false;
  },

  selectCountry(code) {
    const country = INTL_COUNTRIES.find(c => c.code === code);
    if (country) {
      this.selectedCountry = country;
      localStorage.setItem('intl-phone-country', code);
      this.updateDisplay();
      this.updatePlaceholder();
      this.updateFullNumber();
    }
    this.closeDropdown();
  },

  updateDisplay() {
    const el = document.getElementById('intl-country-display');
    if (el) {
      el.innerHTML = `<span class="text-base">${this.selectedCountry.flag}</span><span class="text-xs font-mono">+${this.selectedCountry.dial}</span>`;
    }
  },

  onPhoneInput(input) {
    let value = input.value.replace(/[^\d]/g, '');
    if (this.selectedCountry.code === 'CN' && value.length > 11) {
      value = value.slice(0, 11);
    } else if (value.length > 15) {
      value = value.slice(0, 15);
    }
    input.value = value;
    this.updateFullNumber();
  },

  updatePlaceholder() {
    const input = document.getElementById('intl-phone-input');
    if (!input) return;
    if (this.selectedCountry.code === 'CN') {
      input.placeholder = '13800138000';
    } else {
      input.placeholder = 'Subscriber number';
    }
  },

  updateFullNumber() {
    const input = document.getElementById('intl-phone-input');
    const hidden = document.getElementById('intl-phone-full');
    if (!input || !hidden) return;
    const subscriber = input.value.replace(/[^\d]/g, '');
    hidden.value = subscriber ? `+${this.selectedCountry.dial}${subscriber}` : '';
  },

  getFullNumber() {
    const hidden = document.getElementById('intl-phone-full');
    return hidden ? hidden.value : '';
  },

  isValid() {
    const full = this.getFullNumber();
    if (!full) return false;
    const digits = full.replace(/[^\d]/g, '');
    if (digits.length < 6 || digits.length > 15) return false;
    if (this.selectedCountry.code === 'CN') {
      const subscriber = document.getElementById('intl-phone-input').value;
      return /^1[3-9]\d{9}$/.test(subscriber);
    }
    return true;
  }
};
