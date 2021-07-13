<template>
    <div>
        <div class="group-buttons">
            <div class="nav-button" v-for="(item, index) in items" :key="index">
                <vNavigationButton :image="item"/>
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
                items: ['podcastBackgroundImage.jpg', 'musicImage.jpg', 'pomodoroBackground.jpg'],
            }
        },
        components: {
            vNavigationButton,
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