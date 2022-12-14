<template>
    <div>
        <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
            :dark="dark"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="formata"
                    :label="label"
                    prepend-icon="mdi-calendar"
                    readonly
                    :outlined="outlined"
                    :dense="dense"
                    v-bind="attrs"
                    v-on="on"
                    :background-color="background"
                />
            </template>
            <v-date-picker 
                v-model="date" 
                @input="menu2=false" 
                type="month"
            />
        </v-menu>
    </div>
</template>

<script>
export default {
    name: 'InputDate',

    //Data atual = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)

    data: () => ({
        date: '',
        menu: false,
        modal: false,
        menu2: false,
        formata: '',
    }),

    props: {
        dark: {
            type: Boolean,
        },

        label: {
            type: String,
            default: '',
        },
        dense:{
            type: Boolean,
            default: false,
        },
        outlined:{
            type: Boolean,
            default: false,
        },
        background: {
            type: String,
            default: '',
        }
    },

    watch: {
        date(novo) {
            this.formata = this.parseBr(novo);
        },

        formata() {
            this.$emit('input', this.formata);
        },
    },

    methods: {
        parseBr(dataNova) {
            let [ano, mes] = dataNova.split('-');
            return `${mes}/${ano}`;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>