<template>
    <h1>Bienvenue sur Galaxy Idle</h1>
    <div class="login">
        <input type="text" placeholder="username" v-on:keydown.enter="login">
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