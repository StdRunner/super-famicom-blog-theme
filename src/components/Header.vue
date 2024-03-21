<template>
    <div class="header">
        <RouterLink to="/" class="homeBtn">{{appTitle}}</RouterLink>

        <div class="contact">
            <a :href="'mailto:' + mailAddr" class="icon-email">
                <font-awesome-icon icon="fa-solid fa-envelope" class="fa-2xl" />
            </a>
            <a :href="githubUrl" target='_blank' class="icon-github">
                <font-awesome-icon icon="fa-brands fa-github" class="fa-2xl" />
            </a>
        </div>

        <div class="navigation">
            <ul class="navigationUl">
                <li class="navigationLi">
                    <RouterLink to="/" class="menu">home</RouterLink>
                </li>
                <li class="navigationLi">
                    <RouterLink to="/projects" class="menu">projects</RouterLink>
                </li>
                <li class="navigationLi">
                    <RouterLink to="/posts" class="menu">posts</RouterLink>
                </li>
                <li class="navigationLi">
                    <RouterLink to="/tags" class="menu">tags</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    props: {
        appTitle: String,
        githubUrl: String,
        mailAddr: String
    }
}
</script>
<style>
.header {
    margin-bottom: 3%;
}
.homeBtn {
    text-decoration: none;
    color: #16a085;
    font-weight: bold;
    font-size: 48px;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.contact {
    width: 30%;
    float: right;
    display: flex;
    justify-content: right;
}

.icon-github, .icon-email {
    color: #5577aa;
    text-decoration: none;
    margin-left: 1rem;
}

.navigation {
    display: flex;
}
.navigationUl {
    margin: 1% 0;
    padding: 0;
    list-style: none;
}
.navigationLi {
    float: left;
}
.menu {
    text-decoration: none;
    color: #5577aa;
    font-size: 24px;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    margin-right: 2em;
}
</style>