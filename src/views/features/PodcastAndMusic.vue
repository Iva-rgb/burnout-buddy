<template>
    <div>
        <div v-for="(audio, index) in playlist" :key="index" class="card">
            <vCard :cardDetails="audio" @playAudio="playAudio"/>    
        </div>
    </div>
</template>

<script>
import vCard from "../../components/vCard.vue"
    export default {
        name: 'PodcastAndMusic',
        components: {
            vCard,
        },
        data() {
            return {
                playlist: [],
            }
        },
        methods: {
            getPlaylist(chosenFeature) {
                const playlist = chosenFeature == "Podcast" ? 'podcastPlaylist' : 'musicPlaylist';
                try {
                    this.$http.get(`http://localhost:3000/${playlist}?username=henlo`)
                    .then(response => this.playlist = response.data); 
                } catch (err) {
                    this.$toast.error(err.response)
                }
            },
            playAudio(audioDetails){
                this.$goToRoute('AudioPlayer', {audioDetails})
            }
        },
        mounted () {
            this.getPlaylist(this.$store.state.chosenFeature)
        },
    }
</script>

<style scoped>
.card{
    margin: 24px 0;
    border: unset;
}
</style>