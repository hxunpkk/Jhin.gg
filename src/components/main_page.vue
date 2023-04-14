<template>
    <v-app class="grey darken-4">
        <v-container class="d-flex flex-row white rounded-pill" xs8>
            <v-flex xs3><v-select label="지역" :items="regions"></v-select></v-flex>
            <v-flex xs6><v-text-field label="소환사 명" ></v-text-field></v-flex>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        name:'MainPage',
        data(){
            return {
                regions:['korea', 'north america', 'japan', 'china', 'EU']
            }
        }
    }
</script>

<style lang="scss" scoped>
.select_class_name.v-text-field>.v-input__control>.v-input__slot:before { 
     border-style: none; 
} 
.select_class_name.v-text-field>.v-input__control>.v-input__slot:after { 
     border-style: none; 
}
</style>