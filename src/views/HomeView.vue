<template>
  <div class="home">
    <HeaderComponent /> 
    <br>
    <InformacionComponent/>
    <br>
     <FooterComponent/>
  </div>
</template>

<script>
// @ is an alias to /src

import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from "@/components/FooterComponent.vue"
import InformacionComponent from '@/components/InformacionComponent.vue';
export default {
  name: 'HomeView',
  components: {
    
    HeaderComponent,
    InformacionComponent,
    FooterComponent,
  }
}
</script>
<style scoped>
.n{
    background-size: cover;
    height: 100vh;

}

.alin {
   padding-top: 10%;
}

.home{
  min-height: 70vh;
  max-height: 70vh;
  background: url(/src/assets/popayan.jpg) no-repeat  center center fixed;
  background-size: cover;
}
</style>