<template>
  <div class="my-1 mx-6 px-1 py-2 bg-white rounded-bottom shadow"> 
    <div class="lola">
      <div class="col col-lg-4 col-md-4 sm-4">
        <img 
          src="../assets/Interbuslogoweb.png"
          alt=""
          width="150px"
          height="150px"
          class="logo"
        >
      </div>
      

      <div class="col col-lg7 md-7 sm-7 justify-content-center d-flex">
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="menu collapse navbar-collapse" id="navbarNavDropdown">
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
              
               
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderC",
};
</script>

<style scoped>

.lola{
  margin: auto;
   display: flex;
  align-items: center;
  justify-content: center;
 
 
 
}

.row d-flex justify-content-evenly align-items-center{
  width: 100%;
}
.nosotros{
  text-decoration: none;
}
.registro{
  text-decoration: none;
}
.iniciar{
  text-decoration: none;
}
.imagenes{
  display: flex;
  width: 50px;
  height: 50px;
}

</style>

