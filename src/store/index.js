import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        searchName:'',
        summoner:[],
        apiKey:'RGAPI-4734ef0e-589e-4540-94fb-7eed819bb55a',
        rank:[]
    },
    mutations:{
        SEARCH_SUMMONER(state, id){
            state.searchName = id
        },
        SET_SUMMONER(state, stats){
            state.summoner = stats
        },
        SET_RANK(state, stats){
            state.rank = stats
            console.log(state.rank)
        }
    },
    getters:{
        apiKey: state => state.apiKey,
        searchName: state => state.searchName,
        summoner: state => state.summoner,
        rank: state => state.rank
    },
    actions:{
        searchUser:({commit}, payload) => {
            axios.get('https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+payload.searchName+'?api_key='+payload.apiKey).then((res)=>{
                commit('SET_SUMMONER', res)
                axios.get('https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/'+res.data.id+'?api_key='+payload.apiKey)
                .then((result)=>{
                    commit('SET_RANK', result)
                })
            })
        }
    }
})