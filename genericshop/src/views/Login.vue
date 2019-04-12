<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Inicia Sesión</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="login">
                    <div class="form-group">
                        <label>Correo:</label>
                        <input type="text" class="form-control" v-model="usuario.Correo"/>
                    </div>
                    <div class="form-group">
                        <label>Contraseña:</label>
                        <input type="password" class="form-control" v-model="usuario.Contrasena"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Iniciar Sesión"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import Config from "../config";

    export default {
        data() {
            return {
                usuario: {}
            }
        },
        methods: {
            login() {
                let uri = Config.APIBase + '/usuarios/login';
                this.axios.post(uri, this.usuario).then((response) => {
                    if(response.data){
                        alert("Sesion Iniciada");
                        localStorage.setItem("usuario", JSON.stringify(response.data));
                        this.$router.push({name: "home"});
                    }else{
                        localStorage.removeItem("usuario");
                        alert("Datos Incorrectos Intente de nuevo");
                    }
                });
            }
        }
    }
</script>