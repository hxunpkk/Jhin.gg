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
            name: '13.16 패치노트',
            date: '2023-08-16',
            src:'https://www.leagueoflegends.com/ko-kr/news/game-updates/patch-13-16-notes/'
          },
          {
            name: '13.15 패치노트',
            date: '2023-08-02',
            src:'https://www.leagueoflegends.com/ko-kr/news/game-updates/patch-13-15-notes/'
          },
          {
            name: '13.14 패치노트',
            date: '2023-07-19',
            src:'https://www.leagueoflegends.com/ko-kr/news/game-updates/patch-13-14-notes/'
          },
          {
            name: '13.13 패치노트',
            date: '2023-06-28',
            src:'https://www.leagueoflegends.com/ko-kr/news/game-updates/patch-13-13-notes/'
          },
          {
            name: '13.12 패치노트',
            date: '2023-06-14',
            src:'https://www.leagueoflegends.com/ko-kr/news/game-updates/patch-13-12-notes/'
          },
          {
            name: '13.11 패치노트',
            date: '2023-06-01',
            src:'https://www.leagueoflegends.com/ko-kr/news/game-updates/patch-13-11-notes/'
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