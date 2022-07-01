<template>
    <div>

       <ReservaComponent/>
       <br>
       <FooterComponent/>
       

    </div>
</template>
<script>

import ReservaComponent from "@/components/ReservaComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";


export default {
    name: "ReservaView",
    components: {
        
        ReservaComponent,
        FooterComponent,
       
    },
};
</script>