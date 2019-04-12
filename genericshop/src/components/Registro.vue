<template>
<div>    	
<center><img src="images/logo.png" /></center>


<form action="" method="POST" >

<table border="0" width="60%" height="90%" >
<tr>
<td><h3>Nombre:</h3>
<input type="text" name="Nombre" ></td>
<td><h3>Apellido:</h3>
<input type="text" name="Apellido"></td>
</tr>

<tr>
<td><h3>Telefono:</h3>
<input type="text" name="Telefono"></td>
<td><h3>Provincia:</h3>
<input type="text" name="Provincia"></td>
</tr>

<tr>
<td><h3>Pais:</h3>
<input type="text" name="Pais"></td>
<td><h3>Calle:</h3>
<input type="text" name="Calle"></td>
</tr>

<tr>
<td><h3>Municipio:</h3>
<input type="text" name="Municipio"></td>
<td><h3>Numero_Casa:</h3>
<input type="text" name="Numero_Casa"></td>
</tr>

<tr>
<td><h3>Sector:</h3>
<input type="text" name="Sector"></td>
<td><h3>Email:</h3>
<input type="text" name="Email"></td>
</tr>

<tr>
<td><h3>Usuario:</h3>
<input type="text" name="Usuario"></td>
<td><h3>Password:</h3>
<input type="password" name="Password"></td>
</tr>

</table>
<br><br><br>
<center>
<input type="submit" value="Registrar">
</center>

</form>
</div>

</template>

<style>
 table{
    margin-top: 50px;
    margin-bottom: 30px;
    margin-right: 100px;
    margin-left: 290px;
    background-color: #935116;
    opacity: 0.8;
    filter: alpha(opacity=10);
    border-collapse: separate;
    border-spacing: 65px;
   }

   input{
    
    display: block;
    padding: 8px;
    width: 85%;
    margin: 6px 0;
    font-size: 10px;
    background: transparent;
    border-color: black;
    border-top-color: transparent;
    border-right-color: transparent;
    border-left-color: transparent;
    color:black;
    
    
}


input[type="submit"]{
    
    display: block;
    width: 240px;
    height: 40px;
    padding: 0;
    margin: 10px 20px 10px;
    font-weight: 700;
    color: #fff;
    background-color: #7B241C  ;
    border: none;
    border-radius: 20px;
    transition: background-color .10s ease-in-out;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    margin-right: 100px;
    margin-left: 190px;
}
font{
    color: black;
}
body {
    
    background-image: url("images/4.jpg");
   
}
h3{
    color: black;
}
input[type="submit"]:active{
    color: #fff;
    background-color: rgb(182, 0, 61);
  
}

input[type="submit"]:hover {
    color:rgb(182, 0, 61);
    background-color:white;
  }

  input:focus{
    outline: none;
  }

  input, textarea {
    
    font: 1em sans-serif;
    width: 300px;
    
	
}

img{
    margin-top: 50px;
    margin-bottom: 2px;
    width: 230px;
    height: 240px;
    border-radius: 30px;
    margin-right: 110px;
    margin-left: 200px;
    
}




</style>
