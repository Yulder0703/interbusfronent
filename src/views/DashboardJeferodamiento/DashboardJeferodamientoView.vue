<template>
    <div>
        <HeaderJefeComponent />
        <!-- <section class="dash">
            <SidebarComponent class="comp"/>
            <div class="contenido">Contenido
                <router-view/>
            </div>

        </section> -->
        <FooterComponent/>

    </div>
</template>

<script>

import HeaderJefeComponent from "@/components/HeaderJefeComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "DashboardConductorView",
  components: {
    HeaderJefeComponent,
    FooterComponent,
  },
};
</script>

<style scoped>

.dascond {
  display: flex;
}
.fondoconductor {
  background-color: lightgreen;
}
</style>