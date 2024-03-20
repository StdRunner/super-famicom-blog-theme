<template>
    <div class="header">
        <RouterLink to="/" class="homeBtn">{{appTitle}}</RouterLink>

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
        appTitle: String
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
.navigation {
    display: flex;
}
.navigationUl {
    width: 100%;
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