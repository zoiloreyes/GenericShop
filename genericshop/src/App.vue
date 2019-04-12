<template>
  <div id="app">
     <nav class="navbar navbar-inverse navbar-static-top">
        <div class="container">
          <div class="navbar-header">
          <img src="img/logo1.png" alt="" />
          <a href="index.html" class="navbar-brand">Ebook</a>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#btn-colapsar">
              <span class="sr-only">Navegacion</span>
              <span class="icon-bar"></span> <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="btn-colapsar">
                    <ul class="nav navbar-nav">
                        <li><a href="index.html">Home</a></li>
                        <li>
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                Libros <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="ficcion.html">Ficcion</a></li>
                                <li><a href="literatura.html">Literatura infantil</a></li>
                                <li><a href="novelas.html">Novelas</a></li>
                                <li><a href="ciencia ficcion.html">Ciencia Ficcion</a></li>
                                
                            </ul>
                        </li>
                        <li><a href="contacto.html">Contacto</a></li>
                    </ul>

                    <!-- Formulario de Busqueda -->
                    <form action="" class="navbar-form navbar-right">
                        <div class="from-group">
                            <input type="text" class="form-control" placeholder="Buscar" />
                            <button type="submit" class="btn btn-default">Buscar</button>
                        </div>
                    </form>
                </div>
       
        </div>
     </nav>
    

    
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
