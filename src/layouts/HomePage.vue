<template>
    <div>
        <SidebarMenu @toggleContentPadding="toggleContentPadding"/>
        <div id="hompage-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import SidebarMenu from "../components/vSidebarMenu.vue";
    export default {
        name: 'HomePage',
        components: {
            SidebarMenu
        },
        methods: {
            toggleContentPadding(expanded) {
                expanded
                    ? document.getElementById("hompage-content").classList.add("open")
                    : document.getElementById("hompage-content").classList.remove("open");
            }
        },
    }
</script>

<style scoped>
#hompage-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 40px;
  padding-left: 104px;
  transition: padding-left 0.4s ease;
}
#hompage-content.open {
  padding-left: 340px;
}
</style>