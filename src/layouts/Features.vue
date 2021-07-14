<template>
    <div id="features-container">
        <div>
            <span @click="$goToRoute('Dashboard')"><i class="fas fa-home" ></i></span>
        </div>
        <div class='features-wrapper'>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Features',
    }
</script>

<style scoped>
#features-container .fa-home{
    position: relative;
    top: 32px;
    left: 32px;
    color: #023047;
    cursor: pointer;
    transform: scale(2.5, 2.5);
}
#features-container .features-wrapper{
    margin-top: 120px;
}
</style>