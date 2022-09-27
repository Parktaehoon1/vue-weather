<template>
  <div id="mapContainer">
    <div id="map"></div>
  </div>
</template>

<script>
// import { ref } from "vue";
import MapPositions from "@/assets/map-positions.json";
import { onMounted } from "@vue/runtime-core";
export default {
  setup(props, { emit }) {
    const showMessage = (markData) => {
      emit("markData", markData);
    };
    const initMap = () => {
      const mapContainer = document.getElementById("map"); // 지도를 표시할 div
      const mapOption = {
        center: new kakao.maps.LatLng(35.8683476, 128.5940482), // 여기도 값이 변경되어야됨
        level: 13, // 지도의 확대 레벨
      };
      const map = new kakao.maps.Map(mapContainer, mapOption);
      const positions = MapPositions.map((pos) => ({
        latlng: new kakao.maps.LatLng(...pos.latlng),
        cityName: pos.cityName,
      }));

      positions.forEach((pos) => {
        const marker = new kakao.maps.Marker({
          position: pos.latlng,
        });
        marker.setMap(map);
        kakao.maps.event.addListener(marker, "click", () => {
          let markData = {
            markDataLa: pos.latlng.La,
            markDataMa: pos.latlng.Ma,
          };
          console.log(
            "🚀 ~ file: MapView.vue ~ line 53 ~ goData ~ markData",
            markData
          );
          showMessage(markData);
        });
      });
    };

    onMounted(() => {
      if (window.kakao && window.kakao.maps) {
        initMap();
      } else {
        const script = document.createElement("script");
        /* global kakao */
        script.onload = () => kakao.maps.load(initMap);
        script.src =
          "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=93f6f38a995f93c693b206dab19423e0";
        document.head.appendChild(script);
      }
    });

    return {};
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
