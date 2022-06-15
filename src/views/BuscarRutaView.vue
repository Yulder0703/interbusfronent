<template>
    <div>
       <HeaderComponent/>
       <br><br>
       <BuscarRutaComponent/>
       <br>
       <FooterComponent/>
       

    </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import BuscarRutaComponent from "@/components/BuscarRutaComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";


export default {
    name: "BuscarRutaView",
    components: {
        HeaderComponent,
        BuscarRutaComponent,
        FooterComponent,
       
    },
};
</script>