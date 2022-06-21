<template>
    <div>
    <div class="modal modal-tour position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalTour">
        <div class="modal-dialog" role="document">
          <div class="modal-content rounded-6 shadow">
            <div class="modal-body p-5">
              <h2 class="fw-bold mb-0">TICKET DE ENVIO</h2>
              <ul class="d-grid gap-4 my-5 list-unstyled">
              <div class="row d-flex">
              <div  class="col lg-5 sm-5 md-5 mx-2">
                    <h5 class="mb-0">Número de envio</h5>
                    <input type="text" class="form-control" id="lastName">
                  </div>
                <li class="d-flex">
                  <div  class="col lg-5 sm-5 md-5 mx-2">
                    <h5 class="mb-0">Nombre</h5>
                    <input type="text" class="form-control" id="lastName">
                  </div>
                  <div  class="col lg-5 sm-5 md-5 mx-2">
                    <h5 class="mb-0">Apellido</h5>
                    <input type="text" class="form-control" id="lastName">
                  </div>
                </li>
                <li class="d-flex"> 
                  <div  class="col lg-5 sm-5 md-5 mx-2">
                    <h5 class="mb-0">Tipo de Identificación</h5>
                    <input type="text" class="form-control" id="lastName">
                  </div>
                  <div  class="col lg-5 sm-5 md-5 mx-2">
                    <h5 class="mb-0">Número de Identificación</h5>
                    <input type="text" class="form-control" id="lastName">
                  </div>
                </li>
                <li class="d-flex">
                  <div  class="col lg-5 sm-5 md-5 mx-2">
                    <h5 class="mb-0">Peso KG</h5>
                    <input type="text" class="form-control" id="lastName">
                  </div>
                </li>
                </div>
              </ul>
              <button type="button" class="btn btn-lg btn-primary mt-5 w-50" data-bs-dismiss="modal">Descargar</button>
              <button type="button" class="btn btn-lg btn-primary mt-5 w-50" data-bs-dismiss="modal">Imprimir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
export default {
  name: "ReservarComponent",
};
</script>

<style >
.tipo1{
  font-family: serif ;
}


</style>