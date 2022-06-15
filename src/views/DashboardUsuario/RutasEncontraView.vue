<template>
    <div>
       <HeaderComponent />
       <br><br>
       <RutasEnComponent/>
       <br>
       <FooterComponent/>
       

    </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import RutasEnComponent from "@/components/RutasEnComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";


export default {
    name: "RutasEncontraView",
    components: {
        HeaderComponent,
        RutasEnComponent,
        FooterComponent,
       
    },
};
</script>