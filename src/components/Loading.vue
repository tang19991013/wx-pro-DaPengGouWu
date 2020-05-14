<template>
    <div class="loading">
        <img src="/imgs/loading-svg/loading-bars.svg">
    </div>
</template>
<script>
export default {
    name:"loading"
}
</script>
<style scoped>
    .loading{
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .loading>img{
        height: 100px;
    }
</style>