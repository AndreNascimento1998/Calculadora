import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '@/login/loginPrimary'),
    },

    {
        path: '/calculadora',
        name: 'calculadora',
        component: () => import(/* webpackChunkName: "calculadora" */ '@/components/CalculadoraMonetaria'),
    },

    {
        path:'/cadastro',
        name: 'cadastro',
        component: () => import(/* webpackChunkName: "cadastro") */ '@/login/cadastroNovo'),
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;