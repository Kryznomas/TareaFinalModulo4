import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [
      {
        nombre: "Alga Nori",
        categoria: "no perecible",
        peso: "200",
        stock: "50",
        id: 100101,
      },
      {
        nombre: "Gyozas de verduras",
        categoria: "congelados",
        peso: "500",
        stock: "20",
        id: 100102,
      },
      {
        nombre: "Champiñones Portobello",
        categoria: "frescos",
        peso: "200",
        stock: "30",
        id: 100103,
      },
      {
        nombre: "Vaporera pequeña",
        categoria: "menaje",
        peso: "300",
        stock: "10",
        id: 100104,
      },
      {
        nombre: "Salsa de soya",
        categoria: "condimentos",
        peso: "500",
        stock: "85",
        id: 100105,
      },
      {
        nombre: "Alga de chapsui",
        categoria: "no perecible",
        peso: "50",
        stock: "65",
        id: 100106,
      },
      {
        nombre: "Pan Man Tau",
        categoria: "congelados",
        peso: "500",
        stock: "15",
        id: 100107,
      },
      {
        nombre: "Tofu",
        categoria: "frescos",
        peso: "500",
        stock: "13",
        id: 100108,
      },
      {
        nombre: "Palitos para cocinar",
        categoria: "menaje",
        peso: "50",
        stock: "42",
        id: 100109,
      },
      {
        nombre: "Aceite de sésamo",
        categoria: "condimentos",
        peso: "350",
        stock: "34",
        id: 100110,
      },
      {
        nombre: "Poroto de soya",
        categoria: "no perecible",
        peso: "1000",
        stock: "46",
        id: 100111,
      },
      {
        nombre: "Arrollados primavera",
        categoria: "congelados",
        peso: "400",
        stock: "20",
        id: 100112,
      },
      {
        nombre: "Champiñones Enoki",
        categoria: "frescos",
        peso: "150",
        stock: "20",
        id: 100113,
      },
      {
        nombre: "Wok fierro fundido",
        categoria: "menaje",
        peso: "3000",
        stock: "8",
        id: 100114,
      },
      {
        nombre: "Salsa soya oscura",
        categoria: "condimentos",
        peso: "500",
        stock: "70",
        id: 100115,
      },
      {
        nombre: "Fideos de arroz",
        categoria: "no perecible",
        peso: "300",
        stock: "67",
        id: 100116,
      },
      {
        nombre: "Dulces para vapor",
        categoria: "congelados",
        peso: "600",
        stock: "32",
        id: 100117,
      },
      {
        nombre: "Champiñones Shiitake",
        categoria: "frescos",
        peso: "100",
        stock: "14",
        id: 100118,
      },
      {
        nombre: "Mosquetero cocina",
        categoria: "menaje",
        peso: "245",
        stock: "23",
        id: 100119,
      },
      {
        nombre: "Salsa Sichuan",
        categoria: "condimentos",
        peso: "200",
        stock: "56",
        id: 100120,
      },
      {
        nombre: "Yuba",
        categoria: "no perecible",
        peso: "150",
        stock: "59",
        id: 100121,
      },
      {
        nombre: "Tofu congelado",
        categoria: "congelados",
        peso: "350",
        stock: "47",
        id: 100122,
      },
      {
        nombre: "Repollo chino",
        categoria: "frescos",
        peso: "500",
        stock: "12",
        id: 100123,
      },
      {
        nombre: "Vaporera grande",
        categoria: "menaje",
        peso: "400",
        stock: "6",
        id: 100124,
      },
      {
        nombre: "Vinagre de arroz",
        categoria: "condimentos",
        peso: "500",
        stock: "57",
        id: 100125,
      },
      {
        nombre: "Fideos de trigo",
        categoria: "no perecible",
        peso: "300",
        stock: "125",
        id: 100126,
      },
      {
        nombre: "Gyozas de cerdo",
        categoria: "congelados",
        peso: "500",
        stock: "23",
        id: 100127,
      },
      {
        nombre: "Bao vegetariano",
        categoria: "frescos",
        peso: "80",
        stock: "51",
        id: 100128,
      },
      {
        nombre: "Cuchara de madera",
        categoria: "menaje",
        peso: "120",
        stock: "45",
        id: 100129,
      },
      {
        nombre: "Pimienta roja",
        categoria: "condimentos",
        peso: "80",
        stock: "157",
        id: 100130,
      },
      {
        nombre: "Alga oreja de oso",
        categoria: "no perecible",
        peso: "90",
        stock: "126",
        id: 100131,
      },
    ],
    idbase: 100132,
    index: "0",
  },
  mutations: {
    ADD_PRODUCT(state, producto) {
      state.productos.push({ ...producto, id: state.idbase++ });
    },
    DELETE_PRODUCT(state, producto, index) {
      index = state.productos.findIndex((indice) => indice.id === producto);
      state.productos.splice(index, 1);
    },

    EDIT_PRODUCT(state, producto) {
      let index = state.productos.findIndex(
        (indice) => indice.id === producto.id
      );
      state.productos.splice(index, 1, producto);
    },
  },
  actions: {},
  modules: {},
});
