<template>
    <v-container>
        <v-row class="justify-center white--text">
            <v-col cols="12" xl="8" class="rounded-lg py-12" :class="$mq==='mobile'? 'px-0':'px-12'" style="background:#31313C">
                <v-row>
                    <v-col>
                        <p class="text-h5 font-weight-bold">랭킹</p>
                        <p class="grey--text font-weight-medium">소환사의 협곡 개인/솔로 랭크에서 챌린저 티어를 달성한 300명의 순위를 알려줍니다.</p>
                        <v-divider dark></v-divider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">                    
                        <v-data-table dark class="elevation-5 mb-10" :class="$mq==='mobile'? 'mx-0':'mx-4'" :sort-by="['index']" :sort-desc="[false]" :headers="headers" :items="ranking" :loading="loading" loading-text="text" :page.sync="page" :items-per-page="itemsPerPage" hide-default-footer @page-count="pageCount = $event" @click:row="fnSearchSummoner" mobile-breakpoint="0"></v-data-table>
                    </v-col>
                    <v-col cols="12">
                            <v-pagination v-model="page" :length="pageCount" :total-visible="totalVisible" next-icon="mdi-menu-right" prev-icon="mdi-menu-left"></v-pagination>
                    </v-col>
                    <!-- <v-col v-for="(item, index) in ranking" :key="index" cols="12">
                        {{ item }}
                    </v-col> -->
                </v-row>
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script>
    export default {
        data(){
            return {
                headers:[
                    { text:'순위', width:'10%', value:'index', sortable:false, align:'center' },
                    { text:'소환사 명', width:'auto', value:'summonerName', sortable:false, align:'center' },
                    { text:'LP', width:'10%', value:'leaguePoints', sortable:false, align:'center' },
                    { text:'승', width:'10%', value:'wins', sortable:false, align:'center' },
                    { text:'패', width:'10%', value:'losses', sortable:false, align:'center' }
                ],
                text:'',
                page: 1,
                pageCount:0,
                itemsPerPage:100,
                totalVisible:3,
                loading:false,
                showWriteBtn:false
            }
        },
        methods: {
            fnSearchSummoner(item) {
                this.$store.dispatch('matchReset')
                this.$store.commit('SEARCH_SUMMONER', item.summonerName)
                this.$store.dispatch('searchUser', { searchName: this.$store.getters.searchName, apiKey: this.$store.getters.apiKey })
                this.$router.push({ name: 'stats_page', params: { s_ID: item.summonerName } })
            },
        },
        computed: {
            ranking() {
                if (this.$store.getters.rankId == 0) {
                    this.$store.dispatch('searchRanking', { apiKey: this.$store.getters.apiKey })
                }
                return this.$store.getters.rankId.map((item, index)=> ({...item,  index:index+1}))
            }
    }
    }
</script>

<style lang="scss" scoped>

</style>