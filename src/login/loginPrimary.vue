<template>
    <v-row class="text-center">
        <v-img src="@/assets/login/login.jpg" height="640" width="1500">
            <v-toolbar :dark="tema"  :color="temaLight">
                <v-row>
                    <v-col cols="1" class="mt-2">
                        <v-menu>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn icon v-bind="attrs" v-on="on">
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item @click="() => {}">
                                    <v-list-item-title @click="escolhaTema('b')">Tema Claro</v-list-item-title>
                                </v-list-item>

                                <v-list-item @click="() => {}">
                                    <v-list-item-title @click="escolhaTema('p')">Tema Escuro</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                    <v-col class="mt-2 margemTitulo">
                        <h1>Login</h1>
                    </v-col>
                </v-row>
            </v-toolbar>
            <v-row class="mt-3">
                <v-col cols="4" class="mt-10" offset="4">
                    <v-card :dark="tema" :color="temaLight">
                        <v-card-title class="ml-16 magemCardTitle">Atualização Monetária</v-card-title>
                        <hr/>
                        <v-card-text>
                            <v-row>
                                <v-col class="mt-2">
                                    <p>Trazendo as atualizações monetárias atuais.</p>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8" class="mt-6" offset="2">
                                    <v-text-field
                                        v-model="email"
                                        append-icon="mdi-checkbox-marked-circle"
                                        label="E-mail"
                                        outlined
                                        dense
                                    />
                                    <v-text-field
                                        v-model="senha"
                                        :rules="[rules.min]"
                                        counter
                                        :append-icon="mostrarSenha ? 'mdi-eye' : 'mdi-eye-off'"
                                        label="Senha"
                                        outlined
                                        dense
                                        :type="mostrarSenha ? senha : 'password'"
                                        @click:append = "mostrarSenha = !mostrarSenha"
                                    />
                                </v-col>
                                <v-col cols="8" offset="2">
                                    <v-btn @click="passarPagina()" class="mr-2" color="primary">Entrar</v-btn>
                                </v-col>
                                <v-col to="#" class="mt-2">
                                    <hr/>
                                    <v-btn text>Esqueceu a senha?</v-btn>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                    <v-row>
                        <v-col>
                            <v-btn to="/cadastro" class="mt-5" text dark>Cadastrar-se</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-img>
    </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {

    computed: {
        ...mapGetters('usuario', ['emailSenha'])
    },

    data() {
        return {
            tema: false,
            temaLight: '#aee7eb',
            mostrarSenha: false,
            email: '',
            senha: '',
            rules: {
                min: v => v.length >= 8 || 'Mínimo 8 caracteres',
            },
            validacao : [
                {id : 1, email: 'andre@hotmail.com', senha: '12345677'},
                {id: 2, email: 'Admin', senha: '12345678'},
                {id: 3, email: 'zeca@gmail.com',senha: '123456123'},
                {id: 4, email: 'juka@google.com', senha: '789789789'},
                {id: 5, email: 'salsa.@hotmail.com', senha: '123789456'}
            ],
            rota: '',
        };
    },

    methods: {
        ...mapActions('usuario', ['pegaUser']),

        escolhaTema(theme) {
            if (theme === 'b') {
                this.tema = false;
                this.temaLight = '#aee7eb'
            } else if (theme === 'p') {
                this.tema = true;
                this.temaLight = false;
            }
        },

        passarPagina(){
            debugger;
            let resp = this.emailSenha.filter((result) => result.email == this.email);
            if(this.senha.length >= 8 && resp[0]){
                if(this.email == resp[0].email && this.senha == resp[0].senha){
                    this.$router.push('/calculadora');
                }else {
                    alert('Senha ou email incorretos !');
                }
            }else {
                alert('Senha ou email incorretos !');
            }
        },
    },

    async mounted(){
        await this.pegaUser();
    },
};
</script>

<style scoped>
.teste {
    background-color: black !important;
}

.pagina {
    overflow: none;
}

.margemTitulo{
    margin-right: 130px;
}

.magemCardTitle{
    margin-left: 100px !important;
}

.temaLight{
    background-color: #b3d3d5;
}
</style>