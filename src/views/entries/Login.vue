<template>
    <div>
        <form @submit.prevent="login" id="login-form" class="d-flex justify-content-center align-items-center flex-wrap flex-column">
            <h4 class="flex-item pb-3">Log in with: </h4>
            <div class="pb-3 flex-item">
                <vInput
                    :label="'Username'"
                    :required="true"
                    :placeholder="'e.g. Andrew Miller'"
                ></vInput>
            </div>
            <div class="pb-3 flex-item">
                <vInput
                    :label="'Password'"
                    :required="true"
                ></vInput>
            </div>
            <p>or</p>
            <div class="d-flex justify-content-around align-items-center flex-wrap flex-row flex-item pb-4">
                <i class="fab fa-facebook-square icon"></i>
                <i class="fab fa-google icon"></i>
                <i class="fab fa-twitter icon"></i>
            </div>
            <div class="flex-item">
                <button type="submit" class="btn btn-primary mb-2 login-btn">LOGIN</button>
            </div>
        </form>
        <div id="link-to-register" class="d-flex justify-content-center align-items-center flex-wrap flex-column mt-4">
            <h5 class="flex-item">Don't have an account? <button @click="$goToRoute('Register')" class="sign-up-btn">Sign up</button></h5>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        methods: {
            login() {
                console.log('login');
            }
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

</style>