<template>
  <div class="my-1 mx-3 px-1 py-2 bg-white rounded-bottom shadow"> 
    <div class="row d-flex justify-content-evenly align-items-center">
      <div class="col col-lg-5 col-md-5 sm-5">
        <img 
          src="../assets/logoInterbus.jpeg"
          alt=""
          width="150px"
          height="120px"
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
                  <router-link class="nav-link active fs-6" aria-current="page" href="#" to="/despacharConductores">Despachar conductores</router-link>
                </li>
                <li class="nav-item mx-4">
                  <router-link class="nav-link active fs-6" aria-current="page" href="#" to="/">OPCION NULA</router-link>
                </li>
              
                <!-- <b-sidebar id="example-collapse" title="Nosotros" shadow>
                  <div class="px-1 py-3 my-4">
                    <img
                      src="../assets/logo2.jpeg"
                      alt=""
                      width="150px"
                      height="100px"/>
                    <div class="my-4">
                      <h2>Mision</h2>
                      Somos una página que quiere la mejor interacción,
                      información y reservacion sobre las rutas intermunicipales
                    </div>
                    <div class="my-4">
                      <h2>Vision</h2>
                      Somos una página que busca mejorar la calidad de sus
                      componentes y accesibilidad al usuario que interactua en
                      ella
                    </div>

                    <div class="my-4">
                      <h2>Contactos</h2>
                      
                      <div class="imagenes">
                        <img src="@/assets/facebook.png" alt="logo Facebook" >
                        <img src="@/assets/whatsapp.png" alt="logo Whatsapp" >
                        <img src="@/assets/instagram.png" alt="logo Instagram" >                        
                        </div>
                      
                    </div>
                    
                  </div>
                </b-sidebar> -->
               
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

