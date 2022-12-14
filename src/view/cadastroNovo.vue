<template>
    <v-img 
        src="@/assets/cadastro/cadastro.webp"
    >
        <p class="letra mt-10">Calculadora Monetária</p>
        <dados-contato/>
        <dados-pessoais class="mt-5"/>
        <dados-usuario class="mt-5" />
    </v-img>
</template>

<script>
    import dadosContato from './dadosContato.vue';
    import dadosPessoais from './dadosPessoais.vue';
    import dadosUsuario from './dadosUsuario.vue';

    export default {
        components: {
            dadosContato,
            dadosPessoais,
            dadosUsuario,
        }
    }
</script>

<style scoped>
.teste{
    background-color: black;
}
.letra{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
}


</style>