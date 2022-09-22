import {defineStore} from "pinia"

export const store = defineStore("shop", {
    state: () => {  
        return {
            userData: null
        }       
        
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

        async generateItems() {
            let ressources = this.userData.inventory.ressources
            let generatedRessources = {}

            for (let i = 0; i < ressources.length; i++) {
                Math.random() == 1 
                    this.generatedRessources = {

                    }
                }
                 console.log(ressources[i])
            }
            
            return ressources
            /*this.userData = await (await fetch("http://10.57.29.146:8044/banana", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: this.userData.name })
            })).json()*/
        }
    }
})