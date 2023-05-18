<template>
    <v-sheet class="rounded-lg" dark>
        <v-list rounded="lg" style="background:#31313C" :class="$mq==='pc'? none:'text-center'">
            <v-row>
                <v-col :cols="$mq==='pc'? 3:5">
                    <v-avatar size="x-large">
                        <v-img :src="summonerIcon" style="width:80px; height:80px"></v-img>
                    </v-avatar>
                </v-col>
                <v-col v-bind="summoner" class="mx-0 px-0">
                    <v-list-item class="d-block">
                        <v-list-item-title>
                            <v-chip class="mx-2 my-2 pa-2" label :color="levelColor(summoner.level)" text-color="white">
                                Lv {{ summoner.level }}
                            </v-chip>
                            <span style="font-size:13px">{{ summoner.name }}</span>
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            <v-btn @click="matchFinder()" class="green ml-2" style="color:white; font-size:13px">
                                <v-icon>mdi mdi-refresh</v-icon> 전적 갱신하기
                            </v-btn>
                        </v-list-item-subtitle>
                    </v-list-item>
                </v-col>
            </v-row>

            <v-divider class="my-2"></v-divider>

            <v-row v-for="item in rank" :key="item.id">
                <v-col cols="5">
                    <v-avatar size="x-large">
                        <v-img :src='"@/assets/img/ranked-emblem/" + item.tier + ".png"'
                            style="width:120px; height:120px"></v-img>
                    </v-avatar>
                </v-col>
                <v-col>
                    <v-list-item class="d-block mt-6" style="font-size:14px">
                        <v-list-item-title>
                            {{ item.tier }}
                            {{ item.rank }}
                        </v-list-item-title>
                        <v-list-item-subtitle class="mt-2">
                            {{ item.leaguePoints }} LP
                        </v-list-item-subtitle>
                        <v-list-item-subtitle class="mt-2">
                            {{ item.wins }}승 {{ item.losses }}패 ({{ ((item.wins / (item.wins + item.losses)) * 100).toFixed(0)
                            }}%)
                        </v-list-item-subtitle>
                    </v-list-item>
                </v-col>
            </v-row>
        </v-list>
    </v-sheet>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        summoner() {
            return this.$store.getters.summoner
        },
        summonerIcon() {
            return "http://ddragon.leagueoflegends.com/cdn/13.10.1/img/profileicon/" + this.$store.getters.summoner.profileIconId + ".png"
        },
        rank() {
            return this.$store.getters.rank
        },
    },
    methods: {
        matchFinder() {
            if (this.$store.getters.matchData.length == 0) {
                this.$store.dispatch('findMatch', { puuid: this.$store.getters.summoner.puuid, apiKey: this.$store.getters.apiKey, sid: this.$store.getters.searchName })
            }
        },
        levelColor(level) {
            if (level < 50) {
                return '#424242'
            } else if (level < 100) {
                return '#7CB342'
            } else if (level < 150) {
                return '#00897B'
            } else if (level < 200) {
                return '#F9A825'
            } else if (level < 250) {
                return '#FF8F00'
            } else if (level < 300) {
                return '#F4511E'
            } else if (level < 350) {
                return '#303F9F'
            } else if (level < 400) {
                return '#512DA8'
            } else if (level < 450) {
                return '#0D47A1'
            } else if (level < 500) {
                return '#D81B60'
            } else {
                return '#D32F2F'
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>