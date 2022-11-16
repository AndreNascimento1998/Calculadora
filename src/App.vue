<template>
  <v-app>
    <v-main>
      <calculadora-monetaria/>
    </v-main>
  </v-app>
</template>

<script>
import calculadoraMonetaria from './components/CalculadoraMonetaria';

export default {
  name: 'App',

  components: {
    calculadoraMonetaria,
  },

  data: () => ({
    //
  }),
};
</script>
