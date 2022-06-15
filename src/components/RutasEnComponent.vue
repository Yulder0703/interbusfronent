<template>
    <div class="container">
      <main>
            <div class="flexbox">
              <div class="col-md-5 col-lg-8 order-md-last">
             <h2 class="d-flex justify-content-center align-items-center mb-3">
            <span class="py-5 text-center">Rutas Encontradas </span>
             </h2>
            <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h4 class="my-0">Hora</h4>
              </div>
              <div>
                <h4 class="my-0">BUS</h4>
              </div>
               <div>
                <h4 class="my-0">Reserva</h4>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <span class="Hora de salida">04:00 PM</span>
              <div>
                <h6 class="my-0">Popayan-Timbio</h6>
              </div>
               <div>
                <b-button variant="outline-primary" href="#"
                    to="/ReservaView">reservar </b-button>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
            <span class="Hora de salida">02:00 PM</span>
              <div>
                <h6 class="my-0">Coomotoristas</h6>
              </div>
              <b-button variant="outline-primary" href="#"
                    to="/ReservaView">reservar </b-button>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
            <span class="Hora de salida">05:00 PM</span>
              <div>
                <h6 class="my-0">Sotracauca</h6>
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

</style>
<script>
export default {
  name: "RutasEnComponent",
};

</script>