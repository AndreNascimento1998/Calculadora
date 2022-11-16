<template>
    <v-main>
      <h3>foireas</h3>
      <calculadora-monetaria/>
    </v-main>
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
