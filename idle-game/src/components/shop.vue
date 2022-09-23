<template>

    <div id="shoping_menu" style ="scroll-behavior: auto;">
        <div id="shoping">  
            <p v-if="userdata.inventory != undefined"> YOU MONEY : {{userdata.inventory.balance}} </p>
            <ul v-for='(item, index) in items' v-bind:key="index">
                <li v-if="item.item != 'money'" class="cards">
                    <div> {{ item.item }} </div>
                    <div> cost: {{ item.price.money }} $ </div>
                    <button v-on:click="this.buy(item)">Buy</button> <button v-on:click="this.sell(item)">Sell</button>
                </li>
            </ul>
        </div>
        <div id="upgrade">
        </div>
    </div>
    

</template>
<style>
#shoping_menu{
        top: 0%;
        left:70%;
        position:fixed;
        display:flex;
        flex-direction: column;
        padding: 0%;
        margin: 0%;
        width:30%;
        height: 100%;
        background-image: linear-gradient(#d683ff, #5900ff);;
        z-index: 2;
    }
    .cards {    
        width: 300px;
        padding: 50px;
        margin: 20px;
    }
    #upgrade{
        color:black;
    }
    #shoping{
        color: black;
    }
</style>

<script>
import { store } from '../store/storeData';


export default {
    name: 'ShopCompo',
    data() {
        return {
            items: [],
            userdata:[]
        }
    },
    methods: {
        sortarray_grade(the_array) {
            the_array.shift();
            var the_array_sorted = the_array.sort((a, b) => a.grade - b.grade);
            return the_array_sorted;
        },

        buy(item)
        {   
            let itemName = item.item;
            let targetItem = this.items.find((value) => value.item == itemName);
            if (this.userdata.inventory.balance < targetItem.price.money) { // comment this part to set the possibility to be in negativ 
                alert("Not enough money")
                return;
            }
            this.userdata.inventory.balance -= targetItem.price.money; // * laQuantiteQuonVeuxAcheter;
            let targetRessources = this.userdata.inventory.ressources.find((value) => value.item == itemName);

            console.log(targetRessources);

            if(targetRessources) targetRessources.quantity ++;
            else this.userdata.inventory.ressources.push({
                item : itemName,
                quantity: 1
                
            });
            console.log(this.userdata.inventory.ressources)
            alert("you bought something")
        },

        sell(item) {
            let itemName = item.item;
            let targetItem = this.items.find((value) => value.item == itemName);
            let itemInInventory = this.userdata.inventory.ressources.find((value) => value.item == targetItem.item);
            
            if(itemInInventory.quantity == 0) { // comment this part to set the possibility to be in negative
                alert("You dont have enough of this ressouce");
                return;
            }
            else
            {
                itemInInventory.quantity --;
                if(itemInInventory.quantity == 0)
                {
                    let itemInInventoryIndex = this.userdata.inventory.ressources.findIndex((value) => value.item == itemName);
                    this.userdata.inventory.ressources.splice(itemInInventoryIndex, 1);
                }
                this.userdata.inventory.balance += targetItem.sellPrice;
            }
            
            alert("you sold something")
        }
    },
    async mounted() {
        let itemsData = await store().getItems()
        let userData = await store().getUserData()
        if (itemsData != null) {
            this.items = itemsData;
        }
        if (userData != null) {
            this.userdata = userData;
        }
    }
}
</script>