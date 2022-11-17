<template>
    <div>
        <v-text-field
            type="text" 
            v-model.lazy="valorDinheiro"
            v-money="money"
            :outlined="outlined"
            :label='label'
            :dense="dense"
            :dark="dark"
            :prefix="prefix"
        />
    </div>
</template>

<script>
    import {VMoney} from 'v-money'
    export default {
        name: 'InputMoney',

        props:{
            outlined:{
                type: Boolean,
            },
            
            label:{
                type: String,
            },

            dense:{
                type: Boolean,
            },
            
            dark:{
                type: Boolean,
            },

            prefix:{
                type: String,
            }
        },

        data () {
            return {
                formatado:'',
                valorDinheiro: '',
                money: {
                decimal: ',',
                thousands: '.',
                suffix: '',
                precision: 2,
                masked: false /* doesn't work with directive */
                },
            };
        },

        watch:{
            valorDinheiro(novoValor){
                this.formatado = this.parseBr(novoValor);
            }
        },
        
        methods:{
            parseBr(dinheiro){
                debugger;
                let valor = dinheiro.replace(',', '.');
                return valor
            }
        },

        directives: {money: VMoney}
    }
</script>

<style scoped>

</style>