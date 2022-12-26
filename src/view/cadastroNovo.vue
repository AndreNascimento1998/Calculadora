<template>
    <v-img 
        src="@/assets/cadastro/cadastro.webp"
    >
        <v-row>
            <v-col offset="2" cols="8" class="teste">
                <dados-contato/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="8" offset="2" class="teste">
                <dados-pessoais class="mt-5"/>
            </v-col>
        </v-row>
        <v-row v-show="!id">
            <v-col cols="8" offset="2" class="teste">
                <dados-usuario class="mt-5" />
            </v-col>
        </v-row>
        <v-row class="text-center">
            <v-col v-if="!id" cols="8" offset="2" class="teste">
                <v-btn @click="salvar()" class="mr-1" color="primary">Salvar</v-btn>
                <v-btn to="/" color="error">Voltar</v-btn>
            </v-col>
            <v-col v-else cols="8" offset="2" class="teste">
                <v-btn @click="editar(id)" class="mr-1" color="warning">Editar</v-btn>
                <v-btn to="/" color="error">Voltar</v-btn>
            </v-col>
        </v-row>
    </v-img>
</template>

<script>
    import { mapActions, mapMutations } from 'vuex';
    import dadosContato from './dadosContato.vue';
    import dadosPessoais from './dadosPessoais.vue';
    import dadosUsuario from './dadosUsuario.vue';

    export default {
        components: {
            dadosContato,
            dadosPessoais,
            dadosUsuario,
        },

        computed:{
            id(){
                let id = this.$route.params.id
                if(id){
                    return id
                }
                return false;
            }
        },

        methods:{
            ...mapActions('usuario', ['pegaEstados', 'saveUser', 'usuarioId']),
            ...mapMutations('usuario', ['reset']),
            salvar(){
                this.saveUser();
                this.$router.push('/inicio');
                this.reset();
            },

            editar(id){
                this.usuarioId(id);
            }
        },

        async mounted(){
            await this.pegaEstados();
        },
    }
</script>

<style scoped>
.teste{
    background-color: rgb(255, 253, 253);
}
.letra{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
}

.text{
    text-align: center !important;
}
</style>