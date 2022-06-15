<template>
    <div>
       <HeaderJefeComponent />
       <br><br>
       <RodamientoComponent/>
       <br>
       <FooterComponent/>
       

    </div>
</template>
<script>
import HeaderJefeComponent from "@/components/HeaderJefeComponent.vue";
import RodamientoComponent from "@/components/NuevoRodamientoComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";


export default {
    name: "RegistroView",
    components: {
        HeaderJefeComponent,
        FooterComponent,
        RodamientoComponent,
       
    },
};
</script>

<style scoped>
 p {
    color: black;
}
</style>