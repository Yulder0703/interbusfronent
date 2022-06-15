<template>
    <div>
       <HeaderComponent/>
       <br><br>
       <InicioSesionComponent/>
       <br>
       <FooterComponent/>
       

    </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import InicioSesionComponent from "@/components/InicioSesionComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";


export default {
    name: "RegistroView",
    components: {
        HeaderComponent,
        InicioSesionComponent,
        FooterComponent,
       
    },
};
</script>

<style scoped>
 p {
    color: black;
}
</style>