<template>
    <v-img
        :dark="tema"
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        height="657"
    >
        <v-card>
            <v-toolbar-title>
                <v-row>
                    <v-col cols="5">
                        <v-menu
                            bottom
                            left
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    icon
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item  @click="() => {}">
                                    <v-list-item-title @click="temaClaro()">Tema Claro</v-list-item-title>
                                </v-list-item>

                                <v-list-item  @click="() => {}">
                                    <v-list-item-title @click="temaEscuro()">Tema Escuro</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                    <v-col>
                        <h1>Calculadora</h1>
                    </v-col>
                </v-row>
            </v-toolbar-title>
        </v-card>
        <v-row class="mt-16">
            <v-col cols="6" offset="3">
                <v-card>
                    <v-row>
                        <v-col class="centro">
                            <h3>Cáculo Monetário</h3>
                        </v-col>
                    </v-row>
                    <v-row class="mt-6">
                        <v-col cols="5" offset="1" class="mt-10">
                            <input-date label="Data Inicial" v-model="dataInicio" :dark="tema" />
                        </v-col>
                        <v-col cols="5" class="mt-10">
                            <input-date label="Data Final" v-model="dataFim" :dark="tema" />
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="5" offset="1" class="mt-8">
                            <input-money v-model="valorMonetario" prefix="R$" outlined :dark="tema" label="Valor" dense/>
                        </v-col>
                        <v-col cols="5" class="mt-8">
                            <v-text-field v-model="result" outlined label="Resultado" dense/>
                        </v-col>
                    </v-row>
                    <v-row class="mb-16">
                        <v-col class="centralizaBotao">
                            <v-btn color="primary" >
                                Calcular
                            </v-btn>
                            <v-btn class="ml-4" color="error" >
                                Calcular
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-img>
</template>

<script>
    import InputDate from '../shared/inputDate.vue';
    import InputMoney from '../shared/inputMoney.vue';
    
    export default {
        components:{
            InputDate, InputMoney,
        },

        data() {
            return {
                tema: false,
                dataInicio: '',
                dataFim: '',
                valorMonetario: '',
                result: '',
            }
        },
    
        methods:{
            temaEscuro(){
                this.tema = true;
            },

            temaClaro(){
                this.tema = false;
            }
        }
    }
</script>

<style scoped>
.teste{
  background-color: blue;
}

.centro{
    text-align: center;
}
.centralizaBotao{
    margin-left: 209px;
}
</style>