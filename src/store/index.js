import router from '@/router'
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import modLogin from '@/store/login'
import modCommon from '@/store/common'
import modRotation from '@/store/rotation'
import modRanking from '@/store/rank'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        login : modLogin,
        common : modCommon,
        rotation : modRotation,
        ranking : modRanking
    },
    state: {
        searchName: '',
        summoner: [],
        apiKey: '',
        rank: [],
        matchID: [],
        matchData: []
    },
    mutations: {
        SEARCH_SUMMONER(state, id) {
            state.searchName = id
        },
        SET_SUMMONER(state, stats) {
            state.summoner = { id:stats.data.id, level:stats.data.summonerLevel, puuid:stats.data.puuid, profileIconId:stats.data.profileIconId, name: stats.data.name }
        },
        SET_RANK(state, stats) {
            state.rank = stats.data.filter(item => item['queueType'] == "RANKED_SOLO_5x5")
        },
        SET_MATCH(state, matches) {
            state.matchID = matches.data
        },
        SET_DATA(state, datas) {
            state.matchData.push(datas.filter(item => item['summonerName'].toUpperCase() == state.searchName.toUpperCase()))
        },
        RESET_DATA(state, reset) {
            state.matchData = reset
        }
    },
    getters: {
        apiKey: state => state.apiKey,
        searchName: state => state.searchName,
        summoner: state => state.summoner,
        rank: state => state.rank,
        matchID: state => state.matchID,
        matchData: state => state.matchData
    },
    actions: {
        searchUser: ({ commit }, payload) => {
            axios.get('https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + payload.searchName + '?api_key=' + payload.apiKey).then((res) => {
                commit('SET_SUMMONER', res)
                axios.get('https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/' + res.data.id + '?api_key=' + payload.apiKey)
                    .then((result) => {
                        commit('SET_RANK', result)
                    })
            }).catch(error => {
                console.log(error)
                router.go('-1')
                alert('아이디를 다시 확인하세요!')

            })
        },
        matchReset: ({ commit }) => {
            commit('RESET_DATA', [])
        },
        findMatch: ({ commit }, payload) => {
            axios.get('https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/' + payload.puuid + '/ids?type=ranked&start=0&count=10&api_key=' + payload.apiKey).then((res) => {
                commit('SET_MATCH', res)
                for (let item of res.data) {
                    axios.get('https://asia.api.riotgames.com/lol/match/v5/matches/' + item + '?api_key=' + payload.apiKey).then((result) => {
                        commit('SET_DATA', result.data.info.participants)
                    })
                }
            })
        }
    },
})