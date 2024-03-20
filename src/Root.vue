<template>
    <div class="root">
        <MainHeader :appTitle="title" />

        <RouterView />
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import HelloWorld from './components/HelloWorld.vue';

export default {
    data() {
        return {
            title: 'Steady Runner'
        }
    },
    components: {
        MainHeader: Header
    }
}
</script >

<style>

</style>