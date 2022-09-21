<template>
  <div class="leftContainer">
    <div id="cityNameBox">
      <div class="cityName">
        <!-- <p>{{ weatherData.name }}</p> -->
        <p>{{ cityName }}</p>
        <p>{{ currentTime }}</p>
      </div>
    </div>
    <div id="contentsBox">
      <div class="buttonBox">
        <div class="buttonBackground">
          <button class="forecast">forecast</button>
          <button class="airquality">airquality</button>
        </div>
      </div>
      <div class="weatherBox">
        <div class="weatherDegree">
          <p>{{Math.round(currentTemp)}}&deg;</p>
        </div>
        <div class="weatherIcon">
          <img src="@/assets/images/01d.png" alt="mainlogo" />
        </div>
        <div class="weatherData">
          <div class="detailData" v-for="(item, index) in temporaryData" :key="index">
            <p>{{ item.title }}</p>
            <p>{{ item.value }}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="todayWeather">
      <div class="textBox">
        <p>오늘의 추천 옷차림</p>
        <!-- <p>이번주 날씨보기</p> -->
      </div>
      <div class="timelyWeatherBox">
        <div class="timelyWeather">

        </div>
      </div>
    </div>
    <nav>
      <i class="fas fa-home"></i>
      <i class="fas fa-search-location"></i>
      <i class="fas fa-chart-line"></i>
      <i class="fas fa-cog"></i>
    </nav>
  </div>
</template>

