<template>
  <v-img
    :dark="tema"
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    height="660"
  >
  <v-card>
    <v-toolbar-title>
      <v-row class="center">
        <v-col cols="6">
          <h1>Calculadora</h1>
        </v-col>
        <v-col cols="6">
          <v-checkbox class="center" label="Tema" v-model="tema"/>
        </v-col>
      </v-row>
    </v-toolbar-title>
  </v-card>
  </v-img>
</template>

<script>
  export default {
    data() {
      return {
        tema: false,
      }
    }
  }
</script>

<style scoped>
.teste{
  background-color: blue;
}

.center {
  text-align: end !important;
}
</style>