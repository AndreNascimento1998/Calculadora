<template>
    <v-img 
        src="@/assets/cadastro/cadastro.webp"
    >
        <p class="letra mt-10">Calculadora Monetária</p>
        <dados-contato/>
        <dados-pessoais class="mt-5"/>
        <dados-usuario class="mt-5" />
        <v-row class="text-center">
            <v-col>
                <v-btn class="mr-1" color="primary">Salvar</v-btn>
                <v-btn color="error">Voltar</v-btn>
            </v-col>
        </v-row>
        
    </v-img>
</template>

<script>
    import { mapActions } from 'vuex';
    import dadosContato from './dadosContato.vue';
    import dadosPessoais from './dadosPessoais.vue';
    import dadosUsuario from './dadosUsuario.vue';

    export default {
        components: {
            dadosContato,
            dadosPessoais,
            dadosUsuario,
        },

        methods:{
            ...mapActions('usuario', ['pegaEstados']),
        },

        async mounted(){
            await this.pegaEstados();
        },
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

.text{
    text-align: center !important;
}
</style>