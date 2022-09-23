<template>
    <factory/>
    <Nav/>
    <shop/>
    <InventoryCompo/>
</template>

<script>
import factory from '../components/factory.vue'
import Nav from '../components/nav.vue'
import Shop from '../components/shop.vue'
import InventoryCompo from '../components/body/inventory.vue'

export default {
    name: 'GamePage',
    components: {
        factory,
        Nav,
        Shop,
        InventoryCompo
    }
}
</script>