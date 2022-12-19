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
            :disabled="disabled"
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
                default: false,
            },
            
            label:{
                type: String,
            },

            dense:{
                type: Boolean,
                default: false,
            },
            
            dark:{
                type: Boolean,
            },

            prefix:{
                type: String,
            },
            disabled:{
                type: Boolean,
                default: false,
            }
        },

        data () {
            return {
                valorFormatado:'',
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
                this.valorFormatado = this.parseBr(novoValor);
            },

            valorFormatado() {
                this.$emit('input', this.valorFormatado);
            },
        },
        
        methods:{
            parseBr(dinheiro){
                let valorTrocandoVirgula = dinheiro.replace(',', '$');
                let valorTrocandoPonto = valorTrocandoVirgula.replaceAll('.', ',');
                let valorFormatado = valorTrocandoPonto.replace('$', '.');
                return valorFormatado;
            }
        },

        directives: {money: VMoney}
    }
</script>

<style scoped>

</style>