<template>
    <div>
        <v-img 
            src="@/assets/cadastro/cadastro.webp"
            height="627"
        >
            <v-row>
                <v-col class="mt-16 letra">
                    <span>Atualizador Monetário</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-form>
                        <v-row class="mt-10">
                            <v-col cols="2" offset="4">
                                <v-text-field label="Telefone" outlined dense background-color="white" color="black"/>
                            </v-col>
                            <v-col cols="2">
                                <v-text-field 
                                    label="Telefone Alternativo"
                                    outlined 
                                    dense 
                                    background-color="white" 
                                    color="black"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="2" offset="4">
                                <v-text-field label="Estado" outlined dense background-color="white" color="black"/>
                            </v-col>
                            <v-col cols="2">
                                <v-text-field label="Cidade" outlined dense background-color="white" color="black"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4" offset="4">
                                <v-text-field label="Nome" outlined dense background-color="white" color="black"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4" offset="4">
                                <v-text-field label="E-mail" outlined dense background-color="white" color="black"/>
                            </v-col>
                        </v-row>
                        <v-col cols="4" offset="4">
                            <v-btn color="secondary" block>Cadastrar</v-btn>
                        </v-col>
                    </v-form>
                </v-col>
            </v-row>
        </v-img>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.teste{
    background-color: black;
}
.letra{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
}


</style>