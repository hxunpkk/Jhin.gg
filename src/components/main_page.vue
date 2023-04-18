<template>
    <v-container>
        <v-row class="mt-5" justify="center">
            <v-col cols="5">
                <v-img src="@/assets/logo.png"></v-img>
            </v-col>
        </v-row>
        <v-row class="mt-12" justify="center">
            <v-col cols="6" class="white rounded-pill">
                <v-row class="ml-2">
                    <v-select label="지역" :items="regions" style="width: 20%"></v-select>
                    <v-text-field label="소환사 명" style="width: 65%" name="name" v-model="searchName"></v-text-field>
                    <v-btn fab small class="mt-3" @click="fnSearchSummoner(searchName)">
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name:'MainPage',
        data(){
            return {
                regions:['korea', 'north america', 'japan', 'china', 'EU'],
                searchName:''
            }
        },
        methods:{
            fnSearchSummoner(sID){
                this.$router.push({name:'stats_page', params:{s_ID:sID}})
            }
        }
    }
</script>

<style lang="scss">
</style>