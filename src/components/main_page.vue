<template>
    <v-container>
        <v-row class="mt-5" justify="center">
            <v-col cols="5">
                <v-img src="@/assets/logo.png"></v-img>
            </v-col>
        </v-row>
        <v-row class="mt-0" justify="center">
            <v-form class="rounded-lg d-flex flex-row align-center" @submit.prevent="fnSearchSummoner(searchName)" style="width:60%">
                <v-text-field label="소환사 검색" name="name" v-model="searchName" append-icon="mdi-magnify" @click:append="fnSearchSummoner(searchName)" outlined dark></v-text-field>
            </v-form>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name:'MainPage',
        data(){
            return {
                searchName:''
            }
        },
        methods:{
            fnSearchSummoner(sID){
                this.$store.dispatch('matchReset')
                this.$store.commit('SEARCH_SUMMONER', sID)
                this.$store.dispatch('searchUser', {searchName:this.$store.getters.searchName, apiKey:this.$store.getters.apiKey})
                this.$router.push({name:'stats_page', params:{s_ID:sID}})
            }
        }
    }
</script>

<style lang="scss">
</style>