// import axios from "axios";
// import { createStore } from "vuex";

// export default createStore({
//   state: {
//     getWeatherData: [], // weather 날씨 값을 받을려고 했으나 우선 진행
//   },
//   actions: {
//     async fetchOpenWeatherApi({ commit }) {
//       const API_KEY = "11d451fb1dc708c9efd7b05b16f080d4";
//       let initialLat = 35.8683476;
//       let initialLon = 128.5940482;
//       //`https://api.openweathermap.org/data/2.5/weather?lat=${initialLat}&lon=${initialLon}&appid=${API_KEY}&units=metric`
//       try {
//         await axios
//           .get(`https://api.openweathermap.org/data/2.5/weather?lat=${initialLat}&lon=${initialLon}&appid=${API_KEY}&units=metric`)
//           .then((res) => {
//             console.log(res);
//             commit("");
//           })
//           .catch((err) => console.log(err));
//       } catch (err) {
//         console.log(err);
//       }
//     },
//   },
//   mutations: {
//     GET_WEATHER_DATA(state, payload) {
//       console.log("2.payload", payload);
//       state.getWeatherData = payload;
//     },
//   },
//   getters: {
//     giveMeData(state) {
//       console.log("3.state", state);
//       return state.getWeatherData;
//     },
//   },
// });
