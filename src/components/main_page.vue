<template>
    <v-container>
        <v-row class="mt-5" justify="center">
            <v-col cols="5">
                <v-img src="@/assets/logo.png"></v-img>
            </v-col>
        </v-row>
        <v-row class="mt-0" justify="center">
            <v-form class="rounded-lg d-flex flex-row align-center" @submit.prevent="fnSearchSummoner(searchName)"
                style="width:60%">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field label="소환사 검색" name="name" v-model="searchName" append-icon="mdi-magnify"
                            @click:append="fnSearchSummoner(searchName)" outlined dark v-bind="attrs"
                            v-on="on"></v-text-field>
                    </template>
                    <span>검색하고 싶은 소환사 명을 작성하세요!</span>
                </v-tooltip>
            </v-form>
        </v-row>
        <v-row class="my-12" justify="center">
            <video src="@/assets/awaken.mp4" autoplay muted loop width="1300px" height="300px"
                style="object-fit: cover" v-if="$mq==='pc'? true:false"></video>
            <v-img :src='"@/assets/img/banner.png"' width="1300px" height="200px" style="object-fit: cover" v-if="$mq==='pc'? false:true"></v-img>
        </v-row>
        <v-row justify="center">
            <v-col :cols="$mq==='pc'? 4:12" class="mr-0">
                <v-sheet class="mx-auto text-center rounded-lg py-12 elevation-1" style="background:#31313C" dark >
                    <h3>금주의 무료 로테이션 챔피언</h3>
                    <v-slide-group v-model="model" class="pa-4" active-class="success" show-arrows>
                        <v-slide-item v-for="(item, index) in champ" :key="index">
                            <v-img
                            :src="'https://ddragon.leagueoflegends.com/cdn/13.8.1/img/champion/' + item + '.png'" class="text-left align-end"><span class="champName font-weight-bold px-1" >{{ item }}</span></v-img>
                        </v-slide-item>
                    </v-slide-group>
                </v-sheet>
            </v-col>
            <v-col :cols="$mq==='pc'? 4:12">
                <v-sheet class="mx-auto text-center rounded-lg py-12 elevation-1 px-4" style="background:#31313C" justify="center">
                    <patch-note></patch-note>
                    <patch-table></patch-table>
                </v-sheet>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import patchNote from '@/components/patch_note.vue'
import patchTable from '@/components/patch_table.vue'
export default {
    name: 'MainPage',
    data() {
        return {
            searchName: ''
        }
    },
    components:{
        'patch-note': patchNote,
        'patch-table': patchTable
    },
    methods: {
        fnSearchSummoner(sID) {
            this.$store.dispatch('matchReset')
            this.$store.commit('SEARCH_SUMMONER', sID)
            this.$store.dispatch('searchUser', { searchName: this.$store.getters.searchName, apiKey: this.$store.getters.apiKey })
            this.$router.push({ name: 'stats_page', params: { s_ID: sID } })
        },

    },
    computed: {
        champ() {
            if (this.$store.getters.champId == 0) {
                this.$store.dispatch('searchRotation', { apiKey: this.$store.getters.apiKey })
            }
            return this.$store.getters.champId
        }
    }
}
</script>
    
<style lang="scss">
    .champName{
        border: 3px solid #000;
        background-color: white;
        color: #000;
    }
</style>