<template>
    <div>
       <HeaderComponent />
       <br><br>
       <RegistroComponent/>
       <br>
       <FooterComponent/>
       

    </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import RegistroComponent from "@/components/RegistroComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";


export default {
    name: "RegistroView",
    components: {
        HeaderComponent,
        RegistroComponent,
        FooterComponent,
       
    },
};
</script>

<style scoped>
 p {
    color: black;
}
</style>