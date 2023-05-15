<template>
    <v-container>
        <v-row class="mb-12">
            <v-col cols="12">
                <v-img src="@/assets/img/company/company-img.png" class="align-end">
                    <v-row class="justify-center">
                        <v-col cols="8">
                            <p class="text-h3 font-weight-bold mb-12 white--text">Company</p>
                        </v-col>
                    </v-row>
                </v-img>
            </v-col>
        </v-row>
        <v-row class="justify-center white--text my-12 py-12">
            <v-col cols="8">
                <v-row>
                    <v-col cols="12" class="mb-12">
                        <p class="text-h4 font-weight-bold">JHIN.GG 소개</p>
                        <v-divider dark></v-divider>
                    </v-col>
                    <v-col cols="12" class="mb-12">
                        <p class="text-center text-h5 article1">저희는 <span class="font-weight-bold">전세계 유저</span>들에게 전에 없던
                            <span class="font-weight-bold">최고의 게임 플레이 경험</span>을 제공하는 <span class="font-weight-bold">글로벌 게임
                                서비스 플랫폼</span>입니다.<br>
                            <span class="font-weight-bold">우리는 우리의 서비스가 곧 유저의 일상이 되는 세상을 꿈꿉니다.</span>
                        </p>
                    </v-col>
                    <v-col cols="12" sm="6" xl="3">
                        <v-img src="@/assets/img/company/img-about-lol.png"></v-img>
                    </v-col>
                    <v-col cols="12" sm="6" xl="3">
                        <v-img src="@/assets/img/company/img-about-ow.png"></v-img>
                    </v-col>
                    <v-col cols="12" sm="6" xl="3">
                        <v-img src="@/assets/img/company/img-about-pubg.png"></v-img>
                    </v-col>
                    <v-col cols="12" sm="6" xl="3">
                        <v-img src="@/assets/img/company/img-about-er.png"></v-img>
                    </v-col>
                    <v-col class="mt-6 mb-12">
                        <v-divider dark></v-divider>
                        <v-row class="text-center my-6">
                            <v-col cols="12" sm="6" lg="3">
                                <span class="font-weight-black" :class="$mq === 'pc' ? 'text-h3' : 'text-h4'">
                                    <animated-number :value="5500"  :duration="duration"  :formatValue="formatToPrice" />만</span>
                                <p class="mt-4">한달 방문자</p>
                            </v-col>
                            <v-col cols="12" sm="6" lg="3">
                                <span class="font-weight-black"
                                    :class="$mq === 'pc' ? 'text-h3' : 'text-h4'">
                                    <animated-number :value="4"  :duration="duration"  :formatValue="formatToPrice" />,<animated-number :value="6"  :duration="duration"  :formatValue="formatToPrice" />억</span>
                                <p class="mt-4">한달 페이지뷰</p>
                            </v-col>
                            <v-col cols="12" sm="6" lg="3">
                                <span class="font-weight-black" :class="$mq === 'pc' ? 'text-h3' : 'text-h4'">
                                    <animated-number :value="1400"  :duration="duration"  :formatValue="formatToPrice" />만</span>
                                <p class="mt-4">하루 페이지뷰</p>
                            </v-col>
                            <v-col cols="12" sm="6" lg="3">
                                <span class="font-weight-black" :class="$mq === 'pc' ? 'text-h3' : 'text-h4'">
                                    <animated-number :value="500"  :duration="duration"  :formatValue="formatToPrice" />만</span>
                                <p class="mt-4">서비스 다운로드</p>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" class="mb-12">
                        <p class="text-h4 font-weight-bold">History</p>
                        <v-divider dark></v-divider>
                    </v-col>
                    <v-col cols="12" class="mb-12">
                        <v-row class="my-6">
                            <v-col cols="12" sm="2">
                                <p class="text-h4 font-weight-medium"><animated-number :value="2012"  :duration="duration+200"  :formatValue="formatToYears" /></p>
                            </v-col>
                            <v-col cols="12" sm="10" class="font-weight-medium text-h6">
                                <v-row>
                                    <v-col cols="2">
                                        <p>12</p>
                                    </v-col>
                                    <v-col cols="10">
                                        <p>JHIN.GG 서비스 베타 출시</p>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row class="my-6">
                            <v-col cols="12" sm="2">
                                <p class="text-h4 font-weight-medium"><animated-number :value="2014"  :duration="duration+400"  :formatValue="formatToYears" /></p>
                            </v-col>
                            <v-col cols="12" sm="10" class="font-weight-medium text-h6">
                                <v-row>
                                    <v-col cols="2">
                                        <p>1</p>
                                    </v-col>
                                    <v-col cols="10">
                                        <p>글로벌 서비스 시작</p>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row class="my-6">
                            <v-col cols="12" sm="2">
                                <p class="text-h4 font-weight-medium"><animated-number :value="2016"  :duration="duration+600"  :formatValue="formatToYears" /></p>
                            </v-col>
                            <v-col cols="12" sm="10" class="font-weight-medium text-h6">
                                <v-row>
                                    <v-col cols="2">
                                        <p>6</p>
                                    </v-col>
                                    <v-col cols="10">
                                        <p>오버워치 전적 검색 서비스 시작</p>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="2">
                                        <p>7</p>
                                    </v-col>
                                    <v-col cols="10">
                                        <p>오버로그 인수</p>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row class="my-6">
                            <v-col cols="12" sm="2">
                                <p class="text-h4 font-weight-medium"><animated-number :value="2018"  :duration="duration+800"  :formatValue="formatToYears" /></p>
                            </v-col>
                            <v-col cols="12" sm="10" class="font-weight-medium text-h6">
                                <v-row>
                                    <v-col cols="2">
                                        <p>1</p>
                                    </v-col>
                                    <v-col cols="10">
                                        <p>Twitch Extension App 출시 / 모바일 앱 출시</p>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="2">
                                        <p>2</p>
                                    </v-col>
                                    <v-col cols="10">
                                        <p>프로게임단 창단 / Overwolf App 릴리즈 / 동남아 서비스 시작</p>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="2">
                                        <p>7</p>
                                    </v-col>
                                    <v-col cols="10">
                                        <p>톡피지지 출시 / 오피지지 프로게임단 포트나이트 창단</p>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="2">
                                        <p>12</p>
                                    </v-col>
                                    <v-col cols="10">
                                        <p>Chrome Extension App 출시</p>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row class="my-6">
                            <v-col cols="12" sm="2">
                                <p class="text-h4 font-weight-medium"><animated-number :value="2019"  :duration="duration+1000"  :formatValue="formatToYears" /></p>
                            </v-col>
                            <v-col cols="12" sm="10" class="font-weight-medium text-h6">
                                <v-row>
                                    <v-col cols="2">
                                        <p>11</p>
                                    </v-col>
                                    <v-col cols="10">
                                        <p>R6 아마추어, 프로리그 운영</p>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="2">
                                        <p>12</p>
                                    </v-col>
                                    <v-col cols="10">
                                        <p>Ubisoft MOU</p>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row class="my-6">
                            <v-col cols="12" sm="2">
                                <p class="text-h4 font-weight-medium"><animated-number :value="2020"  :duration="duration+1200"  :formatValue="formatToYears" /></p>
                            </v-col>
                            <v-col cols="12" sm="10" class="font-weight-medium text-h6">
                                <v-row>
                                    <v-col cols="2">
                                        <p>7</p>
                                    </v-col>
                                    <v-col cols="10">
                                        <p>R6 Korean 오픈리그 운영</p>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="2">
                                        <p>9</p>
                                    </v-col>
                                    <v-col cols="10">
                                        <p>K-유니콘 선정</p>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="2">
                                        <p>10</p>
                                    </v-col>
                                    <v-col cols="10">
                                        <p>OP.GG for Desktop 출시</p>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row class="my-6">
                            <v-col cols="12" sm="2">
                                <p class="text-h4 font-weight-medium"><animated-number :value="2021"  :duration="duration+1400"  :formatValue="formatToYears" /></p>
                            </v-col>
                            <v-col cols="12" sm="10" class="font-weight-medium text-h6">
                                <v-row>
                                    <v-col cols="2">
                                        <p>4</p>
                                    </v-col>
                                    <v-col cols="10">
                                        <p>T1 MOU</p>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="2">
                                        <p>6</p>
                                    </v-col>
                                    <v-col cols="10">
                                        <p>부산정보산업진흥원 MOU</p>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row class="my-6">
                            <v-col cols="12" sm="2">
                                <p class="text-h4 font-weight-medium"><animated-number :value="2022"  :duration="duration+1600"  :formatValue="formatToYears" /></p>
                            </v-col>
                            <v-col cols="12" sm="10" class="font-weight-medium text-h6">
                                <v-row>
                                    <v-col cols="2">
                                        <p>4</p>
                                    </v-col>
                                    <v-col cols="10">
                                        <p>독일 iF 디자인 어워드 본상 수상</p>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="2">
                                        <p>5</p>
                                    </v-col>
                                    <v-col cols="10">
                                        <p>OGT 인수 / 리그오브레전드챔피언스코리아 공식 스폰서십 체결</p>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="2">
                                        <p>6</p>
                                    </v-col>
                                    <v-col cols="10">
                                        <p>OGN(구 온게임넷) 인수</p>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" class="mb-12">
                        <p class="text-h4 font-weight-bold">Company Information</p>
                        <v-divider dark></v-divider>
                    </v-col>
                    <v-col cols="12" class="mb-12 font-weight-medium">
                        <v-row>
                            <v-col cols="12" sm="6" xl="3">
                                <p>회사명: 주식회사 진지지(JHIN.GG)</p>
                            </v-col>
                            <v-col cols="12" sm="6" xl="3">
                                <p>주소: 서울특별시 강남구</p>
                            </v-col>
                            <v-col cols="12" sm="6" xl="3">
                                <p>대표번호: 02-XXX-XXXX</p>
                            </v-col>
                            <v-col cols="12" sm="6" xl="3">
                                <p>대표이사: 박OO</p>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row style="background:#31313C" class="justify-center white--text">
            <v-col cols="8">
                <v-row>
                    <v-col cols="12" class="mt-12">
                        <p class="text-h4 font-weight-bold">Instagram</p>
                    </v-col>
                    <v-col cols="12">
                        <v-list style="background:inherit">
                            <v-list-item>
                                <v-list-item-avatar>
                                    <v-avatar color="black">
                                        <v-icon class="white--text">mdi-instagram</v-icon>
                                    </v-avatar>
                                </v-list-item-avatar>         
                                <v-list-item-content>
                                    <v-list-item-title class="white--text font-weight-medium">Jhingginc</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col cols="6" sm="3" xl="2" class="rounded-lg" v-for="(item, i) in imgsrc" :key="i">
                        <v-img :src="item" class="rounded-lg imgbox text-center align-center" aspect-ratio="1">
                            <v-avatar color="grey">
                                <v-icon class="white--text">mdi-instagram</v-icon>
                            </v-avatar>
                        </v-img>
                    </v-col>
                    <v-col cols="12" class="text-center">
                        <v-btn rounded color="primary" dark class="my-4 py-6">
                            <v-icon class="text-subtitle-2 mr-2">mdi-instagram</v-icon> <span class="text-body-2 text-capitalize">Instagram 팔로우</span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AnimatedNumber from "animated-number-vue";

