export default {
  state: {
    ads: [
      {
        title: 'First ad',
        description: 'Hello i am description',
        promo: false,
        imagesSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: '123'
      },
      {
        title: 'Second ad',
        description: 'Hello i am description',
        promo: true,
        imagesSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: '123123'
      },
      {
        title: 'Third ad',
        description: 'Hello i am description',
        promo: true,
        imagesSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: '123123123'
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({commit}, payload) {
      payload.id = 'sdfdsf'

      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
