<template>
    <div>
        <v-form>
            <v-row>
                <v-col class="cor letra">
                    Dados Pessoais
                </v-col>
            </v-row>
            <v-row class="margemToolbar">
                <v-col class="naoPadding mr-1" cols="3" offset="3">
                    <v-text-field 
                        v-model="dadosPessoais.nome" 
                        label="Nome" 
                        dense 
                        outlined 
                        background-color="white" 
                    />
                </v-col>
                <v-col class="naoPadding" cols="3">
                    <input-date 
                        v-model="dadosPessoais.dataNascimento" 
                        label="Data Nascimento" 
                        dense 
                        outlined 
                        background="white" 
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="naoPadding mr-1" cols="3" offset="3">
                    <v-text-field 
                        v-model="dadosPessoais.genero" 
                        label="Gênero" 
                        dense 
                        outlined 
                        background-color="white" 
                    />
                </v-col>
                <v-col class="naoPadding" cols="3">
                    <v-text-field 
                        v-model="dadosPessoais.cpf" 
                        label="Cpf" 
                        dense 
                        outlined 
                        background-color="white" 
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="naoPadding mr-1" cols="3" offset="3">
                    <v-text-field 
                        v-model="dadosPessoais.rg" 
                        label="RG" 
                        dense 
                        outlined 
                        background-color="white" 
                    />
                </v-col>
                <v-col class="naoPadding" cols="3">
                    <v-select
                        v-model="dadosPessoais.ufEmissor" 
                        label="UF Emissor" 
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
        </v-form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import InputDate from '@/shared/inputDate.vue'
export default {
    name: 'dadosPessoais',
    components: {
        InputDate,
    },
    computed: {
        ...mapGetters('usuario', ['dadosPessoais', 'pickEstados']),
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