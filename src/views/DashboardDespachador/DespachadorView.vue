<template>
    <div>
         
       <HeaderComponent />
       <br><br>
       
      
         
         <b-button variant="outline-primary">
        <router-link to="/DespachadorView">DIA</router-link>
      </b-button>
        <b-button variant="outline-primary">
              <router-link to="/FormularioEncoView">MES</router-link>
        </b-button>
          <b-button variant="outline-primary">
                <router-link to="/DespachadorView">AÑO</router-link>
          </b-button> 
            
        
        <DespachadorComponent/>
         <br>
       <FooterComponent/>
    </div>
</template>

<script>

import DespachadorComponent from '@/components/DespachadorComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
    name: 'DespachadorView',
    components:{
        DespachadorComponent,
        HeaderComponent,
        FooterComponent
    }
}
</script>

<style scoped>

</style>