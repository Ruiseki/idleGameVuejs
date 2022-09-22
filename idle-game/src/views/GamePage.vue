<template>
    <factory/>
    <Nav/>
</template>

<script>
import factory from '../components/factory.vue'
import Nav from '../components/nav.vue'

export default {
    name: 'GamePage',
    components: {
        factory,
        Nav
    }
}
</script>