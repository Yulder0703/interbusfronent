<template>
  <v-app id="inspire">
    <Sidebar  v-model="drawer" />
    <Topbar @drawerEvent="drawer = !drawer" />
    <v-main style="background: #f5f5f540">
      <v-container class="py-1 px-1" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Topbar from '@/components/Topbar.vue';

export default {
    name: "DasboarUsarioView",
    data: () => ({
        cards: ["Today", "Yesterday"],
        drawer: null,
    }),
    methods: {},
    components: { Sidebar, Topbar }
};
</script>
<style scoped>
.inspire{
  background-size: cover;
  height: 100vh;
  background-image: url(/src/assets/popayan.jpg);
}
</style>
