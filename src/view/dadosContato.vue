<template>
    <div>
        <v-form>
            <v-row>
                <v-col class="cor letra">
                    Dados de Contato
                </v-col>
            </v-row>
            <v-row class="margemToolbar">
                <v-col class="naoPadding mr-1" cols="3" offset="3">
                    <v-text-field 
                            v-model="dadosContato.logradouro"
                            label="Logradouro" 
                            dense
                            outlined 
                            background-color="white" 
                    />
                </v-col>
                <v-col class="naoPadding" cols="3">
                    <v-text-field 
                        v-model="dadosContato.numero"
                        label="Número" 
                        dense 
                        outlined 
                        background-color="white" 
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="naoPadding mr-1" cols="3" offset="3">
                    <v-text-field 
                        v-model="dadosContato.complemento"
                        label="Complemento"
                        dense 
                        outlined 
                        background-color="white" 
                    />
                </v-col>
                <v-col class="naoPadding" cols="3">
                    <v-text-field
                        v-model="dadosContato.bairro" 
                        label="Bairro" 
                        dense 
                        outlined 
                        background-color="white" 
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="naoPadding mr-1" cols="3" offset="3">
                    <v-text-field 
                        v-model="dadosContato.cep" 
                        label="CEP" 
                        dense 
                        outlined 
                        background-color="white" 
                    />
                </v-col>
                <v-col class="naoPadding" cols="3">
                    <v-select
                        v-model="dadosContato.uf" 
                        label="UF" 
                        dense 
                        outlined
                        background-color="white" 
                        :items="pickEstados"
                        return-object
                        item-value="id"
                        item-text="uf"
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="naoPadding mr-1" cols="3" offset="3">
                    <v-select
                        v-model="dadosContato.cidade" 
                        label="Cidade" 
                        dense 
                        outlined
                        background-color="white"
                        :items="cidade"
                        return-object
                        item-value="id"
                        item-text="nome"
                    />
                </v-col>
                <v-col class="naoPadding" cols="3">
                    <v-text-field 
                        v-model="dadosContato.telefone" 
                        label="Telefone" 
                        dense 
                        outlined 
                        background-color="white" 
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="naoPadding mr-1" cols="3" offset="3">
                    <v-text-field
                        v-model="dadosContato.email" 
                        label="E-mail" 
                        dense
                        outlined 
                        background-color="white" 
                    />
                </v-col>
                <v-col class="naoPadding" cols="3">
                    <v-text-field 
                        v-model="dadosContato.email2" 
                        label="Outro e-mail" 
                        dense 
                        outlined 
                        background-color="white" 
                    />
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
export default {
    name: 'dadosContato',
    computed: {
        ...mapGetters('usuario', ['dadosContato', 'pickEstados']),
    }, 

    data() {
        return {
            cidade: [],
        }
    },

    methods: {
        async buscaCidade(id){
            const resp = await axios.get(`http://localhost:8000/api/${id}/cidades`);
            let cidadeObject = resp.data.cidades;
            this.cidade = cidadeObject.map((item) => ({
                id: item.id,
                nome: item.nome
            }))
            console.log(this.cidade)
        }
    },

    watch: {
        'dadosContato.uf'(){
            this.buscaCidade(this.dadosContato.uf.id);
        }
    }
};
</script>

<style scoped>
.naoPadding {
    padding: 0% !important;
}
.margemToolbar{
    margin-top: 15px;
}

.letra{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    text-align: center;
}

.cor{
    background-color: white;
    line-height: 40px;
}
</style>