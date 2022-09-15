<template>
    <div class="leftContainer">
        <div id="cityNameBox">
            <div class="cityName">
                <p>San Fransisco</p>
                <p>Jan 28</p>
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
                    <p>10&deg;</p>
                </div>
                <div class="weatherIcon">
                    <img src="@/assets/43.png" alt="mainlogo">
                </div>
                <div class="weatherData">
                    <div class="detailData" v-for="Temporary in TemporaryData" :key="Temporary.title">
                        <p>{{ Temporary.title }}</p>
                        <p>{{ Temporary.value }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="todayWeather">
            <div class="textBox">
                <p>시간대별 날씨 정보</p>
                <p>이번주 날씨보기</p>
            </div>
            <div class="timelyWeatherBox">
                <div class="timelyWeather">
                    <div class="icon">
                        <img src="@/assets/29.png" alt="">
                    </div>
                    <div class="data">
                        <p class="time">2pm</p>
                        <p class="currentDegree">32deg</p>
                        <div>
                            <img src="@/assets/drop.png" alt="">
                            <p class="fall">15%</p>
                        </div>
                    </div>
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
    export default {
        setup() {

            return {
                //임시데이터
                TemporaryData: [{
                        title: '습도',
                        value: "88%"
                    },
                    {
                        title: '풍속',
                        value: "10m/s"
                    },
                    {
                        title: '풍향',
                        value: "WS"
                    },
                ]
            }
        }
    }
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
        font-family: 'Be Vietnam Pro', sans-serif;
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
        font-family: 'Noto Sans KR', sans-serif;
        color: #799ed0;
    }

    .detailData p:last-child {
        font-size: 1rem;
        font-weight: 200;
        font-family: 'Poppins', sans-serif;
    }


    #todayWeather {
        width: 100%;
        height: 17.5%;
    }

    .textBox {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: calc(100% - 70px);
        height: 35%;
        padding: 0 35px;
        font-family: 'Noto Sans KR', sans-serif;
    }

    .textBox p {
        font-weight: 400;
        font-size: 0.8rem;
        color: #fff;
        text-align: center;
    }

    .textBox p:last-child {
        font-weight: 400;
        font-size: 0.8rem;
        color: #0085ff;
        cursor: pointer;
        margin-bottom: 2px;
    }

    .timelyWeatherBox {
        display: flex;
        align-items: center;
        width: calc(100% - 70px);
        height: 65%;
        padding: 0 30px;
    }

    .timelyWeather {
        display: flex;
        width: 126px;
        height: 70px;
        background-color: #0989ff;
        border-radius: 20px;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45%;
        height: 100%;
    }

    .icon img {
        width: 100%;
    }


   .timelyWeather .data {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        width: 55%;
        height: 100%;
    }

    .data p {
        color: whitesmoke;
        font-family: 'Poppins', sans-serif;
        text-align: center;
    }

    .data .time {
        font-size: 0.8rem;
        font-weight: 200;
        margin: 0;
    }

    .data .currentDegree {
        font-size: 1.2rem;
        margin: 0;
    }


    .data div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 33.33%;
    }

    .data div img {
        height: 55%;
    }

    .fall {
        font-size: 0.9rem;
        margin: 0;
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