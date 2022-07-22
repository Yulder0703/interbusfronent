<template>
<div class="cards a">
  <div class="mision">
        <div class="imagen">
        <img src="../assets/logo2.jpeg" alt="dfdd" class="imagen1" style="max-width: 90%;">
       </div>
      <b-col md="11">
          <div class="textomision">
             Ofrecer un software de calidad donde se supere las expectativas de los clientes. Brindando un soporte adecuado y oportuno que garantice la seguridad y el correcto funcionamiento en cualquier momento.
          </div>
      </b-col>
   
  
    </div>
  
    <div class="mision">
        <div class="imagen">
        <img src="../assets/visionlogo.jpeg" alt="dfdd" class="imagen1" style="max-width: 90%;">
       </div>
      <b-col md="11">
          <div class="textovision">
            Como objetivo trascendental tenemos que el proyecto sea reconocido por siempre ser innovador y poseemos la plena seguridad que se hará parte de un mercado creciente, donde haremos una contribución significativa.
          </div>
      </b-col>
   
  
    </div>
  
  
  
</div>

  

</template>
<script>
export default {
    name: "informacionView"
}
</script>
<style scoped>

.a {
  display: flex;
  justify-content:space-evenly;
  
}
.mision{
width: 100%;
height: 400px;
max-width: 300px;
border-radius: 5px;
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(2px);
border: 1px solid rgba(255, 255, 255, 0.02);
border-right-color: rgba(255, 255, 255, 0.01);
border-bottom-color: rgba(255, 255, 255, 0.01);
box-shadow:  0 20px 30px rgba(0, 0, 0, 0.1);
padding: 15px;
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
.mision,
.mision *{
  box-sizing: border-box;
  transition: 400ms;
}
.imagen img{
width: 80%;
height: auto;
}
.textmision{
position: absolute;
right: 15px;
bottom: 15px;
left: 15px;
text-align: center;
color: #fff;
font-size: 14px;
font-family: "Lato";
letter-spacing: 0.1em;
opacity: 0;
}
.mision:hover .imagen{
transform: translateY(-0.2px);
}

.mision:hover .imagen img{
  transform: translate(-0px, -10px) rotate(-1deg) scale(1.4);
}
.mision:hover .textmision{
  transform: translateY(-50px);
  opacity: 1;
}

</style>