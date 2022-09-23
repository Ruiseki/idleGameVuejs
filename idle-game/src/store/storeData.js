import {defineStore} from "pinia"

export const store = defineStore("shop", {
    state: () => {  
        return {
            userData: null,
            items: null
            
        }
    },
    computed: {
        
    },
    actions: {
        async isUserExist(username) {
            this.userData = await (await fetch("http://10.57.29.146:8044/findUser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: username })
            })).json()

            return this.userData
        },

        async createUser(username, factoryName) {
            this.userData = await (await fetch("http://10.57.29.146:8044/createUser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: username, factoryName })
            })).json()

            return this.userData
        },
        getUserData() {
            return this.userData
        },

        async getItems() {
            this.items = await (await fetch("http://10.57.29.146:8044/allItems", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            })).json();

            console.log(this.items);

            return await this.items
        },

        
    }
})