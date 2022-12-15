import axios from "axios";

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
    },

    api : {
        uf: [],
        cidades: '',
    },
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

    pickEstados(state) {
        return state.api.uf;
    }

};

const mutations = {
    atualizaUfs(state, dadosEstados){
        const resp = dadosEstados.data.estados;
        state.api.uf = resp.map((item) => ({
            id: item.id,
            uf: item.uf
        }));
    },
};

const actions = {
    async pegaEstados({commit}){
        let resp = await axios.get('http://localhost:8000/api/estado');
        commit('atualizaUfs', resp);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions

}