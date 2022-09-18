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
      var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(37.564343, 126.947613), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

      var map = new kakao.maps.Map(mapContainer, mapOption);
      var positions = [
        {
          id: 1,
          store: "학생문화관점",
          location: "학생문화관 지하1층 로비",
          time: "학기 중: 월~금 08:30~19:00 | 토 09:00~14:00",
          vacation: "방학 중: 월~금 08:30~18:00 | 토 09:00~14:00",
          tel: "02-3277-3707",
          latlng: new kakao.maps.LatLng(37.562632898194835, 126.9454282268269),
        },
        {
          latlng: new kakao.maps.LatLng(37.56195884514403, 126.94922601468826),
        },
      ];

        positions.forEach(function(pos){
            const marker = new kakao.map.Marker({
                positioin: pos.latlng,
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
