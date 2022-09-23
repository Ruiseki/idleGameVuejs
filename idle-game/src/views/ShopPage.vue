<template>
    <Nav/>
    <ShopCompo/>
</template>

<script>
import ShopCompo from '../components/shop.vue'
import Nav from '../components/nav.vue'

export default {
    name: 'ShopPage',
    components: {
        Nav,
        ShopCompo
    }
}
</script>