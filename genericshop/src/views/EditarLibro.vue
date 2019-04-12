<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Editar Libro</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="editar">
                    <div class="form-group">
                        <label>Titulo:</label>
                        <input type="text" class="form-control" v-model="libro.Titulo"/>
                    </div>
                    <div class="form-group">
                        <label>Cantidad:</label>
                        <input type="number" step="0.01" class="form-control" v-model="libro.Cantidad"/>
                    </div>
                    <div class="form-group">
                        <label>Género:</label>
                        <input type="text" class="form-control" v-model="libro.Genero"/>
                    </div>
                    <div class="form-group">
                        <label>Autor:</label>
                        <input type="text" class="form-control" v-model="libro.Autor"/>
                    </div>
                    <div class="form-group">
                        <label>Precio:</label>
                        <input type="number" step="0.01" class="form-control" v-model="libro.Precio"/>
                    </div>
                    <div class="form-group">
                        <label>ISBN:</label>
                        <input type="text" class="form-control" v-model="libro.ISBN"/>
                    </div>
                    <div class="form-group">
                        <label>URL Portada:</label>
                        <input type="text" class="form-control" v-model="libro.Portada"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Registrar Libro"/>
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
            libro: {}
        }
    },
    mounted: function() {
        console.log("EditarLibro");
        console.log(this.$route);
        let uri = Config.APIBase + '/libros/edit/' + this.$route.params.id;
            this.axios.get(uri).then((response) => {
                this.libro = response.data;
            });
        },
    methods: {
        editar(){
            let uri = Config.APIBase + '/libros/update/' + this.$route.params.id;
            this.axios.post(uri, this.libro).then((response) => {
                    console.log(response.data);
            });
        }
    }
}
</script>
