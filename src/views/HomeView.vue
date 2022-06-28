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
.foote{
  position:fixed;
  left:0px;
  bottom:2px;
  height:10px;
  width:100%;
}
.alin {
   padding-top: 10%;
}

.home{
  background-size: cover;
  height: 50vh;
  background-image: url(/src/assets/popayan.jpg);
}
</style>