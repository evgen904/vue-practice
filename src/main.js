import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import fb from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/messaging'
import 'firebase/functions'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import './stylus/main.styl'

Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken1
  }
})

Vue.component('app-buy-modal', BuyModalComponent)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyC-EVj6IGepD3F6pEuECX6Gkgbx9ikBloU',
      authDomain: 'its-ads-4c326.firebaseapp.com',
      databaseURL: 'https://its-ads-4c326.firebaseio.com',
      projectId: 'its-ads-4c326',
      storageBucket: 'its-ads-4c326.appspot.com',
      messagingSenderId: '242674476104'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
