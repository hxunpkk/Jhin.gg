import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        searchName:'',
        summoner:[],
        apiKey:'RGAPI-d560c838-ca38-46b3-b0a9-955acacc709d'
    },
    mutations:{
        SEARCH_SUMMONER(state, id){
            state.searchName = id
        },
        SET_SUMMONER(state, stats){
            state.summoner = stats
            console.log(stats)
        }
    },
    getters:{
        apiKey: state => state.apiKey,
        searchName: state => state.searchName
    },
    actions:{
        searchUser:({commit}) => {
            axios.get('https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+this.$store.getters.searchName+'?api_key='+this.$store.getters.apiKey).then((res)=>{
                commit('SET_SUMMONER', res)
            })
        }
    }
})