<script>
  import axios from "axios";
  import dayjs from "dayjs";
  import "dayjs/locale/ko";
  import {useStore} from 'vuex';
  // import {ref,computed} from 'vue';
  import {
    computed,
    ref
  } from 'vue';
  dayjs.locale("ko");
  // console.log(cityName)
  export default {
    setup() {
      const store = useStore()
      store.dispatch('fetchOpenWeatherApi')
      const getData = computed(() => store.getters.giveMeData)
      console.log("데이터값",getData)


      let currentTime = dayjs().format("YYYY. MM .DD. ddd");
      let cityName = ref(""); // 도시 이름
      let currentTemp = ref(""); // 현재온도
      console.log(currentTemp) 
      let currentWind = ref(""); // 현재바람
      let currentIcon = ref(""); // 현재 온도 아이콘
      console.log("currentIcon 값", currentIcon)
      console.log("바람값", currentWind)
      let temporaryData = [{
          title: "습도",
          value: "",
        },
        {
          title: "풍속",
          value: "",
        },
        {
          title: "체감온도", //체감온도를 나타내는 데이터
          value: "",
        },
      ]; // 습도 풍속 풍향 체크 

      const fetchOpenWeatherApi = async () => {
        // API 호출을 위한 필수 데이터
        //https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}
        const API_KEY = "11d451fb1dc708c9efd7b05b16f080d4";
        let initialLat = 35.8683476;
        let initialLon = 128.5940482;
        try {
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${initialLat}&lon=${initialLon}&appid=${API_KEY}&units=metric`
          )
          let isInitialData = res.data; // 초기데이터
          let isInitialCityName = isInitialData.name; // 초기 도시이름 데이터
          let isInitialTemp = isInitialData.main.temp // 현재온도
          let isInitialFeel = isInitialData.main.feels_like // 체감온도
          let isInitialWindSpeed = isInitialData.wind.speed + "m/s"; // 바람속도
          let isInitialHumidity = isInitialData.main.humidity // 현재습도
          let isInitialIcon = isInitialData.weather[0].icon // 온도아이콘
          console.log("", isInitialIcon)
          cityName.value = isInitialCityName;
          currentTemp.value = isInitialTemp;
          currentWind.value = isInitialWindSpeed;
          currentIcon.value = isInitialIcon;

          temporaryData[0].value = isInitialHumidity
          temporaryData[1].value = isInitialWindSpeed
          temporaryData[2].value = Math.round(isInitialFeel) + '도'

        } catch (error) {
          console.log(error)
        }
      }
      fetchOpenWeatherApi();



        let clothes = document.getElementsByClassName('timelyWeather')
        console.log("currentTemp",currentTemp.value)

        let winter = currentTemp <= 4;
        let earlyWinter = currentTemp >= 5 && currentTemp < 9;
        let beginWinter = currentTemp >= 9 && currentTemp < 12;
        let fail = currentTemp >= 12 && currentTemp < 17;
        let earlyFall = currentTemp >= 17 && currentTemp < 20;
        let earlySummer = currentTemp >= 20 && currentTemp < 23;
        let beginSummer = currentTemp >= 23 && currentTemp < 28;
        let summer = currentTemp >= 28;


        if(beginSummer && earlySummer){
          clothes.innerHTML=`
          <li>지금날씨에는</li>
          <li>패딩점퍼</li>
          <li>두꺼운 코드</li>
          <li>목도리</li>
          <li>기모의류</li>
          `
        }


      return {
        currentTime,
        cityName,
        currentTemp,
        temporaryData,
        currentWind,
        currentIcon,
      };
    },
  };
</script>

<style scoped>
  .leftContainer {
    width: 324px;
    height: 700px;
    border-radius: 50px;
    background: linear-gradient(#16455f, #0e1239);
    box-shadow: 5px, 5px 10px gray;
  }

  #cityNameBox {
    width: 100%;
    height: 10%;
  }

  .cityName {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .cityName p {
    color: #fff;
    font-family: "Poppins", sans-serif;
    line-height: 2.5;
    text-align: center;
    margin: 10px 0;
  }

  .cityName p:first-child {
    width: 241px;
    height: 33px;
    font-size: 1.35rem;
  }

  .cityName p:last-child {
    width: 160px;
    height: 19px;
    font-size: 0.9rem;
    font-weight: 100;
    margin: 0;
  }

  #contentsBox {
    width: 100%;
    height: 62.5%;
  }

  .buttonBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
  }

  .buttonBackground {
    width: 224px;
    height: 35px;
    background-color: #052137;
    border-radius: 10px;
    display: flex;
  }

  .buttonBackground button {
    width: 112px;
    height: 35px;
    border: 0;
    border-radius: 7.5px;
    outline: 0;
    cursor: pointer;
  }

  .forecast {
    background-color: #0889ff;
    color: #fff;
  }

  .airquality {
    background-color: transparent;
    color: #467599;
  }

  .weatherBox {
    width: 100%;
    height: 80%;
  }

  .weatherDegree {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15%;
  }

  .weatherDegree p {
    font-size: 3.5rem;
    font-weight: 500;
    font-family: "GmarketSansBold";
    color: #fff;
  }

  .weatherIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60%;
  }

  .weatherIcon img {
    width: 168px;
    height: 160px;
  }

  .weatherData {
    display: flex;
    width: 100%;
    height: 25%;
    font-family: "LeferiPoint-WhiteObliqueA";
  }

  .detailData {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 33.33%;
    height: 100%;
  }

  .detailData:nth-child(1) {
    margin-left: 10px;
  }

  .detailData:nth-child(2) {
    margin-left: 0 -10px;
  }

  .detailData:nth-child(3) {
    margin-right: 10px;
  }

  .detailData p {
    line-height: 1.5;
    color: #fff;
    margin: 0;
  }

  .detailData p:first-child {
    font-size: 1rem;
    font-weight: 300;
    font-family: "Noto Sans KR", sans-serif;
    color: #799ed0;
  }

  .detailData p:last-child {
    font-size: 1rem;
    font-weight: 200;
    font-family: "Poppins", sans-serif;
  }

  #todayWeather {
    width: 100%;
    height: 17.5%;
  }

  .textBox {
    display: block;
    width: 100%;
    height: 35%;
    font-family: "Noto Sans KR", sans-serif;
  }

  .textBox p {
    font-weight: 400;
    font-size: 0.8rem;
    color: #0085ff;
    text-align: center;
  }


  .timelyWeatherBox {
    display: flex;
    align-items: center;
    width: calc(100% - 70px);
    height: 65%;
    padding: 0 30px;
  }

  .timelyWeather {
    display: block;
    width: 100%;
    height: 70px;
    margin: 0 auto;
    background-color: #0989ff;
    border-radius: 20px;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 100px);
    height: 10%;
    padding: 0 50px;
  }

  nav i {
    color: rgb(255, 255, 255);
    font-size: 1.15rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  nav i:hover {
    color: #799ed0;
  }
</style>