<template>
    <div>
        <v-form>
            <v-row>
                <v-col class="cor letra">
                    Dados Pessoais
                </v-col>
            </v-row>
            <v-row class="margemToolbar">
                <v-col class="naoPadding" cols="3" offset="3">
                    <v-text-field label="Nome" dense outlined background-color="white" />
                </v-col>
                <v-col class="naoPadding" cols="3">
                    <v-text-field label="dataNascimento" dense outlined background-color="white" />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="naoPadding mr-1" cols="3" offset="3">
                    <v-text-field label="Gênero" dense outlined background-color="white" />
                </v-col>
                <v-col class="naoPadding" cols="3">
                    <v-text-field label="Cpf" dense outlined background-color="white" />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="naoPadding mr-1" cols="3" offset="3">
                    <v-text-field label="RG" dense outlined background-color="white" />
                </v-col>
                <v-col class="naoPadding" cols="3">
                    <v-text-field label="UF Emissor" dense outlined background-color="white" />
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script>
export default {
    name: 'dadosPessoais',

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