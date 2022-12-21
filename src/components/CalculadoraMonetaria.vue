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
                            <input-date 
                                label="Data Inicial" 
                                v-model="dataInicio" 
                                :dark="tema"
                                min="1998-02"
                                :max="dataMaxInputInical"
                                outlined
                                dense
                            />
                        </v-col>
                        <v-col cols="5" class="mt-10">
                            <input-date 
                                label="Data Final"
                                v-model="dataFim" 
                                :dark="tema" 
                                :max="dataHoje"
                                :min="dataMinInputFinal"
                                :valorInicial="dateToday"
                                outlined
                                dense
                            />
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="5" offset="1" class="mt-8">
                            <input-money 
                                v-model="valorMonetario" 
                                prefix="R$" 
                                outlined 
                                :dark="tema" 
                                label="Valor" 
                                dense
                            />
                        </v-col>
                        <v-col cols="5" class="mt-8">
                            <span class="formataCampoSpanResultado">R$ {{result.toFixed(2)}}</span>
                        </v-col>
                    </v-row>
                    <v-row class="mb-16">
                        <v-col class="centralizaBotao">
                            <v-btn @click="calculo" color="primary" >
                                Calcular
                            </v-btn>
                            <v-btn to="/" class="ml-4" color="error" >
                                Voltar para Página Inicial
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
    import axios from 'axios';
    
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
                result: 0,
                indice:'',
                dateToday: '',
            };
        },
    
        computed: {
            dataHoje(){
                const resp = new Date();
                return `${resp.getFullYear()}-${resp.getMonth() + 1}`;
            },

            dataMaxInputInical() {
                let [mes, ano] = this.dataFim.split('/');
                return `${ano}-${mes}`;
            },

            dataMinInputFinal() {
                debugger
                let [mes, ano] = this.dataInicio.split('/')
                return `${ano}-${mes}`;
            },
        },

        methods:{
            temaEscuro(){
                this.tema = true;
            },

            temaClaro(){
                this.tema = false;
            },

            formataData(data){
                let [mes, ano] = data.split('/');
                let dataUs = `${mes}-1-${ano}`;
                let dataFormatada = new Date(dataUs);
                return dataFormatada;
            },

            formataDinheiro(dinheiro){
                let dinheiroSeparado = dinheiro.split(',');
                let dinheiroString = `${dinheiroSeparado[0]}${dinheiroSeparado[1]}`
                let dinheiroFormatado = parseFloat(dinheiroString);
                return dinheiroFormatado
            },

            async calculo(){
                let valorTemporario = this.formataDinheiro(this.valorMonetario);
                let dataInicial = this.dataInicio.split('/')
                let dataFinal = this.dataFim.split('/');

                let contadorDataInicial = this.formataData(this.dataInicio);
                let contadorDataFinal = this.formataData(this.dataFim);

                let indicesTotais = await this.buscaIndices(dataInicial[1], dataFinal[1]);

                while(contadorDataInicial < contadorDataFinal){
                    let indiceAno = indicesTotais.filter((filtro) => filtro.ano == contadorDataInicial.getFullYear());
                    let indiceMes = indiceAno[0].indices[contadorDataInicial.getMonth()];
                    contadorDataInicial.setMonth(contadorDataInicial.getMonth() + 1)
                    valorTemporario = valorTemporario * (indiceMes / 100) + valorTemporario;
                }
                this.result = valorTemporario;
            },

            async buscaIndices(inicio = '2000', fim = '2022'){
                let resp = await axios.get(`http://localhost:8000/api/ipca/${inicio}/${fim}`);
                return this.indice = resp.data;
            }
        },
        mounted(){
            this.dateToday = this.dataHoje;
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

    .formataCampoSpanResultado{
        margin-left: 20px;
    }
</style>
