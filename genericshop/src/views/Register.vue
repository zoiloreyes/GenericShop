<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Registrar Usuario</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addUsuario">
                    <div class="form-group">
                        <label>Nombre:</label>
                        <input type="text" class="form-control" v-model="usuario.Nombre"/>
                    </div>
                    <div class="form-group">
                        <label>Apellido:</label>
                        <input type="text" class="form-control" v-model="usuario.Apellido"/>
                    </div>
                    <div class="form-group">
                        <label>Fecha de Nacimiento:</label>
                        <input type="date" class="form-control" v-model="usuario.FechadeNacimiento"/>
                    </div>
                    <div class="form-group">
                        <label>Direccion:</label>
                        <input type="text" class="form-control" v-model="usuario.Direccion"/>
                    </div>
                    <div class="form-group">
                        <label>Cédula:</label>
                        <input type="text" class="form-control" v-model="usuario.Cedula"/>
                    </div>
                    <div class="form-group">
                        <label>Teléfono:</label>
                        <input type="text" class="form-control" v-model="usuario.Telefono"/>
                    </div>
                    <div class="form-group">
                        <label>Correo:</label>
                        <input type="text" class="form-control" v-model="usuario.Correo"/>
                    </div>
                    <div class="form-group">
                        <label>Contraseña:</label>
                        <input type="password" class="form-control" v-model="usuario.Contrasena"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Registrar Usuario"/>
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
                usuario: {
                    Rol: "Cliente"
                }
            }
        },
        methods: {
            addUsuario() {
                let uri = Config.APIBase + '/usuarios/add';
                this.axios.post(uri, this.usuario).then((response) => {
                    console.log(response.data);
                });
            }
        }
    }
</script>