<template>
    <h1>Welcome to Galaxy Idle</h1>
    <div class="login">
        <input type="text" placeholder="Username" v-on:keydown.enter="login"><br>
        <button v-on:click="login">Login</button>
    </div>
</template>

<script>
import { store } from '../store/storeData'

export default {
    name: 'LoginVue',
    methods: {
        async login()
        {
            let username = document.querySelector('.login > input').value
            
            if (username == null || username == '') {
                return 
            }

            let data = await store().isUserExist(username)
            let redirect = false;

            if (data.name == null) {
                let execute = confirm(`The player '${username}' doesn't exist, continue with ?`);

                if (execute) {
                    let factoryName = ''
                    
                    do {
                        factoryName = prompt("Name of your factory ?")
                    } while(factoryName == '')

                    await store().createUser(username, factoryName)

                    redirect = true;
                }
            }
            else {
                redirect = true
            }

            if (redirect) {
                //redirect to mainpage
                window.location.href += 'game';
            }
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

body {
    background-image: url("https://media.npr.org/assets/img/2022/07/15/gettyimages-1241857240-af82eeb8a2d8927ff64c62f852305170b614773f-s1600-c85.webp");
    background-repeat: no-repeat;
}

h1 {
    color: white;
    text-align: center;
    font-family: "Bungee";
    font-size: 35;
}

button, input {
	margin: 0.5em 0;
	padding: .8em 2.2em;
	font-family: "Work Sans", sans-serif;
}

.login {
    text-align: center;
}
</style>