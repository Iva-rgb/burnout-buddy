<template>
    <div id="card-container">
        <div class="card-wrapper">
            <div class="image-container">
                <img class="image" :src="require('../assets/'+cardDetails.image)" alt="">
            </div>
            <div class="card-details">
                <div>
                    <h5>{{cardDetails.title}}</h5>
                    <p>{{cardDetails.category}}</p>
                </div>
                <span v-if="cardDetails.url" class="play-icon" @click="$emit('playAudio', {name: cardDetails.url, url: encodeURI(cardDetails.url)})"><i class="fas fa-play"></i></span>
                <span v-else class="message-icon" @click="$emit('openChat', {status: cardDetails.status})"><i class="fas fa-comment"></i></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vCard',
        props: {
            cardDetails: Object,
        },
    }
</script>

<style scoped>
#card-container{
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: center;
}
.card-wrapper{
    display: flex;
    flex-direction: row;
    gap: 32px;
    width: 600px;
    height: 110px;
    border-radius: 6px;
    border: 1px solid hsl(101, 56%, 50%);
    background-color: hsl(101, 56%, 90%);
    box-shadow: 10px 11px 16px -5px rgba(0,0,0,0.39);
    -webkit-box-shadow: 10px 11px 16px -5px rgba(0,0,0,0.39);
    -moz-box-shadow: 10px 11px 16px -5px rgba(0,0,0,0.39);
}
.card-wrapper .image-container{
    padding: 16px 0 16px 16px;
}
.card-wrapper .card-details{
    padding: 16px 0;
}
.card-details .fa-play,
.card-details .fa-comment{
    transform: scale(2, 2);
    position: relative;
    left: 400px;
    bottom: 45px;
    cursor: pointer;
}
.card-wrapper .image{
    object-fit: contain
}
.card-wrapper .image-container,
.card-wrapper .image{
    width: 120px;
    height: 100%;
}
</style>