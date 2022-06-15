<template>
    <div>
       
    <section class="centro">
       
        <section class="container col-10 col-sm-10 col-lg-10 col-xxl-10 ">
            <h2>INICIAR SESION EN INTERBUS</h2>
        </section>
        <section class="d-flex justify-content-center container-fluid contenedor-inicio ">
            
        <section class="redes col-5 col-sm-5 col-lg-4 col-xxl-3 ocultar">
            <div class="input-group">
                <div class="input-group-text" id="btnGroupAddon"><img src="../assets/facebook.png" alt="" class="imgred"></div>
                <input type="text" class="form-control" placeholder="Inicia sesion con Facebook" aria-label="Input group example" aria-describedby="btnGroupAddon">
            </div>
            <div class="input-group google">
                <div class="input-group-text" id="btnGroupAddon"><img src="../assets/google.png" alt="" class="imgred"></div>
                <input type="text" class="form-control" placeholder="Inicia sesion con Google" aria-label="" aria-describedby="btnGroupAddon">
            </div>
        </section>
        <section class="linea ocultar">
            <hr size="300"  >
        </section>
        <!-- parde de la targeta de iniciar sesion -->
        <section class=" inicio  col-8 col-sm-6 col-lg-4 col-xxl-3">
            <b-card-group deck>
            <b-card header-bg-variant="info" text-variant="white" header="INICIAR SESION" class="text-center">
            <b-card-text>
            <form class="formulario">
                 <img alt="logo" src="../assets/inicio.png" width="80"  height="80">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" placeholder="Correo">Correo</label>
                <b-input-group class="mb-3 icono">
                    <!-- iconono de correo -->
                <div class="input-group-text" id="btnGroupAddon"><b-icon icon="person-fill"></b-icon ></div>
                <!-- termina iconono de correo -->
                    <b-form-input type="staticEmail" placeholder="email@example.com"></b-form-input>
                </b-input-group>
                <!-- <label for="exampleInputEmail1" class="form-label" placeholder="Identificacion">Identificacion</label>           
                <input type="email"  class="form-control" id="exampleInputEmail1" placeholder="Identificacion" aria-describedby="emailHelp"> -->
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label" >Contraseña</label>
              <!-- <input type="password" class="form-control" placeholder="Contraseña" id="exampleInputPassword1"> -->
              <b-input-group class="mb-3 icono">
                 <!-- iconono de contraseña -->
                <div class="input-group-text" id="btnGroupAddon"><b-icon icon="lock-fill"></b-icon></div>
                     <!-- terman iconono de contraseña -->
                    <b-form-input type="password" placeholder="Contraseña"></b-form-input>
                </b-input-group>
            </div>
            <div class="mb-3">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Recuerdame</label>
            </div>
            <b-button pill variant type="submit" class="boton btn-primary d-grid gap-2  mx-auto">Ingresar</b-button>
            <br>
            <div id="passwordHelpBlock" class="text-center form-text">
                No tienes cuenta registrate ya.
              </div>
            
            <b-button pill variant type="submit" class="boton btn-primary d-grid gap-2  mx-auto" to="/registro">Registrarme</b-button>
            </form>
            </b-card-text>
            </b-card>
            </b-card-group>

            <!-- <b-input-group class="mb-3">
                <b-input-group-prepend is-text>
                    <b-icon icon="person-fill"></b-icon>
                </b-input-group-prepend>
                <b-form-input type="text" placeholder="Identificacion"></b-form-input>
            </b-input-group> -->
            

        </section>
    </section>
         
    </section>
    </div>
   
</template>

<script>
    //import BarrainicioComponent from '@/components/BarrainicioComponent.vue';

    export default{
        name: "InicioSesionView",
    };
</script>

<style scoped>
    .inicio{
        margin-top: 0%;
        padding: 20px;
        margin-left: 2%;
    }
    .tamaño{
        background: #0465a5;
        height: 40px;
    }

    .formulario{
      color: black;
    }

    .boton{
      background-color: #2E86C1;
    }
    .imgred{
        width: 25px;
        height: 25px;
    }

    .redes{
        margin-top: 2%;
    }
    
    .google{
        margin-top: 3%;
    }

    .linea{
        width: 2px;
        margin-left: 3%;
        background-color: #0465a5;
    }

    .imgfondo{
        background-color: rgba(0, 0, 0, 0, 8);
        filter: brightness(0.3);
        opacity: 0.7;
        width: 100%;
        height: 100%;
    }

    .centro{
        margin-top: 2%;
    }

     @media screen and (max-width: 600px){
      .ocultar{
        display: none;
      }
    }
</style>