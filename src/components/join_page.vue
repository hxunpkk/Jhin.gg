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
                <form @submit.prevent="fnRegisterUser">
                    <h3>기본정보 입력</h3>
                    <p style="font-size:12px; color:#777777;">회원가입을 위한 올바른 이메일 주소와 비밀번호를 작성하여 주세요.<br>
                        비밀번호는 6자 이상으로 작성하여야 합니다.</p>
                    <v-text-field name="Email" label="이메일" type="email" v-model="sEmail" required></v-text-field>
                    <v-text-field name="Password" label="비밀번호" type="password" v-model="sPassword" required></v-text-field>
                    <v-text-field name="ConfirmPassword" label="비밀번호 확인" type="password" v-model="sConfirmPassword" required :rules="[fnComparePassword]"></v-text-field>
                    <v-btn type="submit" class="blue accent-2 my-6" dark large style="width:100%">회원가입</v-btn>
                    <div class="text-center" v-if="fnGetLoading">
                        <v-progress-circular indeterminate :width="7" :size="70" color="grey lighten-1"></v-progress-circular>
                    </div>
                    <v-alert class="mt-3" type="error" dismissible v-model="bAlert">
                        {{ fnGetErrMsg  }}
                    </v-alert>
                </form>
            </v-col>
        </v-row>
        
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
    export default {
        data() {
            return {
                sEmail:'',
                sPassword:'',
                sConfirmPassword:'',
                bAlert:false
            }
        },
        computed:{
            fnComparePassword(){
                if (this.sPassword == this.sConfirmPassword) return true
                else return '비밀번호가 일치하지 않습니다.'
            },
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
                if (pValue == false) this.$store.commit('fnSetErrorMessage', '')
            },
            fnGetErrMsg(pMsg){
                if (pMsg) this.bAlert = true;
            }
        },
        methods:{
            fnRegisterUser(){
                if (this.fnComparePassword) {
                    this.$store.dispatch('fnRegisterUser', {
                        pEmail:this.sEmail,
                        pPassword:this.sPassword
                    })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>