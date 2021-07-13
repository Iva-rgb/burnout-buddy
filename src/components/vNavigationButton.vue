<template>
    <div>
        <button id="nav-button"  :style="{ 'background-image': 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('+require('../assets/'+image)+')'}">
            <span>Hello</span>
            <p class="vertical-line"></p>
            <i class="fas fa-chevron-right"></i>
            </button>
    </div>
</template>

<script>
    export default {
        props: {
            image: String,
        },
        name: 'vNavigationButton',
        methods: {
        },
    }
        // url ('/image/btn.png')
</script>

<style>
#nav-button{
    width: 500px;
    height: 90px;
    border-radius: 10px;
    border: none;
    box-shadow: 10px 11px 16px -5px rgba(0,0,0,0.39);
    -webkit-box-shadow: 10px 11px 16px -5px rgba(0,0,0,0.39);
    -moz-box-shadow: 10px 11px 16px -5px rgba(0,0,0,0.39);
    background-color: #000000;
    background-position: center;
	background-size: cover;
	color: #ffffff;
	padding: 1em;
	text-align: center;
}
.vertical-line{
    position: relative;
    bottom: 40px;
    right: 50px;
    border-right: 4px solid white;
    height: 90px;
    margin-bottom: unset;
}
#nav-button .fa-chevron-right{
    position: relative;
    bottom: 94px;
    right: 12px;
    color: white;
    transform: scale(2.5, 2.5);
    float: right;
    transition: right 0.5s;
}
#nav-button:hover .fa-chevron-right{
    right: 5px;
}

</style>