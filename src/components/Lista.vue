<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <!-- -----------------Buscador-------------- -->
      <b-col sm="6" class="my-1">
        <b-form-group
          label="Buscador"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="center"
          label-size="md"
          class="mb-2"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder=""
            ></b-form-input>
            <b-input-group-append>
              <b-button
                :disabled="!filter" 
              @click="filter = ''" 
              variant="primary"
              >Limpiar</b-button
              >
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <!-- ------------Paginacion-------------- -->
      <b-col sm="7" md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>

    <!-- -----------------Tabla---------------- -->
    <b-table
      :items="productos"
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

      <template #cell(actions)="row" >
        <div class="d-flex justify-content-center">
        <!-- -------------Boton Modal------------ -->
        <b-button
          size="sm"
          @click="info(row.item, $event.target)"
          class="px-4 mx-1"
          variant="warning"
        >
          Editar
        </b-button>
        <!-- -------------Boton Borrar----------- -->
        <b-button 
          size="sm" 
          class="px-4 mx-1"
          @click="DELETE_PRODUCT(row.item.id)" 
          variant="danger">
          Borrar
        </b-button>
        </div>
      </template>
    </b-table>

    <!------------------- Modal------------------- -->
    <b-modal
      :id="infoModal.id"
      :title="infoModal.title"
      ok-only
      @hide="resetInfoModal"
    >
      <b-form>
        <b-form-group
        id="input-group-1" 
        label="Nombre del Produto:" 
        label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="productoEditado.nombre"
            type="text"
            nombre="nombre"
            placeholder="Ingrese nombre del producto"
            required>
          </b-form-input>
        </b-form-group>

        <b-form-group 
        id="input-group-2" 
        label="Categoría:" 
        label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="productoEditado.categoria"
          categoria= "categoria"
          placeholder="Ingrese la categoría del producto"
          required>
          </b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Stock diponible:"
          label-for="input-1"
        >
          <b-form-input
            id="input-3"
            v-model="productoEditado.stock"
            stock="stock"
            type="number"
            placeholder="Ingrese la cantidad disponible"
            required
          >
        </b-form-input>
      </b-form-group>
      
      <b-form-group
        id="input-group-4"
        label="Peso:"
        label-for="input-1">
          <b-form-input
            id="input-4"
            v-model="productoEditado.peso"
            peso="peso"
            type="number"
            placeholder="Ingrese el peso del producto en gramos"
            required
          >
        </b-form-input>
      </b-form-group>
      <b-button 
      @click="EDIT_PRODUCT(productoEditado)" 
      variant="warning"
      size="md"
      >Modificar</b-button>
      </b-form>
    </b-modal>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "Lista",
  data() {
    return {
      productoEditado: {
        nombre: "",
        categoria: "",
        stock: null,
        peso: "",
        id: "",
      },
      fields: [
        {
          key: "id",
          label: "Id",
          sortable: true
        },
        {
          key: "nombre",
          label: "Nombre del Producto",
          sortable: true
        },
        {
          key: "categoria",
          label: "Categoría",
          sortable: true
        },
        {
          key: "stock",
          label: "Stock",
          sortable: true
        },
        {
          key: "peso",
          label: "Peso (grs)",
          sortable: true
        },
        { key: "actions", label: "Acciones" }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: ""
      }
    };
  },
  computed: {
    ...mapState(["productos"]),
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.productos.length;
  },
  methods: {
    ...mapMutations(["ADD_PRODUCT", "DELETE_PRODUCT", "EDIT_PRODUCT"]),


    info(item, button) {
      this.productoEditado = {
        nombre: "",
        categoria: "",
        stock: null,
        peso: "",
        id: "", 
      },
      this.infoModal.title = `Edite el producto`;
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
      this.productoEditado.nombre = item.nombre;
      this.productoEditado.categoria = item.categoria;
      this.productoEditado.stock = item.stock;
      this.productoEditado.peso = item.peso;
      this.productoEditado.id = item.id;
      console.log(this.productoEditado)
      
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>
