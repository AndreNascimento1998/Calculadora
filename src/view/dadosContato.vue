<template>
    <div>
        <v-form>
            <v-row>
                <v-col class="cor letra">
                    Dados de Contato
                </v-col>
            </v-row>
            <v-row class="margemToolbar">
                <v-col class="naoPadding" cols="3" offset="3">
                    <v-text-field label="logradouro" dense outlined background-color="white" />
                </v-col>
                <v-col class="naoPadding" cols="3">
                    <v-text-field label="numero" dense outlined background-color="white" />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="naoPadding mr-1" cols="3" offset="3">
                    <v-text-field label="complemento" dense outlined background-color="white" />
                </v-col>
                <v-col class="naoPadding" cols="3">
                    <v-text-field label="bairro" dense outlined background-color="white" />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="naoPadding mr-1" cols="3" offset="3">
                    <v-text-field label="CEP" dense outlined background-color="white" />
                </v-col>
                <v-col class="naoPadding" cols="3">
                    <v-text-field label="UF" dense outlined background-color="white" />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="naoPadding mr-1" cols="3" offset="3">
                    <v-text-field label="Cidade" dense outlined background-color="white" />
                </v-col>
                <v-col class="naoPadding" cols="3">
                    <v-text-field label="Telefone" dense outlined background-color="white" />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="naoPadding mr-1" cols="3" offset="3">
                    <v-text-field label="E-mail" dense outlined background-color="white" />
                </v-col>
                <v-col class="naoPadding" cols="3">
                    <v-text-field label="Outro e-mail" dense outlined background-color="white" />
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script>
export default {
    name: 'dadosContato',

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