<template>
  <v-app>
    <v-app-bar style="background:#273047; color:white" app>
      <v-toolbar-title @click="$router.push('/')" class="pointer mr-6" >
        <h2>JHIN.GG</h2>
      </v-toolbar-title>
      <v-toolbar-title @click="$router.push('/')" class="pointer mr-4" style="font-size: 14px;">홈</v-toolbar-title>
      <v-toolbar-title @click="$router.push('/freeboard_list')" class="pointer" style="font-size: 14px;">커뮤니티</v-toolbar-title>
      
      <v-spacer></v-spacer>

      <v-btn text v-if="!fnGetAuthStatus" @click="$router.push('/login')" class="blue accent-2 mr-2" style="color:white; font-size: 14px;">
        로그인
      </v-btn>
      <v-tooltip bottom v-if="fnGetAuthStatus">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text @click="fnDoLogout" style="color:white;" v-bind="attrs" v-on="on">
            {{ fnGetUser }}님 환영합니다.
          </v-btn>
        </template>
        <span>클릭시 로그아웃 됩니다.</span>
      </v-tooltip>
    </v-app-bar>

    <v-main class="grey darken-4">
      <router-view></router-view>
    </v-main>


    <v-footer class="grey darken-4 pt-12">
      <v-container style="max-width:1300px">
        <v-row style="color:white; font-size:14px" class="pb-12">
          <v-col>
            <h1>JHIN.GG</h1>
          </v-col>
          <v-col class="mt-2">
            <h4>JHIN.GG</h4>
            <ul class="px-0 pt-4">
              <li class="pb-1 pointer" @click="$router.push('/')">About JHIN.GG</li>
              <li class="pb-1 pointer" @click="$router.push('/')">Company</li>
              <li class="pb-1 pointer" @click="$router.push('/')">Blog</li>
              <li class="pointer" @click="$router.push('/')">로고 히스토리</li>
            </ul>
          </v-col>
          <v-col class="mt-2">
            <h4>Products</h4>
            <ul class="px-0 pt-4">
              <li class="pb-1 pointer" @click="$router.push('/')">리그오브레전드</li>
              <li class="pb-1 pointer" @click="$router.push('/')">전략적 팀 전투</li>
              <li class="pb-1 pointer" @click="$router.push('/')">발로란트</li>
              <li class="pb-1 pointer" @click="$router.push('/')">이스포츠</li>
            </ul>
          </v-col>
          <v-col class="mt-2">
            <h4>Apps</h4>
            <ul class="px-0 pt-4">
              <li class="pb-1 pointer" @click="$router.push('/')">JHIN.GG Android App</li>
              <li class="pb-1 pointer" @click="$router.push('/')">JHIN.GG iOS App</li>
            </ul>
          </v-col>
          <v-col class="mt-2">
            <h4>Resources</h4>
            <ul class="px-0 pt-4">
              <li class="pb-1 pointer" @click="$router.push('/')">개인정보처리방침</li>
              <li class="pb-1 pointer" @click="$router.push('/')">이용약관</li>
              <li class="pb-1 pointer" @click="$router.push('/')">도움말</li>
              <li class="pb-1 pointer" @click="$router.push('/')">이메일 문의하기</li>
              <li class="pb-1 pointer" @click="$router.push('/')">FAQ/피드백</li>
            </ul>
          </v-col>
          <v-col class="mt-2">
            <h4>More</h4>
            <ul class="px-0 pt-4">
              <li class="pb-1 pointer" @click="$router.push('/')">제휴</li>
              <li class="pb-1 pointer" @click="$router.push('/')">광고</li>
              <li class="pb-1 pointer" @click="$router.push('/')">채용</li>
            </ul>
          </v-col>
        </v-row>
        <v-divider dark></v-divider>
        <v-row class="pt-6">
          <v-col cols="10" style="color:white; font-size:12px">
            © 2023 - JHIN.GG. JHIN.GG isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
          </v-col>
          <v-col cols="2" :style="$mq==='pc' || $mq==='tablet' ? '':'display:none'">
            <div class="ml-4 d-flex">
              <div class="mr-4">
                <a href="https://twitter.com/" target="_blank"><v-img src="https://s-lol-web.op.gg/images/icon/icon-logo-twitter.svg?v=1682536851774" width="24" height="24"></v-img></a>
              </div>
              <div class="mr-4">
                <a href="https://www.instagram.com/" target="_blank"><v-img src="https://s-lol-web.op.gg/images/icon/icon-logo-instagram.svg?v=81682536851774" width="24" height="24"></v-img></a>
              </div>
              <div>
                <a href="https://www.facebook.com/" target="_blank"><v-img src="https://s-lol-web.op.gg/images/icon/icon-logo-facebook.svg?v=162536851774" width="24" height="24"></v-img></a>
              </div>
            </div>
            
          </v-col>

        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script> 

export default {
  name: 'App',
  computed:{
      fnGetAuthStatus(){
         return this.$store.getters.fnGetAuthStatus
      },
      fnGetUser(){
         let oUserInfo = this.$store.getters.fnGetUser
         let name = oUserInfo.name ? oUserInfo.name : 'User'
         return name
      }
    },

    methods:{
      fnDoLogout(){
        this.$store.dispatch('fnDoLogout')
      }
    }

}

</script>

<style lang="scss" scoped>

</style>