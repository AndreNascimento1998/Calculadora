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
        component: () => import(/* webpackChunkName: "cadastro" */ '@/view/cadastroNovo'),
    },
    {
        path:'/inicio/:id',
        name: 'inicio',
        component: () => import(/* webpackChunkName: "inicio" */ '@/components/PaginaInicial'),
    },
    {
        path:'/edit/:id',
        name:'edit',
        component: () => import(/* webpackChunkName: "edit" */ '@/view/cadastroNovo'),
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;