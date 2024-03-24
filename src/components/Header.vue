<template>
    <div class="famicomTop">
        <span class="powerBtn">POWER</span>
        <span class="famicomBtn2">EJECT</span>
        <span class="resetBtn">RESET</span>
    </div>
    <div class="header">
        <RouterLink to="/" class="blogTitle" @click="this.nav = ''">{{blogTitle}}</RouterLink>

        <div class="contact">
            <tr class="contactBtns">
                <td>
                    <span class="btn">X</span>
                    <a :href="'mailto:' + mailAddr" class="icon-email">
                        <font-awesome-icon icon="fa-solid fa-envelope" class="fa-xl" />
                    </a>
                </td>
                <td>
                    <a :href="githubUrl" target='_blank' class="icon-github">
                        <font-awesome-icon icon="fa-brands fa-github" class="fa-xl" />
                    </a>
                    <span class="btn">A</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="btn">Y</span>
                    <span class="icon-green">
                        <font-awesome-icon icon="fa-solid fa-circle" class="fa-xl" />
                    </span>
                </td>
                <td>
                    <span class="icon-yellow">
                        <font-awesome-icon icon="fa-solid fa-circle" class="fa-xl" />
                    </span>
                    <span class="btn">B</span>
                </td>
            </tr>
        </div>

        <div class="navigation">
            <ul class="navigationUl">
                <li class="navigationLi">
                    <RouterLink to="/" class="menu">HOME</RouterLink>
                </li>
                <li class="navigationLi">
                    <RouterLink to="/project" class="menu">PROJECT</RouterLink>
                </li>
                <li class="navigationLi">
                    <RouterLink to="/post" class="menu">POST</RouterLink>
                </li>
                <li class="navigationLi">
                    <RouterLink to="/tag" class="menu">TAG</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    data() {
        return {
            nav: ''
        }
    },
    props: {
        blogTitle: String,
        githubUrl: String,
        mailAddr: String
    },
}
</script>

<style>
.famicomTop {
    padding: 0.5% 3%;
    background-color: #939594;
    border-top: 2px solid #4C4A3E;
    border-left: 2px solid #4C4A3E;
    border-right: 2px solid #4C4A3E;
    border-bottom: 1px solid #4C4A3E;
    border-radius: 0.5rem;
    justify-content: space-between;
    display: flex;
}
.powerBtn {
    width: fit-content;
    color: #CFD3D4;
    font-size: xx-small;
    font-family: 'SuperFamiFont';
    background-color: #5D5F5E;
    border: 3px solid #D5D4C1;
    border-radius: 0.5rem;
    padding: 20px 10px 0 10px;
    box-shadow: 3px 3px;
}
.famicomBtn2 {
    color: #CFD3D4;
    font-size: xx-small;
    font-family: 'SuperFamiFont';
    background-color: #939594;
    border: 2px solid #4C4A3E;
    border-radius: 0.5rem;
    padding: 20px 10% 0 10%;
    box-shadow: 3px 3px #4C4A3E;
}
.resetBtn {
    width: fit-content;
    color: #CFD3D4;
    font-size: xx-small;
    font-family: 'SuperFamiFont';
    background-color: #5D5F5E;
    border: 3px solid #CFD3D4;
    border-radius: 0.5rem;
    padding: 20px 10px 0 10px;
    box-shadow: 3px 3px;
}

.header {
    border-top: 1px solid #4C4A3E;
    border-left: 2px solid #4C4A3E;
    border-right: 2px solid #4C4A3E;
    border-bottom: 1px solid #4C4A3E;
    margin: 0 2%;
    padding: 1%;
    margin-bottom: 3%;
    background-color: #D5D4C1;
}
.blogTitle {
    text-decoration: none;
    color: #535656;
    font-size: 35px;
    font-family: 'Pretendo';
}
.contact {
    background-color: #8B8F8F;
    float: right;
    display: grid;
    justify-content: right;
    padding: 0.5rem;
    border-radius: 1.5rem;
}
.contactBtns {
    margin-bottom: 0.5rem;
}
.btn {
    font-family: 'SuperFamiFont';
    color: #D2D4CF;
}

.icon-email {
    color: #2C68BA;
    text-decoration: none;
    margin: 0.5rem;
}
.icon-email:hover {
    color: #4E80DC;
}
.icon-github {
    color: #DB4038;
    text-decoration: none;
    margin: 0.5rem;
}
.icon-github:hover {
    color: #FD6250;
}
.icon-green {
    color: #26AF80;
    margin: 0.5rem;
}
.icon-yellow {
    color: #F0CF33;
    margin: 0.5rem;
}

.navigation {
    display: flex;
    letter-spacing: -1px;
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
    color: #535656;
    font-size: 24px;
    font-family: 'SuperFamiFont';
    margin-right: 1em;
}
.menu:hover {
    color: #939594;
}
</style>