<template>
  <div class="messaging-wrapper">
    <div v-for="(group, index) in groups" :key="index" class="card">
      <vCard :cardDetails="group" @openChat="openChat" />
    </div>
    <div class="create-group-link" @click="$goToRoute('CreateGroup')">
      <p>Create group</p>
      <span><i class="fas fa-plus"></i></span>
    </div>
  </div>
</template>

<script>
import vCard from "../../components/vCard.vue";
export default {
  name: "Messaging",
  components: {
    vCard,
  },
  data() {
    return {
      groups: [],
    };
  },
  methods: {
    getGroups() {
      try {
        this.$http
          .get(`http://localhost:3000/groups`)
          .then((response) => (this.groups = response.data));
      } catch (err) {
        this.$toast.error(err.response);
      }
    },
    openChat(status) {
      if (status) {
        this.$toast.info(
          `This group is private. To enter you need to receive an invite from ${this.$store.getters.loggedInUser.username}`,
          {
            duration: 5000,
          }
        );
      } else{
        //   this.$goToRoute("Chat");
      }
    },
  },
  mounted() {
    this.getGroups();
  },
};
</script>

<style scoped>
.messaging-wrapper .create-group-link {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
  align-items: center;
  top: 32px;
  right: 32px;
  cursor: pointer;
}
.create-group-link p {
  margin: 0;
  margin-right: 16px;
  font-size: 1.5em;
}
.create-group-link .fa-plus {
  transform: scale(2, 2);
  color: hsl(101, 56%, 50%);
}
.card {
  margin: 24px 0;
  border: unset;
}
</style>
