<template>
    <div>
    </div>
</template>

<script>
import { store } from '../store/storeData'

export default {
    name: 'FactoryVue',
    data() {
        return {
            timeout: null
        }
    },
    methods: {
        async updateFactory() {
            console.log(await store().generateItems())
        }
    },
    mounted() {
        this.timeout = setTimeout(this.updateFactory, 1000)
    },
    unmounted() {
        clearTimeout(this.timeout)
    }
}
</script>