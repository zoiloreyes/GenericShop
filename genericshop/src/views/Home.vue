<template>
  <div>
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
      
      <div class="MasVendido">
        <div class="Portada">
          <img class="" src="https://via.placeholder.com/200x300" />
          <p>Portada</p>
        </div>
      </div>
    </div>
    <AddItem></AddItem>
  </div>
</template>

<script>
// @ is an alias to /src
import AddItem from "./AddItem"

export default {
  name: 'home',
  data() {
    return {
      categorias: [],
      librosMasVendidos: []
    }
  },
  components: {
    AddItem
  },
  mounted: function() {
    console.log("Home montado");
  }
}
</script>

<style>
  .CategoryContainer{
    display: flex;
    justify-content: space-around;
  }

    .Portada{
        width: 100%;
        cursor: pointer;
    }
    .Portada .Imagen {
          max-width: 100%;
    }
</style>
