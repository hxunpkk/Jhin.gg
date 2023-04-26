<template>
    <v-container style="max-width:1300px">
        <v-row>
            <v-col cols="3">
                <v-sheet class="rounded-lg" dark>
                    <v-list rounded="lg" style="background:#31313C">
                        <v-row>
                            <v-col cols="4">
                                <v-avatar class="mt-2" size="x-large">
                                    <v-img :src="summonerIcon" style="width:80px; height:80px"></v-img>
                                </v-avatar>
                            </v-col>
                            <v-col v-bind="summoner" class="mx-0 px-0">
                                <v-list-item>
                                    <v-list-item-title >
                                    {{ summoner.name }}
                                    {{ summoner.level }}
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item-subtitle>
                                    <v-btn @click="matchFinder()" class="green ml-2" style="color:white">
                                        <v-icon>mdi mdi-refresh</v-icon> 전적 갱신하기
                                    </v-btn>
                                </v-list-item-subtitle>
                            </v-col>
                        </v-row>
                        
                        <v-divider class="my-2"></v-divider>

                        <v-row v-for="item in rank" :key="item.id">
                            <v-col cols="5">
                                <v-avatar size="x-large">
                                        <v-img :src='"@/assets/img/ranked-emblem/"+item.tier+".png"' style="width:120px; height:120px"></v-img>
                                </v-avatar>
                            </v-col>
                            <v-col>
                                <v-list-item class="d-block" style="font-size:14px">
                                    <v-list-item-title>
                                        {{ item.tier }}
                                        {{ item.rank }}
                                    </v-list-item-title>
                                    <v-list-item-subtitle class="mt-2">
                                        {{ item.leaguePoints }} LP
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle class="mt-2">
                                        {{ item.wins }}승 {{ item.losses }}패({{ ((item.wins/(item.wins+item.losses))*100).toFixed(0) }}%)
                                    </v-list-item-subtitle>
                                </v-list-item>
                            </v-col>
                        </v-row>
                    </v-list>
                </v-sheet>
            </v-col>
            
            <v-col>
                <v-sheet min-height="70vh" rounded="lg" style="background:#31313C" class="mt-3">
                    <v-row v-for="item in matchData" :key="item.summonerId" class="mx-1 py-1">
                        <v-col :class=" item[0].win ? 'light-blue lighten-4':'red lighten-4'" cols="12" class="rounded">
                            <div class="d-flex flex-row align-center bg-surface-variant">
                                <div class="mr-8">
                                    <v-img :src="'https://ddragon.leagueoflegends.com/cdn/13.8.1/img/champion/'+item[0].championName+'.png'" style="width:80px; height:80px"></v-img>
                                </div>
                                <div class="mr-8 text-h6 font-weight-black" :style="{color: item[0].win ? '#2979FF' : '#FF5252'}">
                                    {{ item[0].win ? '승' : '패' }}
                                </div>
                                <div class="mr-6 text-center font-weight-medium">
                                    <div class="font-weight-bold" :style="{color: KDAColor(Number(item[0].challenges.kda.toFixed(2)))}">
                                        {{ item[0].challenges.kda.toFixed(2)}} KDA
                                    </div>
                                    <div style="font-size:14px">
                                        {{ item[0].kills }} /
                                        {{ item[0].deaths }} /
                                        {{ item[0].assists }}
                                    </div>
                                </div>
                                <div class="mr-6 text-center font-weight-medium">
                                    <div>
                                        {{ (item[0].totalMinionsKilled / Number((item[0].timePlayed/60).toFixed(2))).toFixed(1) }} CS/분
                                    </div>
                                    <div style="font-size:14px">
                                        {{ item[0].totalMinionsKilled }} CS
                                    </div>
                                </div>
                                <div class="mr-6 text-center font-weight-medium">
                                    <div>
                                        제어 와드 {{item[0].visionWardsBoughtInGame}}
                                    </div>
                                    <div style="font-size:14px">
                                        와드 제거/설치 {{ item[0].wardsKilled }} / {{ item[0].wardsPlaced }}
                                    </div>
                                </div>
                                <div class="mr-6">
                                    <div class="d-flex flex-row">
                                        <div class="rounded grey darken-4">
                                            <v-img :src="'http://ddragon.leagueoflegends.com/cdn/13.8.1/img/item/'+item[0].item0+'.png'" style="width:30px; height:30px" class="rounded"></v-img>
                                        </div>
                                        <div class="rounded grey darken-4">
                                            <v-img :src="'http://ddragon.leagueoflegends.com/cdn/13.8.1/img/item/'+item[0].item1+'.png'" style="width:30px; height:30px" class="rounded"></v-img>
                                        </div>
                                        <div class="rounded grey darken-4">
                                            <v-img :src="'http://ddragon.leagueoflegends.com/cdn/13.8.1/img/item/'+item[0].item2+'.png'" style="width:30px; height:30px" class="rounded"></v-img>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row">
                                        <div class="rounded grey darken-4">
                                            <v-img :src="'http://ddragon.leagueoflegends.com/cdn/13.8.1/img/item/'+item[0].item3+'.png'" style="width:30px; height:30px" class="rounded"></v-img>
                                        </div>
                                        <div class="rounded grey darken-4">
                                            <v-img :src="'http://ddragon.leagueoflegends.com/cdn/13.8.1/img/item/'+item[0].item4+'.png'" style="width:30px; height:30px" class="rounded"></v-img>
                                        </div>
                                        <div class="rounded grey darken-4">
                                            <v-img :src="'http://ddragon.leagueoflegends.com/cdn/13.8.1/img/item/'+item[0].item5+'.png'" style="width:30px; height:30px" class="rounded"></v-img>
                                        </div>
                                    </div>
                                </div>
                                <div class="mr-6 text-center font-weight-medium">
                                    <div>
                                        분당 피해량 {{item[0].challenges.damagePerMinute.toFixed(0)}}
                                    </div>
                                    <div style="font-size:14px">
                                        아군 피해량의 {{ (item[0].challenges.teamDamagePercentage * 100).toFixed(0) }}% 
                                    </div>
                                </div>
                                <div class="text-center font-weight-medium">
                                    <div>
                                        {{ ((item[0].timePlayed/60).toString()).split('.')[0] }}분 {{ (Number((item[0].timePlayed/60).toFixed(2).split('.')[1]) *  0.6).toFixed(0)}}초
                                    </div>
                                    <div style="font-size:14px">
                                        개인/랭크게임
                                    </div>
                                </div>
                                <!-- {{ item[0] }} -->
                            </div>
                        </v-col>
                        <v-divider class="my-2"></v-divider>
                    </v-row>
                    <v-row>
                        <v-col style="color:rgba(255, 255, 255, 0.7);" cols="12" class="text-center mt-12" v-if="showData">
                            전적 갱신 버튼을 눌러주세요!
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'statsPage',
    data() {
        return {
            sID: this.$route.params.s_ID,
        }
    },
    computed: {
        summoner() {
            return this.$store.getters.summoner
        },
        summonerIcon() {
            return "http://ddragon.leagueoflegends.com/cdn/13.7.1/img/profileicon/" + this.$store.getters.summoner.profileIconId + ".png"
        },
        rank() {
            return this.$store.getters.rank
        },
        matchData() {
            return this.$store.getters.matchData
        },
        showData(){
            return this.$store.getters.matchData.length > 0 ? false : true
        },
        
    },
    methods: {
        matchFinder() {
            if (this.$store.getters.matchData.length == 0) {
                this.$store.dispatch('findMatch', { puuid: this.$store.getters.summoner.puuid, apiKey: this.$store.getters.apiKey, sid: this.$store.getters.searchName })
            }
        },
        KDAColor(kda){
            if (kda > 15) {
                return '#FF0000'
            } else if (kda > 12) {
                return '#FF8200'
            } else if (kda > 8) {
                return '#FFA500'
            }else if (kda > 4) {
                return '#957745'
            }
            else {
                return '#505050'
            }
        }
    }

}
</script>

<style lang="scss" scoped></style>