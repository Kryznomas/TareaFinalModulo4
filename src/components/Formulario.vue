<template>
  <div>
    <b-form class="mb-5">
      <b-form-group
        id="input-group-1"
        label="Nombre:"
        label-for="input-1"
        label-cols-sm="2"
      >
        <b-form-input
          id="input-1"
          v-model="producto.nombre"
          type="text"
          nombre="nombre"
          placeholder="Ingrese nombre del producto"
          required
        >
        </b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Categoría:"
        label-for="input-2"
        label-cols-sm="2"
      >
        <b-form-input
          id="input-2"
          v-model="producto.categoria"
          categoria="categoria"
          placeholder="Ingrese la categoría del producto"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Stock diponible:"
        label-for="input-1"
        label-cols-sm="2"
      >
        <b-form-input
          id="input-3"
          v-model="producto.stock"
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
        label-for="input-1"
        label-cols-sm="2"
      >
        <b-form-input
          id="input-4"
          v-model="producto.peso"
          peso="peso"
          type="number"
          placeholder="Ingrese el peso del producto en gramos"
          required
        >
        </b-form-input>
      </b-form-group>
      <b-button
        @click.prevent="agregarProducto()"
        size="md"
        variant="primary"
        class="px-3"
        >Agregar</b-button
      >
    </b-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Formulario",
  data() {
    return {
      producto: {
        nombre: "",
        categoria: "",
        stock: null,
        peso: "",
      },
      show: true,
    };
  },
  methods: {
    ...mapMutations(["ADD_PRODUCT"]),

    agregarProducto() {
      this.ADD_PRODUCT(this.producto);
    },
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
