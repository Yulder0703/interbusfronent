<template>
    <div>
        <HeaderComponent/>
        <section class="dash">
            <SidebarComponent class="comp"/>
            <div class="contenido">Contenido
                <router-view/>
            </div>

        </section>
        <FooterComponent/>

    </div>
</template>

<script>

// import SidebarComponent from "@/components/SidebarComponent.vue"
import HeaderComponent from "@/components/HeaderComponent.vue"
import FooterComponent from "@/components/FooterComponent.vue"

export default {
    name: "DashboardView",
    components:{
        // SidebarComponent,
        HeaderComponent,
        FooterComponent,
    }
}
</script>

<style scoped>
.dash{
    
    display: flex;
}

.contenido{
    border: 1px solid black;
}
.comp{
    background-color: lightskyblue;
}
</style>