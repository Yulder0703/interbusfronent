<template>
  <div>
    <HeaderDespachadorComponent />
    <!-- <section class="dasdes">
      <SidebarDespachadorComponent class="fondodespachador" />
      <div>
        <router-view />
      </div>
    </section> -->
    <FooterComponent />
  </div>
</template>

<script>
// import SidebarDespachadorComponent from "@/components/SidebarDespachadorComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderDespachadorComponent from '@/components/HeaderDespachadorComponent.vue';

export default {
  name: "DashboardDespachadorView",
  components: {
    // SidebarDespachadorComponent,
    FooterComponent,
    HeaderDespachadorComponent,
  },
};
</script>

<style scoped>
h2 {
  background-color: rgb(147, 231, 158);
}
.dasdes {
  display: flex;
}
.fondodespachador {
  background-color: lightgreen;
}
</style>