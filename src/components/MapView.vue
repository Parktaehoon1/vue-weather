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
        { latlng: new kakao.maps.LatLng(37.562632898194835, 126.9454282268269)},
        { latlng: new kakao.maps.LatLng(37.56195884514403, 126.94922601468826)},
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
