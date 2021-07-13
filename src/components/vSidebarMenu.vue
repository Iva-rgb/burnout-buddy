<template>
  <div>
    <nav
      class="site-menubar"
      :class="{ collapsed: !isExpanded}"
    >
      <span  @click="toggleExpandedMenu">
          <i class="fas fa-bars menu-icon"></i>
      </span>
      <ul class="site-menu" v-show="isExpanded">
        <li style="margin-left: 16px;">
            <div class="nav-item-wrapper">
                <i class="fas fa-cog" style="transform: scale(1.5, 1.5);"></i>
                <p class="acc-settings">Account settings</p>
            </div>
        </li>
        <li class="nav-item" style="margin-left: 56px;">
            <div class="nav-item-wrapper profile-btn" style="cursor: pointer" @click="$goToRoute('Profile')">
                <i class="fas fa-user-alt" style="transform: scale(1.5, 1.5);"></i>
                <p style="margin-left: 16px; margin-top: unset; margin-bottom: unset; font-size: 18px;">Profile</p>
            </div>
        </li>
      </ul>
      <button @click="$goToRoute('Login')" class="btn btn-primary log-out-btn"  v-show="isExpanded">
          Log out
      </button>
    </nav>
  </div>
</template>

<script>
    export default {
        name: 'SidebarMenu',
        data() {
            return {
                isExpanded: false,
            };
        },
        methods: {
            logOut() {
                console.log('log out')
            },
            toggleExpandedMenu() {
                this.isExpanded = !this.isExpanded;
                this.$emit("toggleContentPadding", this.isExpanded);
            },
        },
    }
</script>

<style scoped>
.site-menubar {
  position: fixed;
  z-index: 1500;
  left: 0;
  height: 100%;
  width: 300px;
  color: #fff;
  background: #b7b7a4;
  transition: all ease 0.4s;
}

.collapsed {
  width: 64px;
}

.site-menubar.collapsed .menu-icon{
    right: 26px;
}

.hidden {
  transform: translateX(-300px);
}

.site-menubar .site-menu {
  padding: 0;
  margin: 0;
  list-style: none;
  margin-top: 120px;
}

.site-menu .nav-item-wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 12px;
}

.site-menu .acc-settings{
    font-size: 20px;
    margin-left: 16px;
    margin-top: unset;
    margin-bottom: unset;
}

.site-menubar .menu-icon {
  position: relative;
  transform: scale(2, 2);
  float: right;
  right: 32px;
  top: 24px;
  cursor: pointer;
}

.profile-btn:hover{
    color: #fef0ae;
}

.site-menubar .log-out-btn{
    position: absolute;
    right: 30px;
    bottom: 32px;
    width: 80%;
    height: 44px;
    background-color: white;
    border-color: white;
    font-weight: bold;
    font-size: 1.4em;
    color: #b7b7a4;
}

.site-menu a,
.site-menu a:hover,
.site-menu a:active,
.site-menu a:focus,
.site-menu a:visited {
  color: white;
  text-decoration: none;
}

/* ANIMATIONS */
.slide-enter-active,
.slide-leave-active {
  transition: all ease-in 0.3s;
  max-height: 208px;
  opacity: 0;
}
.slide-enter,
.slide-leave-to {
  max-height: 0px;
  opacity: 0px;
}
/* //51BBFE 
87BCDE - Aero
*/
</style>
