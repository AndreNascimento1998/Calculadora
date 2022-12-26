<template>
    <div>
        <v-row>
            <v-col cols="1" class="fundo">
                <v-img class="margem" src="@/assets/logo.png" height="45" width="45"/>
            </v-col>
            <v-col cols="4">               
                <p class="titulo margemTop">Atualização monetária</p>
            </v-col>
            <v-col offset="5">
                <v-btn @click="paginaEdit(id)" class="mt-5" text color="blue"><p>Editar</p></v-btn>
            </v-col>
        </v-row>        
        <v-row>
            <v-img src="@/assets/inicio/inicio.jpg">
                <v-row>
                    <v-col class="mt-16" cols="6" offset="3">
                        <h1 class="text-center">Correção Monetária</h1>
                        <v-col offset="2" cols="10">
                            <h3 class="mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Modi itaque tenetur aut, explicabo eveniet, cum velit autem 
                                fugit illum quis porro. Aspernatur ullam recusandae in dolore
                                ut aliquam excepturi molestiae? Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Cupiditate quod eaque libero nihil 
                                nesciunt! Dolorum eum ea suscipit beatae aliquid, provident 
                                veniam impedit consequuntur dignissimos ducimus numquam quidem 
                                voluptas libero.
                            </h3>
                        </v-col>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" offset="5">
                        <v-btn to="/calculadora" color="secondary" width="300">
                            Calculadora Monetária
                        </v-btn>
                    </v-col>
                    <v-col cols="12" offset="5">
                        <v-btn width="300" color="error" to="/">Sair</v-btn>
                    </v-col>
                </v-row>
            </v-img>
        </v-row>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
    export default {
        data() {
            return {
                idCadastro: '',
                estados: '',
            }
        },

        computed: {
            ...mapGetters('usuario', ['pickEstados']),
            id(){
                let id = this.$route.params.id
                if(id){
                    return parseFloat(id)
                }
                return false;
            }
        },

        methods: {
            ...mapActions('usuario', ['usuarioId', 'pegaEstados']),
            ...mapMutations('usuario', ['paginaEdicao']),

            async paginaEdit(){
                debugger
                let usuario = await this.usuarioId(this.id);
                let uf = await this.filtroUf(usuario.uf);
                console.log(uf)
                this.paginaEdicao(usuario, uf);
                this.$router.push(`/edit/${this.id}`);
            },

            async filtroUf(uf){
                const ufFiltrada = this.pickEstados.filter((resp) => resp.uf == uf);
                return ufFiltrada;
            }
        },
        async mounted() {
            await this.pegaEstados();
        }
    }
</script>

<style scoped>
.titulo{
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
}

.margemTop{
    margin-top: 10px;
}
.margem{
    margin-left: 75px;
    margin-top: 10px;
}

.teste{
    background-color: black;
}
</style>
