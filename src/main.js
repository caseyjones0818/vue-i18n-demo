import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import zhHans from './assets/lang/zh-hans'
import zhHant from './assets/lang/zh-hant'
import en from './assets/lang/en'
Vue.use(VueI18n)

const messages = {
  en: en,
  'zh-hans': zhHans,
  'zh-hant': zhHant
}

const dateTimeFormats = {
  'en-SG': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
      year: 'numeric', month: 'short', day: 'numeric',
      weekday: 'short', hour: 'numeric', minute: 'numeric'
    }
  },
  'zh-CN': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
          year: 'numeric', month: 'short', day: 'numeric',
          weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false
    }
  },
  'zh-HK': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
          year: 'numeric', month: 'short', day: 'numeric',
          weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true
    }
  },
}

const numberFormats = {
  'en-SG': {
    currency: {
      style: 'currency', currency: 'SGD', currencyDisplay: 'symbol'
    }
  },
  'zh-CN': {
    currency: {
      style: 'currency', currency: 'CNY', currencyDisplay: 'symbol'
    }
  },
  'zh-HK': {
    currency: {
      style: 'currency', currency: 'HKD', currencyDisplay: 'symbol'
    }
  }
}

const i18n = new VueI18n({
  locale: 'en', // 设置语言 
  messages, // 语言包
  dateTimeFormats, // 时间格式化
  numberFormats // 货币格式化
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  i18n
}).$mount('#app')
