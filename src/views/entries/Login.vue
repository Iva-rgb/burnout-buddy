<template>
    <div>
        <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(login)" id="login-form" class="d-flex justify-content-center align-items-center flex-wrap flex-column">
            <h4 class="flex-item pb-3">Log in with: </h4>
            <div class="pb-3 flex-item">
                <ValidationProvider name="username" rules="required" v-slot="{ errors }">
                    <vInput
                        :label="'Username'"
                        v-model="username"
                        :required="true"
                        :placeholder="'e.g. Andrew Miller'"
                    ></vInput>
                    <span class="error-message">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <div class="pb-4 flex-item">
                <ValidationProvider name="password" rules="required" v-slot="{ errors }">
                    <vInput
                        :label="'Password'"
                        v-model="password"
                        :required="true"
                        :type="'password'"
                    ></vInput>
                    <span class="error-message">{{ errors[0] }}</span>
                </ValidationProvider>
            </div>
            <div class="flex-item pb-2">
                <button type="submit" class="btn btn-primary mb-2 login-btn">LOGIN</button>
            </div>
            <p>or</p>
            <div class="d-flex justify-content-around align-items-center flex-wrap flex-row flex-item">
                <i class="fab fa-facebook-square icon"></i>
                <i class="fab fa-google icon"></i>
                <i class="fab fa-twitter icon"></i>
            </div>
        </form>
        </ValidationObserver>
        <div id="link-to-register" class="d-flex justify-content-center align-items-center flex-wrap flex-column mt-5">
            <h5 class="flex-item">Don't have an account? <button @click="$goToRoute('Register')" class="sign-up-btn">Sign up</button></h5>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login() {
                console.log('login');
            },
        },
        mounted () {
        },
    }
</script>

<style scoped>
#login-form .flex-item,
#link-to-register .flex-item{
    min-width: 304px;
}
#login-form .login-btn{
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
.sign-up-btn{
    border: unset;
    background-color: unset;
    text-decoration: underline;
    color: #4285f4;
}
@media only screen and (max-width: 375px)  {
    #login-form .flex-item,
    #link-to-register .flex-item{
        min-width: 100%;
    }
    #link-to-register h5{
        font-size: 1.1em;
    }
}
</style>