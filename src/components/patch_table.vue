<template>
    <v-simple-table class="elevation-4 rounded rounded-t-0">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              제목
            </th>
            <th class="text-left">
              패치일
            </th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="item in patches" :key="item.name" @click="newPage(item.src)" class="pointer">
                <td class="text-left">{{ item.name }}</td>
                <td class="text-left">{{ item.date }}</td>
            </tr>
        </tbody>
      </template>
    </v-simple-table>
  </template>

<script>
  export default {
    data () {
      return {
        patches: [
          {
            name: '13.12 패치노트',
            date: '2023-06-14',
            src:'https://www.leagueoflegends.com/ko-kr/news/game-updates/patch-13-12-notes/'
          },
          {
            name: '13.11 패치노트',
            date: '2023-06-05',
            src:'https://www.leagueoflegends.com/ko-kr/news/game-updates/patch-13-11-notes/'
          },
          {
            name: '13.10 패치노트',
            date: '2023-05-17',
            src:'https://www.leagueoflegends.com/ko-kr/news/game-updates/patch-13-10-notes/'
          },
          {
            name: '13.9 패치노트',
            date: '2023-05-03',
            src:'https://www.leagueoflegends.com/ko-kr/news/game-updates/patch-13-9-notes/'
          },
          {
            name: '13.8 패치노트',
            date: '2023-04-19',
            src:'https://www.leagueoflegends.com/ko-kr/news/game-updates/patch-13-8-notes/'
          },
          {
            name: '13.7 패치노트',
            date: '2023-04-07',
            src:'https://www.leagueoflegends.com/ko-kr/news/game-updates/patch-13-7-notes/'
          },
        ],
      }
    },
    methods:{
        newPage(src){
            window.open(src);
        }
    }
  }
</script>

<style lang="scss" scoped>

</style>