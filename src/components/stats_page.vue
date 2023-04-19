<template>
    <v-container>
        <v-row v-for="item in summoner" :key="item.id">
            <v-col style="color: white">
                {{ item.summonerLevel }}
                {{ item.name }}
                {{ item.id }}
            </v-col>
        </v-row>
        <v-img :src="summonerIcon"></v-img>
    </v-container>
</template>

<script>
    export default {
        name:'statsPage',
        data(){
            return {
                sID: this.$route.params.s_ID,
            }
        },
        computed:{
            summoner(){
                return this.$store.getters.summoner
            },
            summonerIcon(){
                return "http://ddragon.leagueoflegends.com/cdn/13.7.1/img/profileicon/"+this.$store.getters.summoner.data.profileIconId+".png"
            } 
        }
        
    }
</script>

<style lang="scss" scoped>

</style>