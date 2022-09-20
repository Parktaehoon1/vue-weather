import axios from "axios";
import { createStore } from "vuex";
import { fetchKakaoApi, fetchOnweatherUrl } from "@/api/index";
export default createStore({
    state: {
        weatherData: []
    },
    actions: {
        fetchWeather({commit}) {
                //https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
                //https://api.openweathermap.org/data/2.5/weather?lat=37.562632898194835&lon=126.9454282268269&appid=11d451fb1dc708c9efd7b05b16f080d4
                // const API_KEY = "11d451fb1dc708c9efd7b05b16f080d4";
                // let initialLat = 37.562632898194835;
                // let initialLon = 126.9454282268269;
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=37.562632898194835&lon=126.9454282268269&appid=11d451fb1dc708c9efd7b05b16f080d4`)
                .then(res => {
                    console.log("data들어오나요",res.data.main.temp)
                    commit('WEATHER_DATA', res.data)
                })
                .catch(err => { console.log(err) })
        }
    },
    mutations: {
        WEATHER_DATA(state, payload){
            console.log("payload",payload)
            state.weatherData = payload
        } 
    },
    getters: {
        getWeather(state){
            console.log("state", state)
            return state.weatherData
        }
    }
});