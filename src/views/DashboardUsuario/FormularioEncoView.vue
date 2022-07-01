<template>
    <div>
      
       <FormularioEncoComponent/>
       <br>
       <FooterComponent/>
       

    </div>
</template>

<script>


import FormularioEncoComponent from '@/components/FormularioEncoComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
    name: 'FormularioEncoView',
    components:{
        FormularioEncoComponent,
        FooterComponent,
        
    }
}
</script>

<style scoped>

</style>