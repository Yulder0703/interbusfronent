<template>
    <div class="container">
      <main>
            <div class="flexbox">
              <div class="col-md-5 col-lg-8 order-md-last">
            <div class="text-center">

        <p class="lead"></p>
        <h2 class="mb-3">Buscar rutas </h2>
      </div>
            <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h4 class="mb-3">Hora</h4>
              </div>
              <div>
                <h4 class="mb-3">BUS</h4>
              </div>
               <div>
                <h4 class="mb-3">Reserva</h4>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <span class="mb-3">04:00 PM</span>
              <div>
                <h6 class="mb-3">Popayan-Timbio</h6>
              </div>
               <div>
                <b-button variant="outline-primary" href="#"
                    to="/ReservaView">reservar </b-button>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
            <span class="mb-3">02:00 PM</span>
              <div>
                <h6 class="mb-3">Coomotoristas</h6>
              </div>
              <b-button variant="outline-primary" href="#"
                    to="/ReservaView">reservar </b-button>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
            <span class="mb-3">05:00 PM</span>
              <div>
                <h6 class="mb-3">Sotracauca</h6>
              </div>
              
              <b-button variant="outline-primary" href="#"
                    to="/ReservaView">reservar </b-button>
            </li>
          </ul>
        </div>
      </div>
 
          
     </main>
  </div>
</template>
<style>
.flexbox{
  justify-content: center ;
  display:flex
}
.text-center{
  justify-content: center ;
  display:flex
}

</style>
<script>
export default {
  name: "RutasEnComponent",
};

</script>