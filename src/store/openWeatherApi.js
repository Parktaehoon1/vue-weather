// import axios from "axios";

// export default {
//     namespaced: true,
//     state: {
//         cityName: "Seoul",
//         currentWeather: {
//             // MainView.vue에서 사용
//             currentTemp:0,
//             currentHumidity:0,
//             currentWindSpeed:0,
//             currentFeelsLike:0,
//             // SubView.vue에서 사용
//             currentSunrise: 0,
//             currentSunset: 0,
//             currentVisibility: 0
//         },
//         images:[],
//     },
//     actions: {

//         async FETCH_OPENWEATHER_API(context) {
//             const API_KEY = "11d451fb1dc708c9efd7b05b16f080d4";
//             let initialLat = 37.562632898194835;
//             let initialLon = 126.9454282268269;
//             try{
//                 const res = await axios.get(
//                     `https://api.openweathermap.org/data/2.5/weather?lat=${initialLat}&lon=${initialLon}&appid=${API_KEY}&units=metric`
//                 );
//                 const images = new Array();
//                 for(let i = 0; i < 48; i++){
//                     const weatherIcon = res.data.weather[0].icon;
//                     images[i] =  `src/assets/images/${weatherIcon}.png`;
//                 }
//                 console.log(context)
//                 context.commit("SET_CITYNAME")
//                 context.commit("SET_CURRENT_WEATHER")
//                 context.commit("SET_IMAGEPATH", images)
//             } catch (error){
//                 console.log(error);
//             }

//             axios
//                 .get(`https://api.openweathermap.org/data/2.5/weather?lat=${initialLat}&lon=${initialLon}&appid=${API_KEY}&units=metric`)
//                 .then((response) => {
//                     let isInitialData = res.data; // 초기데이터
//                     let isInitialCityName = isInitialData.name; // 초기 도시이름 데이터
//                     let isInitialTemp = isInitialData.main.temp // 현재온도

//                     temporaryData[0].value = isInitialData.main.humidity;
//                     temporaryData[1].value = isInitialData.wind.speed + "m/s";
//                     temporaryData[2].value = Math.round(isInitialData.main.feels_like) + '도';
                    
//                 })
//         }
//     },
//     mutations: {
//         SET_CITYNAME(state, payload){
//             console.log(payload)
//             state.cityName = payload
//         },
//         SET_CURRENT_WEATHER(state,payload){
//             console.log("state",state)
//             console.log("payload",payload)
//             state.currentWeather.currentTemp = Math.round(payload.temp);
//             state.currentWeather.currentHumidity = payload.main.humidity;
//             state.currentWeather.currentWindSpeed = payload.wind.speed;
//             state.currentWeather.currentSunrise = payload.sys.sunrise;
//             state.currentWeather.currentSunset = payload.sys.sunset;
//             state.currentWeather.currentVisibility = payload.visibility;
//         },
//         SET_IMAGEPATH(state, payload){
//             console.log(payload)
//             state.images = payload;
//         }
//     },
//     getters: {},
// }