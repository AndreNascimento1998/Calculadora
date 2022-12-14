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
                    <v-text-field 
                        v-model="dadosContato.uf" 
                        label="UF" 
                        dense 
                        outlined 
                        background-color="white" 
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="naoPadding mr-1" cols="3" offset="3">
                    <v-text-field
                        v-model="dadosContato.cidade" 
                        label="Cidade" 
                        dense 
                        outlined
                        background-color="white"
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
export default {
    name: 'dadosContato',
    computed: {
        ...mapGetters('usuario', ['dadosContato']),
    }, 

    data() {
        return {};
    },
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