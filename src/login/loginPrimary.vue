<template>
    <v-row class="text-center">
        <v-img 
            src="@/assets/login/login.jpg" 
            height="628" 
            width="1500"
        > 
            
            <v-row class="mt-8">
                <v-col cols="4" class="mt-16" offset="4">
                    <v-card>
                        <v-card-title>Atualização Monetária</v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col>
                                    <p>Trazendo as atualizações monetárias atuais.</p>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="8">
                                    <v-text-field label="email" outlined dense />
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-img>
    </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
.teste{
    background-color: black;
}
</style>