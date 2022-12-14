let state = () => ({
    dadosContato : {
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cep: '',
        uf: '',
        cidade: '',
        telefone: '',
        email: '',
        email2: '',
    },

    dadosPessoais : {
        nome: '',
        dataNascimento: '',
        genero: '',
        cpf: '',
        rg: '',
        ufEmissor: '',
    },

    dadosUsuario : {
        email: '',
        senha: '',
        outraSenha: '',
    }
});

const getters = {
    dadosUsuario(state) {
        return state.dadosUsuario;
    },

    dadosPessoais(state) {
        return state.dadosPessoais;
    },

    dadosContato(state) {
        return state.dadosContato;
    },
};

const mutations = {

};

const mapActions = {

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    mapActions

}