<template>
  <v-navigation-drawer v-model="drawer" app>
   <div class="col col-lg-12 col-md-12">
        <img 
          src="../assets/Interbuslogoweb.png"
          alt=""
          width="180px"
          height="180px"
          class="logo"
        >
      </div>
    <v-divider></v-divider>
    <v-list>
      <ul class="navbar-nav">
      <li class="nav-item mx-4">
                  <router-link class="nav-link active fs-6" aria-current="page" href="#" to="/inicio">Inicio</router-link>
                </li>
                <li class="nav-item mx-4">
                  <router-link class="nav-link active fs-6" aria-current="page" href="#" to="/iniciar">Iniciar sesion</router-link>
                </li>
                 <li class="nav-item mx-4">
                  <router-link class="nav-link active fs-6" aria-current="page" href="#" to="/buscarRutaView">Buscar Ruta</router-link>
                </li>
                <li class="nav-item mx-4">
                  <router-link class="nav-link active fs-6" aria-current="page" href="#" to="/ReservaView">Reservar</router-link>
                </li>
                <li class="nav-item mx-4">
                  <router-link class="nav-link active fs-6" aria-current="page" href="#" to="/formularioencomienda">Encomiendas</router-link>
                </li>
        </ul>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SidebarComponent",
  props:{
    value: Boolean,
  },
  computed:{
    drawer:{
      get() {
        return this.value;
      },
      set(newValue){
        this.$emit("input",newValue)
      }
    }
  },
 
};
</script>

<style scoped></style>
