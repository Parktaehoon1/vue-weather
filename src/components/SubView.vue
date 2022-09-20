<template>
    <div class="rightContainer">
        <div id="cityNameBox">
            <div class="cityName">
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
                <div class="airCondition">
                    <p>{{feeling}}</p>
                </div>
                <div class="detail">
                    <div class="title">
                        <p>🌎상세 날씨 데이터🌎</p>
                    </div>
                    <div class="data" v-for="(item, index) in subWeatherData" :key="index">
                        <div class="dataName">
                            <p></p>
                            <p>{{item.name}}</p>
                        </div>
                        <div class="dataValue">
                            <p>{{item.value}}
                                <span></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MapView />
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
    import MapView from '@/components/MapView.vue'
    import dayjs from "dayjs";
    import "dayjs/locale/ko";
    import {
        ref
    } from 'vue';
    dayjs.locale("ko");
    export default {
        components: {
            MapView
        },
        setup() {
            let currentTime = dayjs().format("YYYY. MM .DD. ddd");
            let cityName = ref(""); // 도시 이름
            let subWeatherData = ref([]);
            let feeling = ref("");

            const Unix_timestamp = (dt) => {
                let date = new Date(dt * 1000);
                let hour = "0" + date.getHours();
                return hour.substring(-2) + "시"
            }

            const fetchOpenWeatherApi = async () => {
                // API 호출을 위한 필수 데이터
                //https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}
                const API_KEY = "11d451fb1dc708c9efd7b05b16f080d4";
                let initialLat = 37.562632898194835;
                let initialLon = 126.9454282268269;
                try {
                    const res = await axios.get(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${initialLat}&lon=${initialLon}&appid=${API_KEY}&units=metric`
                    )
                    console.log("resdata", res.data)
                    let isInitialData = res.data; // 초기데이터
                    let isInitialFeel = isInitialData.main.feels_like // 초기 체감온도
                    let isInitialCityName = isInitialData.name; // 초기 도시이름 데이터
                    let isTimeSunrise = isInitialData.sys.sunrise; // 일출
                    let isTimeSunset = isInitialData.sys.sunset; // 일몰
                    let isInitialVisible = isInitialData.visibility; // 가시거리


                    if(isInitialFeel > 30) feeling.value = "매우 더움";
                    if(isInitialFeel <= 30) feeling.value = "더움";
                    if(isInitialFeel <= 25) feeling.value = "보통";
                    if(isInitialFeel <= 20) feeling.value = "신선함";
                    if(isInitialFeel <= 15) feeling.value = "쌀쌀함";
                    if(isInitialFeel <= 10) feeling.value = "추움";
                    if(isInitialFeel <= 0) feeling.value = "매우 추움";  // return이 없는거는 {} 를 생략해서 그런 것


                    let isPrecessedData = [{
                            name: "일출시간",
                            value: Unix_timestamp(isTimeSunrise)
                        },
                        {
                            name: "일몰시간",
                            value: Unix_timestamp(isTimeSunset)
                        },
                        {
                            name: "가시거리",
                            value: isInitialVisible.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                ",") + "M"
                        },
                    ];

                    cityName.value = isInitialCityName;
                    console.log(cityName.value)
                    subWeatherData.value = isPrecessedData;
                } catch (error) {}
            }

            fetchOpenWeatherApi();

            return {
                currentTime,
                cityName,
                subWeatherData,
                feeling
            }
        }

    }
</script>

<style scoped>
    .rightContainer {
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
        font-family: 'Poppins', sans-serif;
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
        height: calc(45% - 16px);
        margin-top: 16px;
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
        background-color: transparent;
        color: #467599;
    }

    .airquality {
        background-color: #0889ff;
        color: #fff;
    }


    .weatherBox {
        width: 100%;
        height: 80%;
    }

    .airCondition {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 35%;
        font-family: "GmarketSansBold";
    }

    .airCondition p {
        text-align: center;
        font-size: 2.25rem;
        font-weight: 500;
        /* font-family: 'GmarketSansBold'; */
        color: #fff;
    }

    .detail {
        width: 100%;
        height: 65%;
    }

    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 25%;
        color: white;
        font-family: 'Be Vietnam Pro', sans-serif;
    }

    .title p {
        /* font-family: 'LeferiPoint-WhiteObliqueA'; */
    }

    .data {
        display: flex;
        width: 100%;
        height: 27.5%;
    }

    .dataName {
        display: flex;
        align-items: center;
        width: 50%;
        height: 100%;
    }

    .dataName p:first-child {
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #ffde23;
        margin-left: 50px;
    }

    .dataName p:last-child {
        margin-left: 10px;
        color: white;
        font-weight: 300;
        font-size: 0.9rem;
    }

    .dataValue {
        display: flex;
        align-items: center;
        justify-content: right;
        width: 50%;
        height: 100%;
    }

    .dataValue p {
        color: white;
        font-weight: 300;
        margin-right: 50px;
    }

    .dataValue p span {
        font-weight: 600;

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