<template>
    <v-container style="max-width:1300px">
        <v-row>
            <v-col cols="3">
                <v-sheet class="rounded-lg" dark>
                    <list-bar></list-bar>
                </v-sheet>
            </v-col>
            
            <v-col>
                <v-sheet min-height="70vh" rounded="lg" style="background:#FFFFFF" class="mt-3">
                    <v-row>
                        <v-col cols="4" class="ml-8">
                            <h2 class="mt-1">사건 사고</h2>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="3" class="mr-8"> 
                            <v-text-field class="pt-0" v-model="search" append-icon="mdi-magnify" label="검색" single-line hide-details></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="mb-10" justify="center">
                        <v-data-table class="elevation-1 mx-4 mb-10" :sort-by="['index']" :sort-desc="[true]" :headers="headers" :items="itemsWithIndex" :search="search" :loading="loading" loading-text="text" :page.sync="page" :items-per-page="itemsPerPage" hide-default-footer @page-count="pageCount = $event" @click:row="clickRow"></v-data-table>
                        <v-col cols="12">
                            <v-pagination v-model="page" :length="pageCount" :total-visible="totalVisible" next-icon="mdi-menu-right" prev-icon="mdi-menu-left"></v-pagination>
                        </v-col>
                        <v-col cols="12" class="text-right my-2 mr-8" v-if="showWriteBtn">
                            <v-btn color="blue accent-2" style="color:white" @click="moveToWrite">글쓰기</v-btn>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import listBar from '@/components/list_bar.vue'
    import { oReportDB } from '@/assets/firebase'
    export default {
        firebase : { contentlist : oReportDB },
        data(){
            return {
                contentlist : [],
                headers:[
                    { text:'번호', width:'10%', value:'index', sortable:false, align:'center' },
                    { text:'게시판', width:'20%', value:'type', sortable:false, align:'center' },
                    { text:'제목', width:'auto', value:'title', sortable:false, align:'center' },
                    { text:'작성자', width:'15%', value:'writer', sortable:false, align:'center' },
                    { text:'작성일', width:'15%', value:'date', sortable:false, align:'center' }
                ],
                text:'Welcome!!',
                page: 1,
                pageCount:0,
                itemsPerPage:5,
                totalVisible:10,
                loading:false,
                search:'',
                showWriteBtn:false
            }
        },
        components:{
            'list-bar' : listBar
        },
        methods:{
            clickRow(item){
                this.$router.push({name:'board_content', params:{ item:item, title:item.title, page:this.page, type:'report' }})
            },
            moveToWrite(){
                this.$router.push({name:'board_write', params:{ type:'report' }})
            }
        },
        created(){
            this.page = this.$route.params.page ? this.$route.params.page : 1
            const email = this.$store.getters.fnGetUser.email
            this.showWriteBtn = email=== email ? true : false
        },
        computed :{
            itemsWithIndex(){
                return this.contentlist.map((item, index)=> ({...item,  index:index+1}))
            }
        }
    }
</script>

<style lang="scss" scoped>
.board_title{
    font-size: 14px;
    color: #7B858E;
}
.board_subtitle{
    padding-left: 10px;
    padding-top: 5px;
    font-size: 15px;
    color: #1e2022 !important;
    cursor: pointer;
    transition: all 0.2s;
}
.board_subtitle:hover{
    background-color: rgb(0,0,0, 0.05);
}
.theme--light.v-data-table {
    width: 100%;
}
</style>