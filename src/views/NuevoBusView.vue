<template>
  <div class="about">
    <HeaderComponent />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
    />
    <!-- or -->
    <link
      rel="stylesheet"
      href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
    />
    
    <header class="vh-100">
        <div class="container mt-4">
            <div class="card border-secondary">
                <div class="card-header">Nuevo Registro</div>
                <div class="card-body">
                    <form action="/buses" method="POST">
                        <div class="mb-3">
                            <label for="id" class="form-label">id</label>
                            <input v-model="form.id" type="text" class="form-control" id="id" name="id" value="0" tabindex="1">
                        </div>
                        <div class="mb-3">
                            <label for="num_bus" class="form-label">num_bus</label>
                            <input v-model="form.num_bus" type="text" class="form-control" id="num_bus" name="num_bus" tabindex="1">
                        </div>
                        <div class="mb-3">
                            <label for="placa" class="form-label">placa</label>
                            <input v-model="form.placa" type="text" class="form-control" id="placa" name="placa" tabindex="1">
                        </div>
                        <div class="mb-3">
                            <label for="tipo_bus" class="form-label">tipo_bus</label>
                            <input v-model="form.tipo_bus" type="text" class="form-control" id="tipo_bus" name="tipo_bus" tabindex="1">
                        </div>
                        
                        <!-- <input
                            v-on:click="AgregaerBuses()"
                            type="button"
                            value="Agregar"
                            class="btn btn-success w-25"
                        /> -->
                        <b-button router-link to="/BusesView" v-on:click="AgregaerBuses()"
                            variant="success"
                            type="button"
                            class="text-white w-25"
                        >Agregar</b-button>
                        <router-link class="btn btn-outline-secondary mt-4 w-25 container nav-link active fs-6" aria-current="page" href="#" to="/BusesView">cancelar</router-link>
                    </form>
                </div>
            </div>
        </div>
    </header>

    <!-- <hr class="container" /> -->
    <!-- Button trigger modal -->
    <!-- <form class="container estudiantes">
      <h3>AGREGAR BUSES</h3>

      <div class="mb-6 col-md-6 opcion">
        <label for="id" class="form-label">id</label>
        <input v-model="form.id" type="text" class="form-control" id="nombre" />
      </div>
      <div class="mb-6 col-md-6 opcion">
        <label for="num_bus" class="form-label">num_bus</label>
        <input
          v-model="form.num_bus"
          type="text"
          class="form-control"
          id="edad"
        />
      </div>
      <div class="mb-6 col-md-6 opcion">
        <label for="placa" class="form-label">placa</label>
        <input
          v-model="form.placa"
          type="text"
          class="form-control"
          id="genero"
        />
      </div>
      <div class="mb-6 col-md-6 opcion">
        <label for="tipo_bus" class="form-label">tipo_bus</label>
        <input
          v-model="form.tipo_bus"
          type="text"
          class="form-control"
          id="estado"
        />
      </div>
    </form>
    <input
      v-on:click="AgregaerBuses()"
      type="button"
      value="Registrar"
      class="btn btn-success"
    />

    <hr /> -->
  </div>
</template>
<script>
import axios from "axios";
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  name: "NuevoBusView",

  components: {
    HeaderComponent,
  },

  data() {
    return {

      form: {
        id: "",
        num_bus: "",
        placa: "",
        tipo_bus: "",
      },
    };
  },

  mounted() {
    this.AgregaerBuses;
  },

  methods: {
    AgregaerBuses() {
      axios.post("http://localhost:3000/buses", this.form).then((response) => {
        console.log(response);
      });
      this.verBuses();
    },
    refre() {
      this.verBuses();
    },
    /*  EliminarEstudiantes: function (id) {
      axios
        .delete("http://localhost:9090/api/students" + id)
        .then((response) => {
          console.log(response);
        });
    }, 

    EliminarEstudiantes: function (index, id) {
      axios
        .delete("http://localhost:9090/api/students" + id)
        .then((response) => {
          this.result.splice(id, 1);
          console.log(response);
        });
    }, */
  },
};
</script>
<style scoped>
.titulo {
  border: 1px solid red;
  text-align: center;
}
.estudiantes {
  text-align: center;
  width: 50%;
}
.opcion {
  width: 100%;
  text-align: left;
}
</style>