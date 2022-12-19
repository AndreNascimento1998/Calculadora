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
        user: [],
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
    },

    emailSenha(state) {
        const resp = state.api.user;
        return state.api.uf = resp.map((item) => ({
            email: item.email,
            senha: item.senha,
        }))
    },

};

const mutations = {
    atualizaUfs(state, dadosEstados){
        const resp = dadosEstados.data.estados;
        state.api.uf = resp.map((item) => ({
            id: item.id,
            uf: item.uf
        }));
    },

    reset( state ) {
        state.dadosContato.logradouro = '',
        state.dadosContato.numero = '',
        state.dadosContato.complemento = '',
        state.dadosContato.bairro = '',
        state.dadosContato.cep = '',
        state.dadosContato.uf = '',
        state.dadosContato.cidade = '',
        state.dadosContato.telefone = '',
        state.dadosContato.email = '',
        state.dadosContato.email2 = '',

        state.dadosPessoais.nome = '',
        state.dadosPessoais.dataNascimento = '',
        state.dadosPessoais.genero = '',
        state.dadosPessoais.cpf = '',
        state.dadosPessoais.rg = '',
        state.dadosPessoais.ufEmissor = '',

        state.dadosUsuario.email = '',
        state.dadosUsuario.senha = '',
        state.dadosUsuario.outraSenha = ''
    }
};

const actions = {
    async pegaEstados({commit}){
        let resp = await axios.get('http://localhost:8000/api/estado');
        commit('atualizaUfs', resp);
    },

    async saveUser( {state }){
        const payload = {
            pessoa: {
                nome: state.dadosPessoais.nome,
                dataNascimento: state.dadosPessoais.dataNascimento,
                genero: state.dadosPessoais.genero,
                cpf: state.dadosPessoais.cpf,
                rg: state.dadosPessoais.rg,
                ufEmissor: state.dadosPessoais.ufEmissor.id,
            },

            contato: {
                logradouro: state.dadosContato.logradouro,
                numero: state.dadosContato.numero,
                complemento: state.dadosContato.complemento,
                bairro: state.dadosContato.bairro,
                cep: state.dadosContato.cep,
                uf: state.dadosContato.uf.id,
                cidade: state.dadosContato.cidade.id,
                telefone: state.dadosContato.telefone,
                email: state.dadosContato.email,
                email2: state.dadosContato.email2,
            },

            usuario: {
                usuario: state.dadosUsuario.email,
                senha: state.dadosUsuario.senha,
            },

        };
        return await axios.post('http://localhost:8000/api/usuario', payload);
    },

    async pegaUser({state}){
        debugger
        const resp = await axios.get('http://localhost:8000/api/usuario');
        state.api.user = resp.data.usuarios;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}