export default {
    data() {
        return {
            duration:4000,
            imgsrc: [
                "https://log.op.gg/wp-content/uploads/sb-instagram-feed-images/191303631_167577558556060_550792972980572398_nlow.jpg",
                "https://log.op.gg/wp-content/uploads/sb-instagram-feed-images/147630702_1945948222211191_1170941765547115735_nlow.jpg",
                "https://log.op.gg/wp-content/uploads/sb-instagram-feed-images/131394855_396581075095618_8386436296919052388_nlow.jpg",
                "https://log.op.gg/wp-content/uploads/sb-instagram-feed-images/124814728_393190795166182_7288939894499093874_nlow.jpg",
                "https://log.op.gg/wp-content/uploads/sb-instagram-feed-images/116135234_982200998883213_6434245185910342447_nlow.jpg",
                "https://log.op.gg/wp-content/uploads/sb-instagram-feed-images/101851984_3100308990035471_2871061505446872129_nfull.jpg",
            ]
        }
    },
    methods:{
        formatToPrice(value) {
          var num=Number(value).toFixed(0)
          return `${Number(num).toLocaleString()}`;
        },
        formatToYears(value) {
          var num=Number(value).toFixed(0)
          return Number(num);
        }
      },
    components: {
        AnimatedNumber
    }
}
</script>

<style lang="scss" scoped>
.article1 {
    line-height: 2;
}
.imgbox {
    position: relative;
}
.imgbox:hover::before {
    background-color: rgba(0,0,0,0.5);
    transition: all 0.5s;
}
.imgbox::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
}
.imgbox .v-avatar {
    opacity:0;
    transform: scale(-1);
    transition: all 0.2s;
}
.imgbox:hover .v-avatar {
    opacity: 1;
    transform: scale(1);
}

</style>