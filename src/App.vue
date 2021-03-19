<template>
  <div id="app">
    <h2>Constrol de stock Tienda Shina</h2>
    <Formulario> </Formulario>
    <Lista></Lista>
  </div>
</template>
<script>
import Lista from "./components/Lista.vue";
import Formulario from "./components/Formulario";

export default {
  name: "App",
  components: {
    Lista,
    Formulario,
  },
};
</script>

<style lang="scss">
#app {
  width: 90vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
h2 {
  text-align: center;
  margin-bottom: 2rem;
}
body {
  display: flex;
  justify-content: space-around;
}
</style>
