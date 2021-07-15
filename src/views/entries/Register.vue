<template>
    <div>
        <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(register)" id="register-form" class="d-flex justify-content-center align-items-center flex-wrap flex-column">
            <h4 class="flex-item pb-3">Register with: </h4>
            <div class="pb-3 flex-item">
                <ValidationProvider name="username" rules="required" v-slot="{ errors }">
                    <vInput
                        :label="'Username'"
                        v-model="newUser.username"
                        :required="true"
                        :placeholder="'e.g. Andrew Miller'"
                    ></vInput>
                    <span class="error-message">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <div class="pb-3 flex-item">
                <ValidationProvider name="e-mail" rules="required|email" v-slot="{ errors }">
                    <vInput
                        :label="'E-mail'"
                        v-model="newUser.email"
                        :required="true"
                        :placeholder="'e.g. andrewmiller@example.net'"
                    ></vInput>
                    <span class="error-message">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <div class="pb-3 flex-item">
                <ValidationProvider name="password" rules="required" v-slot="{ errors }">
                    <vInput
                        :label="'Password'"
                        v-model="newUser.password"
                        :required="true"
                        :type="'password'"
                    ></vInput>
                    <span class="error-message">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <div class="pb-4 flex-item">
                <ValidationProvider name="confirm password" rules="required" v-slot="{ errors }">
                    <vInput
                        :label="'Confirm password'"
                        v-model="confirmPassword"
                        :required="true"
                        :type="'password'"
                    ></vInput>
                    <span class="error-message">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <div class="flex-item pb-2">
                <button type="submit" class="btn btn-primary mb-2 register-btn">REGISTER</button>
            </div>
            <p>or</p>
            <div class="d-flex justify-content-around align-items-center flex-wrap flex-row flex-item">
                <i class="fab fa-facebook-square icon"></i>
                <i class="fab fa-google icon"></i>
                <i class="fab fa-twitter icon"></i>
            </div>
        </form>
        </ValidationObserver>
        <div id="link-to-login" class="d-flex justify-content-center align-items-center flex-wrap flex-column mt-5">
            <h5 class="flex-item">Already have an account?<button @click="$goToRoute('Login')" class="log-in-btn">Log in</button></h5>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Register',
        data() {
            return {
                newUser: {
                    username: '',
                    email: '',
                    password: '',
                    group: {},
                    memberships: null,
                },
                confirmPassword: '',
            }
        },
        methods: {
            register() {
                if(this.confirmPassword != this.newUser.password){
                    this.$toast.error('The passwords you entered do not match.');
                } else {
                    this.newUser.id = Date.now();

                    try {
                        this.$http.post("http://localhost:3000/users", this.newUser).then(response => console.log(response));
                        this.$toast.success('Your new account has been registered.')
                        this.$goToRoute('Dashboard');
                    } catch (err) {
                        this.$toast.error(err.response)
                    }
                }
            },
        },
        mounted () {
        },
    }
</script>

<style scoped>
#register-form .flex-item,
#link-to-login .flex-item{
    min-width: 304px;
}
#register-form .register-btn{
    background-color: #ade194;
    border-color: #ade194;
    width: 100%;
    font-weight: bold;
    /* color: black; */
}
.password-input{
    position: relative;
}
.fa-eye{
    position: relative;
    bottom: 30px;
    left: 268px;
    cursor: pointer;
    color: grey;
}
.icon{
    transform: scale(1.5, 1.5)
}
.fa-facebook-square{
    color: #0c88ef;
}
.fa-google{
    color: #4285f4;
}
.fa-twitter{
    color: #5da9dd
}
.log-in-btn{
    border: unset;
    background-color: unset;
    text-decoration: underline;
    color: #4285f4;
}
@media only screen and (max-width: 375px)  {
    #register-form .flex-item,
    #link-to-login .flex-item{
        min-width: 100%;
    }
    #link-to-login h5{
        font-size: 1.1em;
    }
}
</style>