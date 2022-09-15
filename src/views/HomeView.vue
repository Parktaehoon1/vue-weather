<template>
    <div class="wrap">
        <div class="container">
            <MainView />
            <SubView />
        </div>
    </div>
</template>

<script>
    import MainView from '@/components/MainView.vue'
    import SubView from '@/components/SubView.vue'
    export default {
        components: {
            MainView,
            SubView
        }
    }
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