<template>
  <div id="mapContainer">
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=93f6f38a995f93c693b206dab19423e0";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const mapContainer = document.getElementById("map"); // 지도를 표시할 div
      const mapOption = {
          center: new kakao.maps.LatLng(36.73035, 127.967487), 
          level: 13, // 지도의 확대 레벨
        };

      const map = new kakao.maps.Map(mapContainer, mapOption);
      const positions = [
        {
          // 서울
          latlng: new kakao.maps.LatLng(36.5683, 126.9778),
        },
        {
          // 인천
          latlng: new kakao.maps.LatLng(37.40864282648822, 126.65071862847725),
        },
        {
          // 수원
          latlng: new kakao.maps.LatLng(37.2911, 127.0089),
        },
        {
          // 대전
          latlng: new kakao.maps.LatLng(36.3519957815787, 127.39131469478555),
        },
        {
          // 태백
          latlng: new kakao.maps.LatLng(37.15818414766273, 128.928560966107),
        },
        {
          // 강릉
          latlng: new kakao.maps.LatLng(37.791688035246636, 128.82867301427635),
        },
        {
          // 대구
          latlng: new kakao.maps.LatLng(35.871148697228875, 128.61345034272617),
        },
        {
          // 울산
          latlng: new kakao.maps.LatLng(35.5372, 129.3167),
        },
        {
          // 부산
          latlng: new kakao.maps.LatLng(35.185997613083536, 129.0662809358643),
        },
        {
          // 전주
          latlng: new kakao.maps.LatLng(35.90493196781132, 127.17357575637105),
        },
        {
          // 광주
          latlng: new kakao.maps.LatLng(35.166611792579545, 126.84603104436039),
        },
        {
          // 목포
          latlng: new kakao.maps.LatLng(34.823630139082525, 126.39766650967137),
        },
        {
          // 제주도
          latlng: new kakao.maps.LatLng(33.5097, 126.5219),
        },
      ];

        positions.forEach(function(pos){
            const marker = new kakao.maps.Marker({
                position: pos.latlng
            });
            marker.setMap(map);
        })
    },
  },
};
</script>

<style scoped>
#mapContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35%;
  /* background-color: whitesmoke; */
}

#map {
  width: 80%;
  height: 90%;
  border-radius: 10px;
}
</style>
