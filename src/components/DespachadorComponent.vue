<template>
   <div>
    
      <b-col sm="5" md="6" class="my-1">
        <b-form-group
          label="VER"
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <!-- <b-col sm="7" md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col> -->
  

    <!-- Main table element -->
    <b-table
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      stacked="md"
      show-empty
      small
      @filtered="onFiltered"
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #cell(actions)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          DESPACHAR
        </b-button>
        <!-- <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button> -->
      </template>

      <template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>

    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" IMPRIMIR-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
  


 </div>
</template>

<script>
  export default {
    name:"DespachadorComponent",
  data() {
      return {
        items: [
          {  Hora: '10:00', PlacaBus: 4443, NombConductor:  'Andres Salsedo'  },
          {  Hora: '11:00', PlacaBus: 2551, NombConductor: 'Larsen Mosquera'  },
          {  Hora: '12:00',  PlacaBus: 9444, NombConductor: 'Mini Navarro' },
          {  Hora: '12:30', PlacaBus: 8934, NombConductor: 'Genevan Lopez' },
          {  Hora: '12:20', PlacaBus: 3668, NombConductor: 'JamiCarney' },
          {  Hora: '01:00', PlacaBus: 2667, NombConductor: 'Essie Dunlap'  },
          {  Hora: '08:00', PlacaBus: 4990, NombConductor:  'Gerardo Guerrero'  },
         
          { Hora: '03:00', PlacaBus: 2556, NombConductor: 'Sebastian Dunlap'  },
          { Hora: '04:50', PlacaBus: 2332,NombConductor: 'Lucia Arjona'  },
          { Hora: '03:30', PlacaBus: 3866, NombConductor: 'Ferney Calderon'  },
          { Hora: '02:20', PlacaBus: 2779,NombConductor: 'Marcos Caicedo'  },
        ],
        fields: [
          { key: 'NombConductor', label: 'NombConductor' },
          { key: 'Hora', label: 'Hora' },
          { key: 'PlacaBus', label: 'Placa Bus' },
          {
            key: 'NombConductor',
            label: '',
            // formatter: (value, key, item) => {
            //   return value ? 'Yes' : 'No'
            // },
           
          },
          { key: 'actions', label: 'Actions' }
        ],
        // totalRows: 1,
        // currentPage: 1,
        perPage: 5,
        pageOptions: [1, 2,3,4,5,6,7, { value: 100,}],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
        infoModal: {
          id: 'info_modal',
          title: '',
          content: ''
        }
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length
    },
    methods: {
      info(item, index, button) {
        this.infoModal.title = `TIQUETE: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }
  }
</script>