<template>
    <div>
       <HeaderComponent />
       <br><br>
       <ReservaComponent/>
       <br>
       <FooterComponent/>
       

    </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ReservaComponent from "@/components/ReservaComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";


export default {
    name: "ReservaView",
    components: {
        HeaderComponent,
        ReservaComponent,
        FooterComponent,
       
    },
};
</script>