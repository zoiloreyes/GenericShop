<template>
  <div>
    <router-link v-if="esAdministrador" :to="{name: 'crearlibro'}" tag="button" class="btn btn-success">Nueva Entrada</router-link>
    <div>
      <h3><b>Nueva Opción</b> Puedes descargar los libros virutales</h3>
    </div>
    
    <div class="CategoryContainer">
      <div class="Category">
        <font-awesome-icon icon="user-secret" />
        PraceHordu
      </div>
      <div class="Category">
        <font-awesome-icon icon="user-secret" />
        PraceHordu
      </div>
      <div class="Category">
        <font-awesome-icon icon="user-secret" />
        PraceHordu
      </div>
    </div>
    
    <div class="MaxVendidoContainer">
      
      <div v-for="libro in librosMasVendidos" v-bind:key="libro._id"  class="MasVendido">
        <div class="Portada">
          <img class="Imagen" :src="libro.Portada || 'https://via.placeholder.com/200x300'" />
          <h3><b>Título: </b> {{libro.Titulo}}</h3>
          <h5><b>ISBN: </b> {{libro.ISBN}}</h5>
          <div v-if="esAdministrador">
            <router-link :to="{ name: 'editarlibro', params: {id : libro._id}}" tag="button" class="btn btn-info">Editar</router-link>
            <button v-on:click="borrar(libro._id)" class="btn btn-danger" style="margin-left: 10px">Eliminar</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Config from "../config";

export default {
  name: 'home',
  data() {
    return {
      categorias: [],
      librosMasVendidos: [],
      esAdministrador: false
    }
  },
  methods: {
    borrar(id){
      let uri = Config.APIBase + '/libros/delete/' + id;
      this.axios.get(uri).then((response) => {
        location.reload();
    });
    }
  },
  mounted: function() {
    console.log("Libros");
    let uri = Config.APIBase + '/libros';
    this.axios.get(uri).then((response) => {
        this.librosMasVendidos = response.data;
        console.log("Libros");
        console.log(response.data);
    });
    setInterval(() => {
      

      if(localStorage.getItem("usuario")){
        let usuario = JSON.parse(localStorage.getItem("usuario"));
        if(usuario.Rol && usuario.Rol == "Administrador"){
          this.esAdministrador = true;
        }else{
          this.esAdministrador = false;
        }
      }else{
        this.isLoggedIn = false;
        this.esAdministrador = false;
      }
    },1000);
  },
}
</script>

<style>
  .CategoryContainer{
    display: flex;
    justify-content: space-around;
  }
  .MaxVendidoContainer{
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .MasVendido{
    display: flex;
  }
    .Portada{
        width: 100%;
        cursor: pointer;
    }
    .Portada .Imagen {
        display: flex;
        max-width: 200px;
        margin: 0 auto;
    }
</style>
