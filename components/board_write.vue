<template>
    <v-container class="my-10" style="max-width:1300px;">
        <v-row class="mb-10">
            <v-col cols="12" class="text-center">
                <h1>글쓰기</h1>
            </v-col>
            <v-col cols="12">
                <v-card flat class="px-12">
                    <v-form @submit.prevent="onSubmitForm">
                        <v-text-field v-model="writer" dense outlined label="작성자" style="width:500px; padding-top:20px;" :rules="[ v => !!v || '작성자는 필수입니다.' ]"></v-text-field>
                        <v-text-field v-model="title" dense outlined label="제목" style="width:500px;" :rules="[ v => !!v || '제목은 필수입니다.' ]"></v-text-field>
                        <v-textarea v-model="text" label="내용" outlined rows="10"></v-textarea>
                        <v-file-input @change="previewImage" v-if="fileBtn" accept="image/*" v-model="files" dense label="사진 첨부" placeholder="사진 업로드" prepend-icon="mdi-paperclip" outlined :show-size="1000" couter style="width:500px; padding-bottom:20px"></v-file-input>
                        <div class="text-center pb-6" v-if="!bIsWait">
                            <v-btn width="80px" class="mx-2" color="blue accent-2" style="color:white" @click="moveToList">취소</v-btn>
                            <v-btn width="80px" class="mx-2" color="blue accent-2" style="color:white" type="submit">등록</v-btn>
                        </div>
                        <div class="text-center pb-6" v-else>
                            <v-progress-circular size="50" indeterminate color="grey"></v-progress-circular>
                        </div>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { oNoticeDB, oUsernewsDB, oTipsDB, oFreeboardDB, oHumorDB, oVideoDB, oFinduserDB, oReportDB, oPictureDB} from '@/assets/firebase'
    export default {
        data(){
            return {
                writer:'',
                title:'',
                text:'',
                date:'',
                type:'',
                fileBtn:false,
                files:'',
                imageData:'',
                bIsWait:false
            }
        },
        created(){
           this.type = this.$route.params.type
           if (this.type==='photo') this.fileBtn = true
        },
        methods:{
            onSubmitForm(){
                this.date = new Date().toISOString()
                this.$store.commit('fnSetNum')
                if (this.type==='notice') {
                    oNoticeDB.push({
                        'userEmail':this.$store.getters.fnGetUser.email,
                        'idnum' : this.$store.getters.fnGetNum,
                        'title' : this.title,
                        'text' : this.text,
                        'writer': this.writer,
                        'date' : this.date.split('T')[0],
                        'type' : 'JHIN.GG 기획'
                    }).then(this.$router.push('/notice_list'))
                } else if (this.type==='usernews') {
                    oUsernewsDB.push({
                        'userEmail':this.$store.getters.fnGetUser.email,
                        'idnum' : this.$store.getters.fnGetNum,
                        'title' : this.title,
                        'text' : this.text,
                        'writer': this.writer,
                        'date' : this.date.split('T')[0],
                        'type' : '유저 뉴스'
                    }).then(this.$router.push('/usernews_list'))
                } else if (this.type==='tips') {
                    oTipsDB.push({
                        'userEmail':this.$store.getters.fnGetUser.email,
                        'idnum' : this.$store.getters.fnGetNum,
                        'title' : this.title,
                        'text' : this.text,
                        'writer': this.writer,
                        'date' : this.date.split('T')[0],
                        'type' : '팁과 노하우'
                    }).then(this.$router.push('/tips_list'))
                } else if (this.type==='freeboard') {
                    oFreeboardDB.push({
                        'userEmail':this.$store.getters.fnGetUser.email,
                        'idnum' : this.$store.getters.fnGetNum,
                        'title' : this.title,
                        'text' : this.text,
                        'writer': this.writer,
                        'date' : this.date.split('T')[0],
                        'type' : '자유'
                    }).then(this.$router.push('/freeboard_list'))
                } else if (this.type==='humor') {
                    oHumorDB.push({
                        'userEmail':this.$store.getters.fnGetUser.email,
                        'idnum' : this.$store.getters.fnGetNum,
                        'title' : this.title,
                        'text' : this.text,
                        'writer': this.writer,
                        'date' : this.date.split('T')[0],
                        'type' : '유머'
                    }).then(this.$router.push('/humor_list'))
                } else if (this.type==='video') {
                    oVideoDB.push({
                        'userEmail':this.$store.getters.fnGetUser.email,
                        'idnum' : this.$store.getters.fnGetNum,
                        'title' : this.title,
                        'text' : this.text,
                        'writer': this.writer,
                        'date' : this.date.split('T')[0],
                        'type' : '영상'
                    }).then(this.$router.push('/video_list'))
                } else if (this.type==='finduser') {
                    oFinduserDB.push({
                        'userEmail':this.$store.getters.fnGetUser.email,
                        'idnum' : this.$store.getters.fnGetNum,
                        'title' : this.title,
                        'text' : this.text,
                        'writer': this.writer,
                        'date' : this.date.split('T')[0],
                        'type' : '유저 찾기'
                    }).then(this.$router.push('/finduser_list'))
                } else if (this.type==='report') {
                    oReportDB.push({
                        'userEmail':this.$store.getters.fnGetUser.email,
                        'idnum' : this.$store.getters.fnGetNum,
                        'title' : this.title,
                        'text' : this.text,
                        'writer': this.writer,
                        'date' : this.date.split('T')[0],
                        'type' : '사건 사고'
                    }).then(this.$router.push('/report_list'))
                } else if (this.type==='picture') {
                    oPictureDB.push({
                        'userEmail':this.$store.getters.fnGetUser.email,
                        'idnum' : this.$store.getters.fnGetNum,
                        'title' : this.title,
                        'text' : this.text,
                        'writer': this.writer,
                        'date' : this.date.split('T')[0],
                        'type' : '팬 아트'
                    }).then(this.$router.push('/picture_list'))
                }
            },
            moveToList(){
                if (this.type==='notice') {
                    this.$router.push('/notice_list')
                } else if (this.type==='usernews') {
                    this.$router.push('/usernews_list')
                } else if (this.type==='tips') {
                    this.$router.push('/tips_list')
                } else if (this.type==='freeboard') {
                    this.$router.push('/freeboard_list')
                } else if (this.type==='humor') {
                    this.$router.push('/humor_list')
                } else if (this.type==='video') {
                    this.$router.push('/video_list')
                } else if (this.type==='finduser') {
                    this.$router.push('/finduser_list')
                } else if (this.type==='report') {
                    this.$router.push('/report_list')
                } else if (this.type==='picture') {
                    this.$router.push('/picture_list')
                }
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>