<template>
  <div id="create-group">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form
        @submit.prevent="handleSubmit(createGroup)"
        id="create-group-form"
        class="d-flex justify-content-center align-items-center flex-wrap flex-column"
      >
        <h4 class="flex-item pb-3">Enter group details:</h4>
        <div class="pb-3 flex-item">
          <ValidationProvider name="title" rules="required" v-slot="{ errors }">
            <vInput
              :label="'Title'"
              v-model="groupDetails.title"
              :required="true"
              :placeholder="'e.g. Meditation'"
            ></vInput>
            <span class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="pb-4 flex-item">
          <ValidationProvider name="category" rules="required" v-slot="{ errors }">
            <vInput
              :label="'Category'"
              v-model="groupDetails.category"
              :required="true"
              :placeholder="'e.g. Self-help'"
            ></vInput>
            <span class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="pb-4 flex-item">
          <ValidationProvider name="status" rules="required" v-slot="{ errors }">
            <vRadioButtons
              :label="'Status'"
              :options="radioButtonOptions"
              :value="groupDetails.status"
              :buttonsInline="true"
              @input="(value) => (groupDetails.status = value)"
              :class="{ 'has-error': errors.length }"
            ></vRadioButtons>
            <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="flex-item pb-2">
          <button type="submit" class="btn btn-primary mb-2 create-btn">CREATE</button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "CreateGroup",
  data() {
    return {
      groupDetails: {
        title: "",
        image: "selfHelp.jpg",
        category: "",
        owner: this.$store.getters.loggedInUser.username,
        status: null,
      },
      // Radio button options
      radioButtonOptions: [
        { name: "Public", value: 0 },
        { name: "Private", value: 1 },
      ],
    };
  },
  methods: {
    createGroup() {
      try {
        this.groupDetails.id = Date.now();

        this.$http.post("http://localhost:3000/groups", this.groupDetails);
        this.$toast.success("Your new group has been created.");
        this.$goToRoute("Messaging");
      } catch (err) {
        this.$toast.error(err.response);
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
#create-group {
  transform: translateY(30%);
}
#create-group-form .flex-item,
#link-to-register .flex-item {
  min-width: 304px;
}
#create-group-form .create-btn {
  background-color: #ade194;
  border-color: #ade194;
  width: 100%;
  font-weight: bold;
  /* color: black; */
}
.password-input {
  position: relative;
}
.fa-eye {
  position: relative;
  bottom: 30px;
  left: 268px;
  cursor: pointer;
  color: grey;
}
.icon {
  transform: scale(1.5, 1.5);
}
.fa-facebook-square {
  color: #0c88ef;
}
.fa-google {
  color: #4285f4;
}
.fa-twitter {
  color: #5da9dd;
}
.sign-up-btn {
  border: unset;
  background-color: unset;
  text-decoration: underline;
  color: #4285f4;
}
@media only screen and (max-width: 375px) {
  #create-group-form .flex-item,
  #link-to-register .flex-item {
    min-width: 100%;
  }
  #link-to-register h5 {
    font-size: 1.1em;
  }
}
</style>
