<template>
    <div>
       <HeaderComponent/>
       <br><br>
       <ReservarComponent/>
       <br>
       <FooterComponent/>
       

    </div>
</template>

<script>

import HeaderComponent from '@/components/HeaderComponent.vue'
import ReservarComponent from '@/components/ReservarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
    name:"ReservarView",
    components:{
     HeaderComponent,
     ReservarComponent,
     FooterComponent,
    }
};
</script>
<style scoped>
div {background-color:rgb(231, 231, 231)
}
</style>

