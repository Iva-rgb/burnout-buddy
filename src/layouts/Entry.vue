<template>
    <div id="entries-container">
        <div id="logo-container">
            <img class="logo" src="../assets/logo.png">
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Entry',
    }
</script>

<style scoped>
#entries-container{
    margin: 48px 16px;
}
#logo-container{
    text-align: center;
    margin-bottom: 56px;
}
#logo-container .logo{
    width: 200px;
    height: 200px;
}
</style>