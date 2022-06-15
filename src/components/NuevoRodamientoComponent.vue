<template>

<div class>
  <div class= "container">
   <div class="col-1">
    <h1 class="centrar"> Nuevo Rodamiento</h1>
                <label for="Fecha" class="form-label"                 
                ></label>
                <input
                  type="date"
                  class=""
                  placeholder="ingresa fecha "
                  id="start"
                  name="trip-start"
                  value="año/mes/dia"
                  min="2022-01-01"
                  max="2030-01-31"
                />
              </div>  
     </div> 
       <div class="tabla">
 <table class="table">
    <thead>
      <tr>
         <th scope="col">ID</th>
        <th scope="col">Hora</th>
        <th scope="col">Placa</th>
        <th scope="col">N° Bus</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>5:30</td>
        <td>CSU-63B</td>
        <td>1023</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>6:10</td>
        <td>HJL-78Ñ</td>
        <td>1025</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>7:15</td>
        <td>DFG-96L</td>
        <td>8456</td>
      </tr>
    </tbody>
  </table>
        </div>
        <div>
        <p class="lead"></p>
              <button class="w-95   btn btn-primary btn-lg" type="submit">
                Generar
              </button>
            </div>
</div>


</template>
<style>

  .container{
    justify-content: center;
    display:flex;
    
 

  }

 h1 {
  justify-content: center;
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.centrar{
  text-align: justify;
}
</style>

<script>
export default {
    name:"RodamientoComponent",
};

</script>

