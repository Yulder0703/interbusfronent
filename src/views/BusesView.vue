<template>
  <div class="about">
    <HeaderComponent/>
    <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
    <!-- or -->
    <link rel="stylesheet"
    href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
    <div class="container vh-100">
        
    <router-link class="btn btn-outline-primary mt-4" aria-current="page" href="#" to="/NuevoBusView"><i class="bx bxs-plus-circle bx-md"></i></router-link>
      
      <table class="table table-bordered table-striped text-center mt-4">
        <thead>
          <tr class="bg-primary text-white">
            <th class="col-1">id</th>
            <th class="col-2">num_bus</th>
            <th class="col-2">placa</th>
            <th class="col-2">tipo_bus</th>
            <th class="col-4">Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="bus in buses" :key="bus.id">
            <td>{{ bus.id }}</td>
            <td>{{ bus.num_bus }}</td>
            <td>{{ bus.placa }}</td>
            <td>{{ bus.tipo_bus }}</td>
            <td>
              <a href="" class="btn btn-outline-info">Editar</a>
              <a href="" class="btn btn-outline-danger"
                >Eliminar</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

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
    <FooterComponent/>
  </div>
</template>
<script>
import axios from "axios";
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "BusesView",

  components: {
    HeaderComponent,
    FooterComponent,
  },

  data() {
    return {
      buses: "",

      form: {
        id: "",
        num_bus: "",
        placa: "",
        tipo_bus: "",
      },
    };
  },

  mounted() {
    this.verBuses();
    this.AgregaerBuses;
    this.Eliminar();
  },

  methods: {
    verBuses() {
      axios.get("http://localhost:3000/buses").then((rows) => {
        this.buses = rows.data;
        console.log(this.buses);
      });
      //   /* .catch(error => {
      //       console.log(error);
      //     }),  */
    },
    AgregaerBuses() {
      axios.post("http://localhost:3000/buses", this.form).then((response) => {
        console.log(response);
      });
      this.verBuses();
    },
    Eliminar(id) {
      axios.delete("http://localhost:3000/buses" + id).then((response) => {
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