<template>
    <v-list rounded="lg" style="background:#FFFFFF">
    <v-row>
        <v-col class="mx-0 px-0">
            <v-list-item class="d-block">
                <v-list-item-title class="mt-2 board_title">
                    홈
                </v-list-item-title>
                <v-list-item-subtitle class="py-2 board_subtitle" @click="$router.push('/freeboard_list')">
                    자유
                </v-list-item-subtitle>
            </v-list-item>
        </v-col>
    </v-row>
    <v-divider class="mb-2 mt-4" color="#ebeef1"></v-divider>
    <v-row>
        <v-col class="mx-0 px-0">
            <v-list-item class="d-block">
                <v-list-item-title class="mt-2 board_title">
                    정보
                </v-list-item-title>
                <v-list-item-subtitle class="py-2 board_subtitle" @click="$router.push('/notice_list')">
                    JHIN.GG 기획
                </v-list-item-subtitle>
                <v-list-item-subtitle class="py-2 board_subtitle" @click="$router.push('/usernews_list')">
                    유저 뉴스
                </v-list-item-subtitle>
                <v-list-item-subtitle class="py-2 board_subtitle" @click="$router.push('/tips_list')">
                    팁과 노하우
                </v-list-item-subtitle>
            </v-list-item>
        </v-col>
    </v-row>
    <v-divider class="mb-2 mt-4" color="#ebeef1"></v-divider>
    <v-row>
        <v-col class="mx-0 px-0">
            <v-list-item class="d-block">
                <v-list-item-title class="mt-2 board_title">
                    커뮤니티
                </v-list-item-title>
                <v-list-item-subtitle class="py-2 board_subtitle" @click="$router.push('/humor_list')">
                    유머
                </v-list-item-subtitle>
                <v-list-item-subtitle class="py-2 board_subtitle" @click="$router.push('/video_list')">
                    영상
                </v-list-item-subtitle>
                <v-list-item-subtitle class="py-2 board_subtitle" @click="$router.push('/finduser_list')">
                    유저 찾기
                </v-list-item-subtitle>
                <v-list-item-subtitle class="py-2 board_subtitle" @click="$router.push('/report_list')">
                    사건 사고
                </v-list-item-subtitle>
                <v-list-item-subtitle class="py-2 board_subtitle" @click="$router.push('/picture_list')">
                    팬 아트
                </v-list-item-subtitle>
            </v-list-item>
        </v-col>
    </v-row>
</v-list>
</template>

<script>
    export default {
        
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
</style>

