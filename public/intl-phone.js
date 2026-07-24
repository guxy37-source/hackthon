// ============================================
// International Phone Number Component
// E.164 format: +<country_code><subscriber_number>
// ============================================

const INTL_COUNTRIES = [
  { code: 'CN', dial: '86',  flag: '🇨🇳', name: 'China' },
  { code: 'HK', dial: '852', flag: '🇭🇰', name: 'Hong Kong' },
  { code: 'TW', dial: '886', flag: '🇹🇼', name: 'Taiwan' },
  { code: 'MO', dial: '853', flag: '🇲🇴', name: 'Macao' },
  { code: 'US', dial: '1',   flag: '🇺🇸', name: 'United States' },
  { code: 'GB', dial: '44',  flag: '🇬🇧', name: 'United Kingdom' },
  { code: 'JP', dial: '81',  flag: '🇯🇵', name: 'Japan' },
  { code: 'KR', dial: '82',  flag: '🇰🇷', name: 'South Korea' },
  { code: 'SG', dial: '65',  flag: '🇸🇬', name: 'Singapore' },
  { code: 'MY', dial: '60',  flag: '🇲🇾', name: 'Malaysia' },
  { code: 'TH', dial: '66',  flag: '🇹🇭', name: 'Thailand' },
  { code: 'VN', dial: '84',  flag: '🇻🇳', name: 'Vietnam' },
  { code: 'ID', dial: '62',  flag: '🇮🇩', name: 'Indonesia' },
  { code: 'PH', dial: '63',  flag: '🇵🇭', name: 'Philippines' },
  { code: 'IN', dial: '91',  flag: '🇮🇳', name: 'India' },
  { code: 'AU', dial: '61',  flag: '🇦🇺', name: 'Australia' },
  { code: 'NZ', dial: '64',  flag: '🇳🇿', name: 'New Zealand' },
  { code: 'CA', dial: '1',   flag: '🇨🇦', name: 'Canada' },
  { code: 'DE', dial: '49',  flag: '🇩🇪', name: 'Germany' },
  { code: 'FR', dial: '33',  flag: '🇫🇷', name: 'France' },
  { code: 'NL', dial: '31',  flag: '🇳🇱', name: 'Netherlands' },
  { code: 'IT', dial: '39',  flag: '🇮🇹', name: 'Italy' },
  { code: 'ES', dial: '34',  flag: '🇪🇸', name: 'Spain' },
  { code: 'PT', dial: '351', flag: '🇵🇹', name: 'Portugal' },
  { code: 'CH', dial: '41',  flag: '🇨🇭', name: 'Switzerland' },
  { code: 'SE', dial: '46',  flag: '🇸🇪', name: 'Sweden' },
  { code: 'NO', dial: '47',  flag: '🇳🇴', name: 'Norway' },
  { code: 'DK', dial: '45',  flag: '🇩🇰', name: 'Denmark' },
  { code: 'FI', dial: '358', flag: '🇫🇮', name: 'Finland' },
  { code: 'BE', dial: '32',  flag: '🇧🇪', name: 'Belgium' },
  { code: 'AT', dial: '43',  flag: '🇦🇹', name: 'Austria' },
  { code: 'RU', dial: '7',   flag: '🇷🇺', name: 'Russia' },
  { code: 'PL', dial: '48',  flag: '🇵🇱', name: 'Poland' },
  { code: 'UA', dial: '380', flag: '🇺🇦', name: 'Ukraine' },
  { code: 'TR', dial: '90',  flag: '🇹🇷', name: 'Turkey' },
  { code: 'AE', dial: '971', flag: '🇦🇪', name: 'UAE' },
  { code: 'SA', dial: '966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: 'IL', dial: '972', flag: '🇮🇱', name: 'Israel' },
  { code: 'ZA', dial: '27',  flag: '🇿🇦', name: 'South Africa' },
  { code: 'EG', dial: '20',  flag: '🇪🇬', name: 'Egypt' },
  { code: 'BR', dial: '55',  flag: '🇧🇷', name: 'Brazil' },
  { code: 'AR', dial: '54',  flag: '🇦🇷', name: 'Argentina' },
  { code: 'MX', dial: '52',  flag: '🇲🇽', name: 'Mexico' },
  { code: 'CL', dial: '56',  flag: '🇨🇱', name: 'Chile' },
  { code: 'CO', dial: '57',  flag: '🇨🇴', name: 'Colombia' },
  { code: 'PE', dial: '51',  flag: '🇵🇪', name: 'Peru' }
];

const IntlPhone = {
  selectedCountry: INTL_COUNTRIES[0],

  render(containerId, inputName = 'phone') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const options = INTL_COUNTRIES.map(c =>
      `<option value="${c.code}" data-dial="${c.dial}">${c.flag} +${c.dial} ${c.name}</option>`
    ).join('');

    container.innerHTML = `
      <div class="flex gap-2">
        <div class="relative flex-shrink-0">
          <select id="intl-country-select" onchange="IntlPhone.onCountryChange(this)"
            class="appearance-none bg-slate-900/80 border border-slate-700/80 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-slate-100 text-sm rounded-xl pl-3 pr-8 py-2.5 outline-none transition-all cursor-pointer w-[110px]">
            ${options}
          </select>
          <i class="fa-solid fa-chevron-down absolute right-2.5 top-3.5 text-slate-400 text-[10px] pointer-events-none"></i>
        </div>
        <div class="relative flex-1">
          <i class="fa-solid fa-mobile-screen absolute left-3.5 top-3 text-slate-400 text-sm"></i>
          <input type="tel" id="intl-phone-input" name="${inputName}" autocomplete="tel"
            oninput="IntlPhone.onPhoneInput(this)"
            class="w-full bg-slate-900/80 border border-slate-700/80 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-slate-100 text-sm rounded-xl pl-10 pr-3 py-2.5 outline-none transition-all placeholder:text-slate-500">
          <input type="hidden" id="intl-phone-full" name="${inputName}_full">
        </div>
      </div>
    `;

    const saved = localStorage.getItem('intl-phone-country');
    if (saved) {
      const select = document.getElementById('intl-country-select');
      select.value = saved;
      this.onCountryChange(select);
    }
  },

  onCountryChange(select) {
    const code = select.value;
    const country = INTL_COUNTRIES.find(c => c.code === code);
    if (country) {
      this.selectedCountry = country;
      localStorage.setItem('intl-phone-country', code);
      this.updatePlaceholder();
      this.updateFullNumber();
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
