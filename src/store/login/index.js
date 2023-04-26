import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import router from '@/router'

export default {
    state:{
        oUser:null,
    },
    mutations:{
        fnSetUser(state, payload){
            state.oUser = payload
        },
    },
    getters:{
        fnGetUser: state => state.oUser,
        fnGetAuthStatus: state => state.oUser !== null,
        
    },
    actions:{
        fnDoGoogleLogin_Popup({commit}){
            commit('fnSetLoading', true)
            var oProvider = new firebase.auth.GoogleAuthProvider()
            oProvider.addScope('profile')
            oProvider.addScope('email')
            firebase.auth().signInWithPopup(oProvider)
            .then( pUserInfo => {
                commit('fnSetUser', {
                    id : pUserInfo.user.id,
                    name : pUserInfo.user.displayName,
                    email : pUserInfo.user.email,
                    photoURL : pUserInfo.user.photoURL
                })
                commit('fnSetLoading', false)
                commit('fnSetErrorMessage', '')
                router.push('/')
            })
            .catch(err=>{
                commit('fnSetErrorMessage', err.message)
                commit('fnSetLoading', false)
            })
        },

        fnDoLoginAuto({commit}, pUserInfo) {
            commit('fnSetUser', {
            id: pUserInfo.uid,
            name: pUserInfo.displayName,
            email: pUserInfo.email,
            photoURL: pUserInfo.photoURL
            })
            commit('fnSetLoading', false)
            commit('fnSetErrorMessage', '') 
        },


        fnRegisterUser({commit}, payload){
            commit('fnSetLoading', true)
            firebase.auth().createUserWithEmailAndPassword(payload.pEmail,
                payload.pPassword)
            .then(pUserInfo=>{
                commit('fnSetUser', {
                    email: pUserInfo.user.email
                })
                commit('fnSetLoading', false)
                commit('fnSetErrorMessage', '')
                router.push('/')
            })
            .catch(err=>{
                switch (err.code) {
                    case 'auth/weak-password':
                      err.message = '비밀번호는 6자리 이상이어야 합니다'; break;
                    case 'auth/invalid-email':
                      err.message = '잘못된 이메일 주소입니다'; break;
                    case 'auth/email-already-in-use':
                      err.message = '이미 가입되어 있는 계정입니다'; break;
                  }
                commit('fnSetErrorMessage', err.message)
                commit('fnSetLoading', false)
            })
        },

        fnDoLogin({commit}, payload) {
            commit('fnSetLoading', true)
            firebase.auth().signInWithEmailAndPassword(payload.pEmail,
                payload.pPassword)
            .then(pUserInfo => {
                commit('fnSetUser', {
                id: pUserInfo.user.uid,         
                name: pUserInfo.user.displayName, 
                email: pUserInfo.user.email,    
                photoURL: pUserInfo.user.photoURL 
                })
                commit('fnSetLoading', false) 
                commit('fnSetErrorMessage', '') 
                router.push('/') 
            })
            .catch(err => {
                switch (err.code) {
                    case 'auth/user-not-found':
                      err.message = '회원이 아닙니다. 회원가입을 해주세요.';
                      break;
                    case 'auth/wrong-password':
                      err.message = '비밀번호가 맞지 않습니다.';
                      break;
                }
                commit('fnSetErrorMessage', err.message)
                commit('fnSetLoading', false)
            })
        },
        

        fnDoLogout({commit}) {
            firebase.auth().signOut()
            commit('fnSetUser', null) 
            router.push('/') 
        }
    },
}