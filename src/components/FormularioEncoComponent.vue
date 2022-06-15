<template>
  <div>

   
    <div>
    <section class=" registro container  col-30 col-sm-20 col-lg-8 col-xxl-20 shadow ">
        <form>
              <div class="mb-3">
                

                <form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Nombre">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Apellido">
    </div>
  </div>
</form>
              
<br>
<form>
  <div class="form-row align-items-center">
    <div class="col-auto my-1">
      
      <select class="custom-select mr-sm-5" id="inlineFormCustomSelect">
        <option selected>Tipo de Identificacion...</option>
        <option value="1">Cedula de Ciudadania</option>
        <option value="2">Tarjeta de Identidad</option>
        <option value="3">Cedula Extrajera</option>
      </select>
    </div>
    
    </div>
 <br>

                 
                <label for="exampleInputEmail1" class="form-label">Numero de Identificacion</label>
                 <input type="tel" class="form-control" id="tel" aria-describedby="tel">

                 </form>

                  <label for="exampleInputEmail1" class="form-label">Numero de Contacto</label>
                    <div class="caja">
                      
                          <input type="tel" class=" margencelular form-control" id="tel" aria-describedby="tel">
                             <img src="@/assets/celular.png" alt="logo" class="celular">
              </div> 
              </div>

              <form>
 <div>  
        <select class="custom-select mr-sm-5" id="inlineFormCustomSelect">
        <option selected>Peso Envio...</option>
        <option value="1">1 a 5 lbr</option>
        <option value="2">10 a 100 lbr</option>
        <option value="3">1000 a 10000 lbr</option>
        <option value="3">100000 a 1000000 lbr</option>
     
      </select>
      </div>
      </form>



        <form>    
         <div>  
          <br>
           
  <form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
    <input type="text" class="form-control" placeholder="email@example.com">
    </div>
  </div>
  </form>
  </div>
</form>
            <br>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Recordar mis datos</label>
            </div>
            <div id="Identificacion" class="text-center form-text">No compartas tu información con nadie.</div>
            <hr>
            <div class="d-grid gap-2 col-6 mx-auto">
              
            <button type="submit" class=" btn btn-secondary"><router-link to="/InicioSesionPView">Confirma la Reserva de Envio</router-link></button>
        </div>
          </form>
        </section>
        </div>
        </div>
</template>
<script>
export default {
    name:"FormularioEncoComponent",
};
</script>
<style scoped>
.registro{
    padding: 10px;
    border: outset 7px rgb(90, 177, 248 );
    border-radius: 10px;
}
.caja{
  border: 1px solid rgb(195, 185, 185);
  border-radius: 5px;
  display: flex;
}
.margencelular{
  border:  none;
}
.celular{
  margin-top: 3px;
  width:25px;
  height: 30px;
  margin-right: 5px;
}
.contraseña{
  border: 1px solid rgb(195, 185, 185);
  border-radius: 5px;
  display: flex;
}
.oculto{
  width:20px;
  height: 20px;
  margin-top: 8px;
  margin-right: 10px;
}
.margencontraseña{
  border: none;
  
}


</style>