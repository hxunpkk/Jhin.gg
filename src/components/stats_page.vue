<template>
    <v-container>
        <v-row v-for="item in summoner" :key="item.id">
            <v-col style="color: white">
                {{ item.summonerLevel }}
                {{ item.name }}
            </v-col>
        </v-row>
        <v-img :src="summonerIcon" style="width:100px; height:100px"></v-img>
        <v-row v-for="item in rank" :key="item.id">
            <v-col style="color: white">
                {{ item.tier }}
                {{ item.rank }}
                {{ item.leaguePoints }}
                {{ item.wins }}
                {{ item.losses }}
            </v-col>
        </v-row>
        <v-btn @click="matchFinder()">전적 갱신하기</v-btn>
        <v-row v-for="item in matchData" :key="item.summonerId">
            <v-col style="color: white">
                {{ item[0].kills }} /
                {{ item[0].deaths }} /
                {{ item[0].assists }}
                {{ item[0].win? '승':'패' }}
            </v-col>
        </v-row>
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
            },
            rank(){
                return this.$store.getters.rank
            },
            matchData(){
                return this.$store.getters.matchData
            } 
        },
        methods:{
            matchFinder(){
                if(this.$store.getters.matchData.length == 0){
                    this.$store.dispatch('findMatch', {puuid:this.$store.getters.summoner.data.puuid, apiKey:this.$store.getters.apiKey, sid:this.$store.getters.searchName})
                }
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>