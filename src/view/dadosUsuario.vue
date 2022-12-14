<template>
    <div>
        <v-form>
            <v-row>
                <v-col class="cor letra">
                    Dados do Usuário
                </v-col>
            </v-row>
            <v-row class="margemToolbar">
                <v-col class="naoPadding mr-1" cols="2" offset="5">
                    <v-text-field 
                        v-model="dadosUsuario.email" 
                        label="Usuario" 
                        dense 
                        outlined 
                        background-color="white" 
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="naoPadding mr-1" cols="3" offset="3">
                    <v-text-field
                        v-model="dadosUsuario.senha"
                        label="Senha"
                        dense 
                        outlined 
                        background-color="white" 
                    />
                </v-col>
                <v-col class="naoPadding" cols="3">
                    <v-text-field 
                        v-model="dadosUsuario.outraSenha"
                        label="Confirmação de Senha" 
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
    name: 'dadosUsuario',

    computed: {
        ...mapGetters('usuario', ['dadosUsuario']),
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