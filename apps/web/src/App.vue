<script lang="ts" setup>
import { Web3Storage, getFilesFromPath } from 'web3.storage'
import SocialLogin from '@biconomy/web3-auth'
import SmartAccount from '@biconomy/smart-account'

const storage = new Web3Storage({
    token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQyRDExNzBhMzk2OWUwOEQyRDBEM2FlZkI4OTdFMTIzNzgyMkE4YTMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzAwMzEyMTYyODEsIm5hbWUiOiJ3ZWIzZ3JhbSJ9.9Ugzn3pR_F87EmvKpVB2EsCbdeFSJ-ccuT4EcGh9Pas`,
})
const socialLoginSDK = new SocialLogin()
</script>
<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </nav>
    <router-view />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
