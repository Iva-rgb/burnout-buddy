<template>
  <div id="pomodoro-container">
    <div class="pomodoro-wrapper">
      <div class="content">
        <h2 class="title">{{ title }}</h2>

        <div id="timer">
          <span id="minutes">{{ minutes }}</span>
          <span id="middle">:</span>
          <span id="seconds">{{ seconds }}</span>
        </div>

        <div id="buttons">
          <button
            id="start"
            class="button btn btn-primary"
            v-if="!timer"
            @click="startTimer"
          >
            <span><i class="far fa-play-circle icon"></i></span>
          </button>
          <button
            id="stop"
            class="button btn btn-primary"
            v-if="timer"
            @click="stopTimer"
          >
            <span><i class="far fa-pause-circle icon"></i></span>
          </button>
          <button
            id="reset"
            class="button btn btn-primary"
            v-if="resetButton"
            @click="resetTimer"
          >
            <span><i class="fas fa-undo icon"></i></span>
          </button>
        </div>
      </div>
    </div>
    <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
  </div>
</template>

<script>
export default {
  name: "Pomodoro",
  data() {
    return {
      timer: null,
      totalTime: 25 * 60,
      resetButton: false,
      title: "Let the countdown begin!!",
    };
  },
  methods: {
    startTimer: function () {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
      this.title = "Greatness is within sight!!";
    },
    stopTimer: function () {
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = true;
      this.title = "Never quit, keep going!!";
    },
    resetTimer: function () {
      this.totalTime = 25 * 60;
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
      this.title = "Let the countdown begin!!";
    },
    padTime: function (time) {
      return (time < 10 ? "0" : "") + time;
    },
    countdown: function () {
      if (this.totalTime >= 1) {
        this.totalTime--;
      } else {
        this.audio.play();
        this.totalTime = 0;
        this.resetTimer();
      }
    },
  },
  computed: {
    minutes: function () {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function () {
      const seconds = this.totalTime - this.minutes * 60;
      return this.padTime(seconds);
    },
    audio: function () {
      return document.getElementById("beep");
    },
  },
};
</script>

<style scoped>
#pomodoro-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.pomodoro-wrapper{
    border: 2px solid hsl(101, 56%, 50%);
    border-radius: 3px;
    padding: 40px 80px;
}
#start, #stop{
    margin-right: 24px;
}
#message {
  color: #ddd;
  font-size: 50px;
  margin-bottom: 20px;
}
#timer {
  font-size: 7em;
  line-height: 1;
  margin-bottom: 40px;
}
#buttons button{
    width: 5em;
    height: 2.5em;
    background-color: hsl(101, 56%, 50%);
    border: none;
    outline: 2px solid hsl(101, 56%, 50%);
    outline-offset: 4px;
}
#buttons .icon{
    transform: scale(1.5, 1.5);
}
#buttons button:focus{
    box-shadow: none;
}
</style>
