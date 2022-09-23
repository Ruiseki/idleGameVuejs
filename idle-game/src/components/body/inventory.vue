<template>

    <div id="inventory_menu" style="scroll-behavior: auto;">
        <div id="shoping">
            <p v-if="userdata.inventory != undefined"> YOUR MONEY : {{userdata.inventory.balance}} </p>
            <div v-for="(item,index2) in userdata" v-bind:key="index2">
                <div v-for="(ressource, index3) in item.ressources" v-bind:key="index3">
                    <p>{{ressource.item}}</p>
                    <p>{{ressource.quantity}}</p>
                </div>
            </div>
        </div>
        <div id="upgrade">
        </div>
    </div>


</template>
<style>
#inventory_menu {
    top: 20%;
    left: 0%;
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: 0%;
    margin: 0%;
    width: 70%;
    height: 80%;
    background-color: yellowgreen;
    z-index: 2;
}

.cards {
    width: 300px;
    padding: 50px;
    margin: 20px;
}

</style>

<script>
import { store } from '../../store/storeData';


export default {
    name: 'InventoryCompo',
    data() {
        return {
            items: [],
            userdata: []
        }
    },
    methods: {
        sortarray_grade(the_array) {
            the_array.shift();
            var the_array_sorted = the_array.sort((a, b) => a.grade - b.grade);
            return the_array_sorted;
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