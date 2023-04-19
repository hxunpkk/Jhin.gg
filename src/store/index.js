import router from '@/router'
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        searchName:'',
        summoner:[],
        apiKey:'RGAPI-4734ef0e-589e-4540-94fb-7eed819bb55a',
        rank:[],
        matchID:[]
    },
    mutations:{
        SEARCH_SUMMONER(state, id){
            state.searchName = id
        },
        SET_SUMMONER(state, stats){
            state.summoner = stats
        },
        SET_RANK(state, stats){
            state.rank = stats.data.filter(item=>item['queueType'] == "RANKED_SOLO_5x5")
        },
        SET_MATCH(state, matches){
            state.matchID = matches.data
            console.log(state.matchID)
        }
    },
    getters:{
        apiKey: state => state.apiKey,
        searchName: state => state.searchName,
        summoner: state => state.summoner,
        rank: state => state.rank,
        matchID: state => state.matchID
    },
    actions:{
        searchUser:({commit}, payload) => {
            axios.get('https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+payload.searchName+'?api_key='+payload.apiKey).then((res)=>{
                commit('SET_SUMMONER', res)
                axios.get('https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/'+res.data.id+'?api_key='+payload.apiKey)
                .then((result)=>{
                    commit('SET_RANK', result)
                })
            }).catch(error => {
                console.log(error)
                router.go('-1')
                alert('아이디를 다시 확인하세요!')
                
            })
        },
        findMatch:({commit}, payload) => {
            axios.get('https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/'+payload.puuid+'/ids?type=ranked&start=0&count=10&api_key='+payload.apiKey).then((res)=>{
                commit('SET_MATCH', res)
            })
        }
    }
})