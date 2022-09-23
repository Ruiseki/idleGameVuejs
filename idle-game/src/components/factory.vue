<template>
    <div>
    </div>
</template>

<script>
// import { store } from '../store/storeData'

export default {
    name: 'FactoryVue',
    data() {
        return {
            interval: null
        }
    },
    methods: {
        launchProduction()
        {
            setInterval(() => {
                this.userData.factory.production.forEach(element => {
                    let target = this.userData.inventory.ressources.find((value) => value.item == element.name);
                    target.quantity += element.productionRate / 60;
                    console.log(`Producing ${target.item}`);
                });
            }, 1000);
        },
    },
    mounted() {
        // this.interval = setInterval(this.updateFactory, 1000)
    },
    unmounted() {
        clearInterval(this.interval)
    }
}
</script>