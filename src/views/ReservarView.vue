<template>
    <div>
       <br><br>
       <ReservarComponent/>
       <br>
       <FooterComponent/>
       

    </div>
</template>

<script>


import ReservarComponent from '@/components/ReservarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
    name:"ReservarView",
    components:{
     ReservarComponent,
     FooterComponent,
    }
};
</script>
<style scoped>
div {background-color:rgb(231, 231, 231)
}
</style>

