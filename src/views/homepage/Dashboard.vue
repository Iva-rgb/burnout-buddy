<template>
    <div id="dashboard-wrapper">
        <div class="group-buttons">
            <div class="nav-button" v-for="(item, index) in buttonDetails" :key="index" @click="featureClicked(item)">
                <vNavigationButton :buttonDetails="item"/>
            </div>
        </div>
        <div class="icon-message">
            <span @click="$goToRoute('Messaging')"><i class="fas fa-comment-dots "></i></span>
        </div>
    </div>
</template>

<script>
import vNavigationButton from "../../components/vNavigationButton.vue"
import { mapActions } from 'vuex'
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
            ...mapActions({
                setChosenFeature: 'setChosenFeature'
            }),
            featureClicked(item) {
                switch(item.name){
                    case 'Podcast': this.$goToRoute('PodcastAndMusic'); this.setChosenFeature(item.name); break;
                    case 'Music/Sound': this.$goToRoute('PodcastAndMusic'); this.setChosenFeature(item.name); break;
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
#dashboard-wrapper .icon-message{
    position: absolute;
    right: 32px;
    top: 32px;
    color: hsl(101, 56%, 50%);
    cursor: pointer;
    transform: scale(2.5, 2.5);
}
.group-buttons{
    display: flex;
    flex-direction: column;
    gap: 24px;
}
</style>