import { createStore } from "vuex";
import qs from 'qs'

const store = createStore({
  state: {
    mainToken: null,
    fromCity: null,
    toCity: null,
    fromDate: null,
    toDate: null
  },

  getters: {},
  mutations: {
    SET_MAIN_TOKEN(state, payload) {
      state.mainToken = payload
    },
    SET_FROMCITY(state, payload) {
      state.fromCity = payload
    },
    SET_TOCITY(state, payload) {
      state.toCity = payload
    },
    SET_FROMDATE(state, payload) {
      state.fromDate = payload
    },
    SET_TODATE(state, payload) {
      state.toDate = payload
    },
  },
  actions: {
    async GetToken({ commit}){
      let data = {
              grant_type: "client_credentials",
              client_id: "Asri38ujhxwa5nc26GyiSSBFhm5qpxKt",
              client_secret: "pYJ4Wkb6xfctte6R"
      }
      const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: qs.stringify(data)
      };
      try {
          await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", requestOptions)
          .then(response => response.json())
          .then(data => {
              commit('SET_MAIN_TOKEN',data.access_token)
          });
      } catch (error) {
          console.log('eee', error)
      }        
  }
  },
  
});
export default store;
