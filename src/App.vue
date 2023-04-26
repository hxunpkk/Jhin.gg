<template>
  <v-app>
    <v-app-bar style="background:#273047; color:white" app>
      <v-toolbar-title @click="$router.push('/')" class="pointer mr-6" >
        <h2>JHIN.GG</h2>
      </v-toolbar-title>
      <v-toolbar-title @click="$router.push('/')" class="pointer mr-4" style="font-size: 14px;">홈</v-toolbar-title>
      <v-toolbar-title @click="$router.push('/board_list')" class="pointer" style="font-size: 14px;">유저 게시판</v-toolbar-title>
      
      <v-spacer></v-spacer>

      <v-btn text v-if="!fnGetAuthStatus" @click="$router.push('/login')" class="blue accent-2 mr-2" style="color:white; font-size: 14px;">
        로그인
      </v-btn>
      <v-btn text v-if="fnGetAuthStatus" @click="fnDoLogout" style="color:white;">
        {{ fnGetUser }}님
        <v-icon left class="ml-3">mdi-arrow-right-bold-box-outline</v-icon>로그아웃
      </v-btn>
    </v-app-bar>

    <v-main class="grey darken-4">
      <router-view></router-view>
    </v-main>


    <v-footer class="grey darken-4">
      <v-container style="max-width:1300px">
        <v-row style="color:white">
          <v-col>
            <h2>JHIN.GG</h2>
          </v-col>
          <v-col>
            <h4>JHIN.GG</h4>
            <ul class="px-0">
              <li>About OP.GG</li>
              <li>Company</li>
              <li>Blog</li>
              <li>로고 히스토리</li>
            </ul>
          </v-col>
          <v-col>
            <h4>Products</h4>
            <ul class="px-0">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </v-col>
          <v-col>
            <h4>Apps</h4>
            <ul class="px-0">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </v-col>
          <v-col>
            <h4>Resources</h4>
            <ul class="px-0">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </v-col>
          <v-col>
            <h4>More</h4>
            <ul class="px-0">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
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
         let name = oUserInfo.name ? oUserInfo.name : '고객'
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
