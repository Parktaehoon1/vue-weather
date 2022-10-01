<template>
  <ModaiView />
  <div class="wrap">
    <div class="container">
      <MainView :markDataResult="markDataResult" />
      <!-- MainView로 props -->
      <SubView @markData="showMessage" :markDataResult="markDataResult" />
      <!-- SubView로 emit -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import MainView from "@/components/MainView.vue";
import SubView from "@/components/SubView.vue";
import ModaiView from "@/components/ModalView.vue";
export default {
  components: {
    MainView,
    SubView,
    ModaiView,
  },
  setup(props) {
    const markDataResult = ref({});
    const showMessage = (markData) => {
      markDataResult.value = markData;
    };
    return {
      showMessage,
      markDataResult,
    };
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-size: 16px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55%;
  height: 90%;
  max-width: 1920px;
  max-height: 1354px;
}
</style>
