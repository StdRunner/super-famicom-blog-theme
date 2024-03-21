<template>
    <div class="root">
        <MainHeader :appTitle="title" />

        <RouterView />

        <MainFooter />
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'

export default {
    data() {
        return {
            title: 'Steady Runner'
        }
    },
    components: {
        MainHeader: Header,
        MainFooter: Footer
    }
}
</script >

<style>

</style>