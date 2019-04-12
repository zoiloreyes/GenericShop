<template>
        <li class="SessionContainer dropdown" v-if="UsuarioCargado">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                {{Usuario.Nombre}} {{Usuario.Apellido}}
            </a>
            <ul class="dropdown-menu">
                <li>
                    <a href="#">Mi Cuenta</a>
                </li>
                <li>
                    <a v-on:click="logout" href="#">Salir</a>
                </li>
            </ul>
        </li>
</template>

<script>
    export default {
        name: "CurrentSession",
        data() {
            return {
                UsuarioCargado: false,
                Usuario: {},
                item: {}
            }
        },
        methods: {
            logout: function(event){
                localStorage.removeItem("usuario");
            }
        },
        mounted: function() {
        setInterval(() => {
        if(localStorage.getItem("usuario")){
            this.UsuarioCargado = true;
            this.Usuario = JSON.parse(localStorage.getItem("usuario"));
        }else{
            this.UsuarioCargado = false;
        }
        },1000);
  },
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