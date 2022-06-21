<template>
  <div class="container">
    <main>
      <div class="text-center">

        <p class="lead"></p>
        <h2 class="mb-3">Buscar rutas </h2>
      </div>
      <div div class="flexbox">
       <div class="row g-3">
        <div class="col-md-12 col-lg-12">
         
          <form class="needs-validation" novalidate>
            <div class="row g-5">
             
              
              <div class="col-md-6">
                <label for="country" class="form-label">Origen</label>
                <select class="form-select" id="country" required>
                  <option value="">Ciudad de origen</option>
                  <option>Popayan</option>
                  ,
                  <option>Cajibío</option>
                  ,
                  <option>El tambo</option>
                  ,
                  <option>La Sierra</option>
                  ,
                  <option>Morales</option>
                  ,
                  <option>Piendamó</option>
                  ,
                  <option>Rosas</option>
                  ,
                  <option>Soatá</option>
                  ,
                  <option>Timbío</option>
                  ,
                  <option>Almaguer</option>
                  ,
                  <option>Argelia</option>
                  ,
                  <option>Balboa</option>
                  ,
                  <option>Bolívar</option>
                  ,
                  <option>Florencia</option>
                  ,
                  <option>La vega</option>
                  ,
                  <option>Mercaderes</option>
                  ,
                  <option>Patía</option>
                  ,
                  <option>Piamonte</option>
                  ,
                  <option>San Sebastián</option>
                  ,
                  <option>Santa Rosa</option>
                  ,
                  <option>Sucre</option>
                  ,
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div class="col-md-6">
                <label for="state" class="form-label">Destino </label>
                <select class="form-select" id="state" required>
                  <option value="">Ciudad de destino</option>
                  <option>Popayan</option>
                  ,
                  <option>Cajibío</option>
                  ,
                  <option>El tambo</option>
                  ,
                  <option>La Sierra</option>
                  ,
                  <option>Morales</option>
                  ,
                  <option>Piendamó</option>
                  ,
                  <option>Rosas</option>
                  ,
                  <option>Soatá</option>
                  ,
                  <option>Timbío</option>
                  ,
                  <option>Almaguer</option>
                  ,
                  <option>Argelia</option>
                  ,
                  <option>Balboa</option>
                  ,
                  <option>Bolívar</option>
                  ,
                  <option>Florencia</option>
                  ,
                  <option>La vega</option>
                  ,
                  <option>Mercaderes</option>
                  ,
                  <option>Patía</option>
                  ,
                  <option>Piamonte</option>
                  ,
                  <option>San Sebastián</option>
                  ,
                  <option>Santa Rosa</option>
                  ,
                  <option>Sucre</option>
                  ,
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
             <div class=" fecha">
              <div class="col-md-5">
                <label for="Fecha" class="form-label"
                  >Fecha de reservacion  <span class="text-muted"></span
                ></label>
                <input
                  type="date"
                  class="form-control"
                  placeholder="ingresa fecha "
                  id="start"
                  name="trip-start"
                  value="año/mes/dia"
                  min="2022-01-01"
                  max="2030-01-31"
                />
              </div>
             </div>

            </div>
          </form>
          </div>
        </div>
       </div>
      
        
             <div>
               <p class="lead"></p>
                <b-button variant="outline-primary" href="#"
                    to="/RutasEncontraView">reservar </b-button>
           </div>
    </main>
  </div>
</template>
<style>
.flexbox{
  justify-content: space-around ;
  display:flex
}
.fecha{
  justify-content: space-around ;
  display:flex
}
.text-center{
  justify-content: center ;
  display:flex
}

</style>
<script>
export default {
  name: "BuscarRutacomponent",
};
</script>