<template>
    <div>
        <div class="group-buttons">
            <div class="nav-button" v-for="(item, index) in buttonDetails" :key="index" @click="featureClicked(item)">
                <vNavigationButton :buttonDetails="item"/>
            </div>
        </div>
    </div>
</template>

<script>
import vNavigationButton from "../../components/vNavigationButton.vue"
    export default {
        name: 'Dashboard',
        data() {
            return {
                buttonDetails: [{name:'Podcast', image:'podcastBackgroundImage.jpg'}, {name:'Music/Sound', image:'musicImage.jpg'}, {name:'Pomodoro', image:'pomodoroBackground.jpg'},],
            }
        },
        components: {
            vNavigationButton,
        },
        methods: {
            featureClicked(item) {
                switch(item.name){
                    case 'Podcast': this.$goToRoute('PodcastAndMusic', {chosenFeature: item.name}); break;
                    case 'Music/Sound': this.$goToRoute('PodcastAndMusic', {chosenFeature: item.name}); break;
                    case 'Pomodoro': this.$goToRoute('Pomodoro'); break;
                    default: console.log('Error message');
                }
            }
        },
        mounted () {
        },
    }
</script>

<style scoped>
.group-buttons{
    display: flex;
    flex-direction: column;
    gap: 24px;
    
}
</style>