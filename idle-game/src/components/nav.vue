<template>
    <nav id="css_nav">
        <div class="userInfo">
            <h1> {{ factoryName }} </h1>
            <p> Username: {{ username }} </p>
            <p> Balance: {{ balance }} </p>
        </div>
        <div class="selection" style="display: flex; justify-content:space-evenly;">
            <router-link class="items_navbar" to="inventory"> Inventory</router-link>
            <router-link class="items_navbar" to="game"> Factory</router-link>
            <router-link class="items_navbar" to="MarketPlace"> Market Place</router-link>
        </div>
    </nav>
</template>

<script>
import { store } from '../store/storeData'

export default {
    name: 'NavVue',
    data() {
        return {
            factoryName: String,
            username: String,
            balance: Number
        }
    },

    beforeCreate() {
        let userData = store().getUserData()

        if (userData == null) {
            window.location.href = "/"
        }
    },
    async mounted() {
        let userData = store().getUserData()

        if (userData != null) {
            this.factoryName = userData.factory.name
            this.username = userData.name
            this.balance = userData.inventory.balance
        }
    }
}
</script>

<style>
#css_nav {
        background-image: url('../assets/sky.jpg');
        background-repeat: no-repeat;
        background-size: 100%;
        text-align: center;
        padding: 0%;
        position: fixed;
        top: 0;
        z-index: 2;
        width: 70%;
        left: 0;
        height: auto;
        font-style: oblique 10deg;
        font-size: 20px;
        color:white;
        text-shadow: 1px 1px 2px Black;
    }

    .items_navbar{
        letter-spacing: 2px;
        text-shadow: 1px 1px 2px rgba(255, 234, 1, 0.713);
        transition-duration: 700ms;
        color: blueviolet;
    }
    .items_navbar:hover {
        letter-spacing: 3px;
        color: rgb(255, 234, 1);
        text-shadow: 1px 1px 2px blueviolet;
        transition-duration: 700ms;
    }
</style> 