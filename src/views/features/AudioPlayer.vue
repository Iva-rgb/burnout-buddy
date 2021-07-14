<template>
    <div>
        <div id="app" style="height:100vh;">
            <div
                :style="'overflow-y:auto; width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:'+backgroundColor+';'"
            >
                <div class="panelShadow" style="width:100%; height:100%;">
                    <w-audioplayer-vue :items="items"></w-audioplayer-vue>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let kpMenu = {
      AppBasic: {
        name: "AppBasic",
        color: "#aaa",
        backgroundColor: "#2b2b2b",
        classMode: "dark"
      },
      AppLanguage: {
        name: "AppLanguage",
        color: "#aaa",
        backgroundColor: "#2b2b2b",
        classMode: "dark"
      },
      AppCustomSize: {
        name: "AppCustomSize",
        color: "#aaa",
        backgroundColor: "#2b2b2b",
        classMode: "dark"
      },
      AppFullSize: {
        name: "AppFullSize",
        color: "#aaa",
        backgroundColor: "#2b2b2b",
        classMode: "dark"
      },
      AppDarkCyan: {
        name: "AppDarkCyan",
        color: "#aaa",
        backgroundColor: "#3a3a3a",
        classMode: "dark"
      },
      AppLightPink: {
        name: "AppLightPink",
        color: "#444",
        backgroundColor: "#fff",
        classMode: "light"
      }
    };

    export default {
        name: 'AudioPlayer',
        data() {
            return {
                items: [],
                backgroundColor: kpMenu["AppFullSize"].backgroundColor
            }
        },
        methods: {
            getAudio(audioDetails) {
                this.items.push(audioDetails);
            }
        },
        mounted () {
            this.getAudio(this.$route.params.audioDetails);
        },
    }
</script>

<style scoped>
.panelShadow {
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
}
</style>

