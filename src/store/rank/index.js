import axios from "axios"

export default {
    state:{
        rankId : [],
    },
    mutations:{
        STORE_RANK(state, ids){
            state.rankId = ids.sort(function(a,b){
                return Number(b.leaguePoints) - Number(a.leaguePoints)
            })
            console.log(state.rankId)
        }
    },
    getters:{
        rankId: state => state.rankId
    },
    actions:{
        searchRanking: ({commit}, payload) => {
            axios.get('https://kr.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key='+ payload.apiKey).then((res)=>{
                commit('STORE_RANK', res.data.entries)
            })
        }
    }
}