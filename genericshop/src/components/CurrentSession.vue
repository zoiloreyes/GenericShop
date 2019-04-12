<template>
    <li class="SessionContainer">
        <router-link to="register">Regístrate</router-link>
    </li>
</template>

<script>
    export default {
        name: "CurrentSession"
    }
</script>

<style>
    .SessionContainer {
        color: white;
        display: flex;
        height: 100%;
        justify-content: center;
        justify-items: center;
    }
</style>