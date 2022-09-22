<template>
    <Nav/>
    <Shop/>
</template>

<script>
import Shop from '../components/shop.vue'
import Nav from '../components/nav.vue'

export default {
    name: 'HomePage',
    components: {
        Nav,
        Shop
    }
}
</script>