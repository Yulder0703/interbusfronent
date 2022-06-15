<template>
    <div>
       <HeaderComponent />
       <br><br>
       <FormularioEncoComponent/>
       <br>
       <FooterComponent/>
       

    </div>
</template>

<script>

import HeaderComponent from '@/components/HeaderComponent.vue'
import FormularioEncoComponent from '@/components/FormularioEncoComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
    name: 'FormularioEncoView',
    components:{
        FormularioEncoComponent,
        FooterComponent,
        HeaderComponent
    }
}
</script>

<style scoped>

</style>