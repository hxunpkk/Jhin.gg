<template>
  <v-app>
    <v-app-bar class="grey darken-4" app>
      <v-toolbar-title @click="$router.push('/')" class="pointer" style="color:white">
        <h2>JHIN.GG</h2>
      </v-toolbar-title>
    </v-app-bar>
    <v-main class="grey darken-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script> 

export default {
  name: 'App',

}

</script>
