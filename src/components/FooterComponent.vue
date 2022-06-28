<template>
<div class="foter">
   <section id="pie">
        <div class="sessionpapa ">
            <div class="session2">
                <li><b>De su interes</b></li>
                <br>
                <a href="http://www.popayan.gov.co/sectransito/tramites-y-servicios" target="_bank"> Secretaria De Movilidad</a>
                <br>
                <br>
                <a href="https://www.pyphoy.com/popayan" target="_bank"> Consultar Pico Y Placa</a>
                <br>
                <br>
                <a href="https://fcm.org.co/simit/#/home-public" target="_bank"> Consultar Infracciones</a>
            </div>
            <div class="session3">
                <li> <b>Informacion </b></li>
                <br>
                <a href="https://ctpisenacauca.blogspot.com/" target="_bank" > Sobre Nosotros</a>
                <br>
                <br>
                <a href="http://oferta.senasofiaplus.edu.co/sofia-oferta/" target="_bank" > Ofertas</a>
                
            </div>
            <div class="session4">
                <li><b>Contactos </b></li>
                <br>
               <a href="https://www.facebook.com/SENA" target="_bank"><img
                        src="../assets/facebook.png"
                        width=35  alt="Siguenos en facebook" /></a>
                        <br>
                        <br>

                        <a href="https://web.whatsapp.com/" target="_bank"><img
                        src="../assets/whatsapp.png"
                        width=35  alt="Contactanos" /></a>
                
            </div>
           
            
        </div>
         <div class="boxsol">
      <hr>
      <p> Todos los derechos reservados ©  2022<b> INTERBUS</b></p>
    </div>
    </section>
    </div>


</template>
<script>
export default {
    name: "FooterC",

};
</script>
<style scoped>

A:link {text-decoration: none }
A:hover { color: white; font-family: arial; text-decoration: none }
A:visited {color: white;  font-family: arial; text-decoration: none }

.sessionpapa{
    height: auto;
    margin: auto;
    display: flex;
    margin-top: auto;
    background-color: rgba(7, 14, 33, 0.988);
    color: white;
    justify-content: space-between;
}
.session1{
   width: 200px;
   height: 200px;
   position: relative;
}
.session2{
   width: 200px;
   height: 200px;
   position: relative;
   
    
}
.session3{
    width: 200px;
    height: 200px;
    position: relative;
    
}

.boxsol {
  max-width: 1200px;
  margin: auto;
  text-align: center;
  padding: 0px 40px;

  
}
.boxsol p {
  margin-top: 20px;
  color: #727272;
}
.boxsol hr {
  border: none;
  height: 1px;
  background-color: #727272;
}
.foter{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 270px;
    margin: auto;
}

</style>