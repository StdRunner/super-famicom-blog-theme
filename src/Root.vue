<template>
    <div class="root">
        <MainHeader 
            :blogTitle="blogTitle" 
            :githubUrl="githubUrl"
            :mailAddr="mailAddr"
        />

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
            blogTitle: 'Blog Name',
            githubUrl: 'https://github.com/',
            mailAddr: 'email@domain.address'
        }
    },
    components: {
        MainHeader: Header,
        MainFooter: Footer
    }
}
</script >
