import axios from "axios"
import champions from "@/assets/champion.json"

export default {
    state:{
        champId : [],
    },
    mutations:{
        SEARCH_CHAMP(state, ids){
            for(let j = 0; j < ids.length; j++){
                for (let i = 0; i < Object.keys(champions.data).length; i++ ) {
                    if (champions.data[Object.keys(champions.data)[i]].key == ids[j]) {
                        state.champId.push(champions.data[Object.keys(champions.data)[i]].id);
                    }
                  }
            }
            console.log(state.champId)
        }
    },
    getters:{
        champId: state => state.champId
    },
    actions:{
        searchRotation: ({commit}, payload) => {
            axios.get('https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key='+ payload.apiKey).then((res)=>{
                commit('SEARCH_CHAMP', res.data.freeChampionIds)
            })
        }
    }
}