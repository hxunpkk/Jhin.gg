<template>
    <v-row justify="center" class="mt-12">
    <v-col
      cols="8"
      sm="6"
      md="4"
    >
      <v-card ref="form" elevation="10">
        <v-row justify="center">
            <v-col cols="10">
                <v-card-title class="text-center">
                    <v-row><v-col><h2>JHIN.GG</h2></v-col></v-row>
                </v-card-title>
            <v-card-text class="px-0">
                간편 로그인
            </v-card-text>
            <v-btn @click="fnDoGoogleLogin_Popup" block color="red" large dark>
                <v-icon left color="white">mdi-google</v-icon>
                구글로 로그인
            </v-btn>
            <div class="login__or">
                OR
            </div>
            <v-card-text class="px-0">
                이메일 로그인
            </v-card-text>
            <form @submit.prevent="fnDoLogin">
                    <v-text-field v-model="sEmail" name="Email" label="이메일" type="email" required></v-text-field>
                    <v-text-field v-model="sPassword" name="Password" label="비밀번호" type="password" required ref="passnum"></v-text-field>
                    <v-btn v-if="!fnGetLoading" type="submit" class="blue accent-2 my-4" dark large style="width:100%">로그인</v-btn>
                    <div class="text-center" v-if="fnGetLoading">
                      <v-progress-circular indeterminate :width="7" :size="70" color="grey lighten-1"></v-progress-circular>
                    </div>
                    <v-alert class="mt-3" type="error" dismissible v-model="bAlert">
                        {{ fnGetErrMsg  }}
                    </v-alert>
            </form>
            <v-card-text class="text-center">
                JHIN.GG에 처음이세요? <a @click="$router.push('/join')" class="ml-4 pointer">회원가입하기</a>
            </v-card-text>
            </v-col>
        </v-row>
        
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
    export default {
      data(){
            return{
                sEmail:'',
                sPassword:'',
                bAlert:false
            }
        },
        methods: {
          fnDoGoogleLogin_Popup() {
            this.$store.dispatch("fnDoGoogleLogin_Popup")
          },
          fnDoLogin(){
                this.$store.dispatch('fnDoLogin', {pEmail:this.sEmail, pPassword:this.sPassword})
          }
        },
        computed:{
            fnGetLoading(){
                return this.$store.getters.fnGetLoading;
            },
            fnGetErrMsg(){
                return this.$store.getters.fnGetErrorMessage
            }
        },
        watch:{
            bAlert(pValue){
                console.log(pValue)
                if (pValue == false){
                     if ( this.fnGetErrMsg !== '비밀번호가 맞지 않습니다.') this.$router.push('/join')
                     this.$refs.passnum.focus()
                     this.$store.commit('fnSetErrorMessage', '')
                }    
            },
            fnGetErrMsg(pMsg){
                if (pMsg) this.bAlert = true;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login__or{
        position: relative;
        margin-top: 24px;
        text-align: center;
        font-size: 14px;
        color: #c5cbd0;
    }
    .login__or::before,
    .login__or::after{
        position: absolute;
        content:"";
        top: 45%;
        display: block;
        width: 40%;
        height: 1px;
        background-color: #dddfe4;
    }
    .login__or::after{
        right:0;
    }
</style>