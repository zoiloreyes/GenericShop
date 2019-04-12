<template>

    
    <form action="" method="POST" id="login" class="login">
      <div class="login-icon">
        <i class="fas fa-user fa-7x"></i>
      </div>
      <div  class="login-form">

        <div class="username-row">
          <label for="username_input">
            <i class="far fa-user user-icon fa-lg"></i>
          </label> 
          <input type="text" id="username_input" name="usuario" class="username-input" placeholder="Usuario"/>
        </div>
        <div class="password-row">
          <label for="password_input">
            <i class="fas fa-key password-icon fa-lg"></i>
          </label> 
          <input type="password" id="password_input" name="password" class="password-input"  placeholder="Contrasena"/>
        </div>
      </div>
      <div class="call-to-action">
        <button id="login-button" type="submit"> Entrar </button>
        <p>No tienes una cuenta? <a href="CrearUsuario.html"> Registrate</a></p>
      </div>
    </form>
  
</template>

<style> 

    *, *:before, *:after {
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    color:white;
  }
  
  body {
    height: 100%;
    width: 100%;
    background-image: url("images/background.jpg");
    background-size:cover;
    color: #fff;
    font-family: "Comfortaa", "Helvetica", sans-serif;
  }
  
  .login {
    max-width: 280px;
    min-height: 500px;
    margin: 30px auto;
    background-color: rgba(10,10,10,.68);
  
  }
  

  
  .login-icon {
    padding: 65px 90px;
  }
  
  .login-form {
    padding: 8px 20px 20px;
    height: 120px;
    width: 100%;
    /*background-color: green;*/
  }
  
  
  .username-row {
    position: relative;
    height: 40px;
    border-bottom: 1px solid;
    margin-bottom: 10px;
  }
  
  .password-row {
    position: relative;
    height: 40px;
   /* background-color: grey;*/
    border-bottom: 1px solid;
  }
  
  .password-icon,
  .user-icon {
    margin: 5px;
  }
  
  input {
    position: absolute;
    width: 195px;
    height: 30px;
    margin: 5px 0;
    background: transparent;
    border: none;
    color:white;
  }
  
  input:focus,
  button:focus {
    outline: none;
  }
  


  button {
    display: block;
    width: 240px;
    height: 40px;
    padding: 0;
    margin: 10px 20px 10px;
    font-weight: 700;
    color: #fff;
    background-color: rgb(182, 0, 61);
    border: none;
    border-radius: 20px;
    transition: background-color .10s ease-in-out;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
  
  button:hover {
    color:#7B241C ;
    background-color:white;
    cursor: pointer;
  }
  
  button:active {
    color: #fff;
    background-color: #7B241C ;
  }
  
  p {
    display: inline-block;
    width: 200px;
    margin: 0 40px;
    font-size: 12px;
    color: rgba(255,255,255,.4);
    /*background-color: yellow;*/
  }
  
  p a {
    color: #fff;
  }
  
  label,
  p a:hover {
    -webkit-cursor: pointer;
    cursor: pointer;
    color:white;
  }

</style>

<script>
export default {
   
   
}
</script>
