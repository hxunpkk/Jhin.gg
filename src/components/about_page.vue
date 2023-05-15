<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-img src="@/assets/img/about/new_main_title_bg.jpg" class="align-center">
                    <v-row class="text-center">
                        <v-col cols="12" class="banner_title" v-if="$mq === 'pc' ? true:false">
                            <h2>JHIN.GG 세상의 모든 게이머들이 최고의 게임 생활을 경험할 수 있도록,</h2>
                            <h2>우리 JHIN.GG는 게임에 미쳐있는 사람들이 모여, 오직 게이머를 위한 최고의 가치를 만들어갑니다.</h2>
                        </v-col>
                        <v-col cols="12" class="banner_title" v-if="$mq === 'tablet' ? true:false">
                            <h2>오직 게이머를 위한 최고의 가치를 만들어갑니다.</h2>
                        </v-col>
                    </v-row>
                </v-img>
            </v-col>
        </v-row>
        <v-row class="white--text mt-6 pt-6 justify-center">
            <v-col cols="8">
                <v-row class="mt-6 mt-6 mb-12 pb-12">
                    <v-col>
                        <h2 class="mb-6">OUR STORY</h2>
                        <p>
                            JHIN.GG는 2023년 리그 오브 레전드 전적 검색 서비스를 시작으로 영감을 주는 유의미한 데이터,  유저 친화적인 경험을 제공하는 글로벌 게임 플랫폼으로 성장했습니다.
                        </p>
                        <p>
                            JHIN.GG의 점진적인 성장은 우리의 서비스를 이용하는 유저들의 응원과 격려가 있어 가능했습니다.
                            유저들의 열정에 보답하기 위해 우리는 캐쥬얼 게이머부터 베테랑 게이머까지, 모두가 의욕 넘치고 즐겁게 사용할 수 있는 환경을 제공하기위해 
                            끊임없이 연구하고 과감하게 시도합니다.  
                        </p>
                    </v-col>
                </v-row>

                <v-row class="my-12 py-12 text-center justify-center" :class="$mq === 'pc' || $mq === 'tablet' ? 'px-12' : 'px-0'">
                    <v-col cols="1" v-if="$mq === 'pc' ? true:false">
                        <v-img src="@/assets/img/about/quotation_mark_left_white.svg"></v-img>
                    </v-col>
                    <v-col :cols="$mq === 'pc' ? 8:12">
                        <strong>“세상의 모든 게이머를 위한 플랫폼” <br>
                                이것은 우리가 나아가야할 변하지 않을 방향성 입니다.</strong>
                    </v-col>
                    <v-col cols="1" v-if="$mq === 'pc' ? true:false">
                        <v-img src="@/assets/img/about/quotation_mark_right_white.svg"></v-img>
                    </v-col>
                </v-row>

                <v-row class="my-12 py-12 justify-center" :class="$mq === 'pc' ? 'px-12 mx-12' : 'px-0 mx-0'">
                    <v-col cols="12" sm="6" md="4" lg="2" class="mx-2 text-center">
                        <v-img src="@/assets/img/about/lol.png" class="mx-2 mb-2" ></v-img>
                        <p class="game_title">League of Legends</p>
                    </v-col>
                    <v-col cols="12" sm="6" md="4" lg="2"  class="mx-2 text-center">
                        <v-img src="@/assets/img/about/valorant.png" class="mx-2 mb-2" ></v-img>
                        <p class="game_title">Valorant</p>
                    </v-col>
                    <v-col cols="12" sm="6" md="4" lg="2" class="mx-2 text-center">
                        <v-img src="@/assets/img/about/pubg.png" class="mx-2 mb-2" ></v-img>
                        <p class="game_title">PUBG</p>
                    </v-col>
                    <v-col cols="12" sm="6" md="4" lg="2" class="mx-2 text-center">
                        <v-img src="@/assets/img/about/overwatch.png" class="mx-2 mb-2" ></v-img>
                        <p class="game_title">OVERWATCH</p>
                    </v-col>
                    <v-col cols="12" sm="6" md="4" lg="2" class="mx-2 text-center">
                        <v-img src="@/assets/img/about/eternal_return.png" class="mx-2 mb-2" ></v-img>
                        <p class="game_title">Eternal Return</p>
                    </v-col>
                    <v-col cols="12" sm="6" md="4" lg="2" class="mx-2 text-center">
                        <v-img src="@/assets/img/about/duo.png" class="mx-2 mb-2" ></v-img>
                        <p class="game_title">Duo</p>
                    </v-col>
                    <v-col cols="12" sm="6" md="4" lg="2" class="mx-2 text-center">
                        <v-img src="@/assets/img/about/opgg_esports.png" class="mx-2 mb-2" ></v-img>
                        <p class="game_title">JHIN.GG Esports</p>
                    </v-col>
                    <v-col cols="12" sm="6" md="4" lg="2"  class="mx-2 text-center">
                        <v-img src="@/assets/img/about/talk.png" class="mx-2 mb-2" ></v-img>
                        <p class="game_title">TALK</p>
                    </v-col>
                    <v-col cols="12" sm="6" md="4" lg="2" class="mx-2 text-center">
                        <v-img src="@/assets/img/about/opgg_for_desktop.png" class="mx-2 mb-2" ></v-img>
                        <p class="game_title">JHIN.GG for Desktop</p>
                    </v-col>
                    <v-col cols="12" sm="6" md="4" lg="2" class="mx-2 text-center">
                        <v-img src="@/assets/img/about/opgg_app.png" class="mx-2 mb-2" ></v-img>
                        <p class="game_title">JHIN.GG App</p>
                    </v-col>
                </v-row>

                <v-row class="justify-center text-center mb-12 pb-12" data-aos="fade-up" data-aos-delay="500">
                    <v-col cols="12" sm="6" lg="3">
                        <span class="font-italic font-weight-black" :class="$mq==='pc'? 'text-h2':'text-h3'">5,500</span><span class="font-italic font-weight-black text-h5">만</span>
                        <p class="mt-4">한달 방문자</p>
                    </v-col>
                    <v-col cols="12" sm="6"  lg="3">
                        <span class="font-italic font-weight-black" :class="$mq==='pc'? 'text-h2':'text-h3'">4,6</span><span class="font-italic font-weight-black text-h5">억</span>
                        <p class="mt-4">한달 페이지뷰</p>
                    </v-col>
                    <v-col cols="12" sm="6"  lg="3">
                        <span class="font-italic font-weight-black" :class="$mq==='pc'? 'text-h2':'text-h3'">1,400</span><span class="font-italic font-weight-black text-h5">만</span>
                        <p class="mt-4">하루 페이지뷰</p>
                    </v-col>
                    <v-col cols="12" sm="6"  lg="3">
                        <span class="font-italic font-weight-black" :class="$mq==='pc'? 'text-h2':'text-h3'">500</span><span class="font-italic font-weight-black text-h5">만</span>
                        <p class="mt-4">서비스 다운로드</p>
                    </v-col>
                </v-row>

                <v-row class="my-12 py-12">
                    <v-col cols="12" class="mb-8"><h2>우리들이 일하는 방식</h2></v-col>
                    <v-col cols="12" lg="6">
                        <v-card class="rounded-lg px-8 py-8 d-flex flex-column" dark style="background:#31313C" :height="$mq==='mobile'? '300':'400'" data-aos="fade-right" data-aos-delay="500" data-aos-offset="200px">
                            <div class="card_contents">
                                <h4 class="mb-2">최고의 효율을 위한 완전 자율 근무</h4>
                                <p v-if="$mq==='mobile'? false:true">근무 최고의 업무 효율을 낼 수 있는 근무 환경을 본인이 스스로 선택하고 구축하여, 자율적으로 일할 수 있는 환경을 제공합니다.</p>
                            </div>
                            <v-img src="@/assets/img/about/how_we_work_01.png" class="rounded-lg" max-height="200"></v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <v-card class="rounded-lg px-8 py-8 d-flex flex-column" dark style="background:#31313C" :height="$mq==='mobile'? '300':'400'" data-aos="fade-left" data-aos-delay="500" data-aos-offset="200px">
                            <div class="card_contents">
                                <h4 class="mb-2">최고의 성장과 성취</h4>
                                <p v-if="$mq==='mobile'? false:true">구성원 개인의 성장을 위한 무제한 업무 지원제도를 운영합니다. 외부 환경에 흔들리지 않고 업무에 온전히 몰입할 수 있는 행복한 직장 생활을 위해 회사 밖의 Life Cycle까지 고려한 다양한 지원을 하고 있습니다.</p>
                            </div>
                            <v-img src="@/assets/img/about/how_we_work_02.png" class="align-end rounded-lg" max-height="200"></v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <v-card class="rounded-lg px-8 py-8 d-flex flex-column" dark style="background:#31313C" :height="$mq==='mobile'? '300':'400'" data-aos="fade-right" data-aos-delay="500" data-aos-offset="200px">
                            <div class="card_contents">
                                <h4 class="mb-2">합리적인 의사결정을 위한 유연함</h4>
                                <p v-if="$mq==='mobile'? false:true">불필요한 격식과 관행을 최소화함으로써 경직되지 않는 유연한 문화, 솔직한 커뮤니케이션을 추구합니다.</p>
                            </div>
                            <v-img src="@/assets/img/about/how_we_work_03.png" class="align-self-end rounded-lg" max-height="200px"></v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <v-card class="rounded-lg px-8 py-8 d-flex flex-column" dark style="background:#31313C" :height="$mq==='mobile'? '300':'400'" data-aos="fade-left" data-aos-delay="500" data-aos-offset="200px">
                            <div class="card_contents">
                                <h4 class="mb-2">게임은 우리의 아이덴티티이자 가능성</h4>
                                <p v-if="$mq==='mobile'? false:true">우리는 게임이 주는 선한 영향력과 무한한 가능성을 믿습니다. 모두가 다양한 인사이트와 아이디어를 얻을 수 있도록 다양한 게임을 체험할 수 있는 기회를 제공합니다.</p>
                            </div>
                            <v-img src="@/assets/img/about/how_we_work_04.png" class="align-self-end rounded-lg" max-height="200"></v-img>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row class="my-12 py-12">
                    <v-col cols="12" class="mb-8"><h2>우리가 서비스를 만드는 방식</h2></v-col>
                    <v-col cols="12" lg="6">
                        <v-card class="rounded-lg px-8 py-8 d-flex flex-column" dark style="background:#31313C" :height="$mq==='mobile'? '300':'400'" data-aos="fade-right" data-aos-delay="500" data-aos-offset="200px">
                            <div class="card_contents">
                                <h4 class="mb-2">게이머를 위해, 게이머가 만드는</h4>
                                <p v-if="$mq==='mobile'? false:true">우리 팀에는 하드코어 게이머가 많습니다. 게임의 종류와 PC, 모바일 플랫폼을 가리지 않고 게임을 즐기는 사람들입니다. 우리는 게이머가 필요로 하는 것과 원하는 것을 밑바닥에서부터 이해하며 이것을 바탕으로 게이머의 게임 전적과 이력이 표현되고 공유될 수 있는 플랫폼을 만들고 있습니다.</p>
                            </div>
                            <v-img src="@/assets/img/about/how_we_make_our_service_01.png" class="rounded-lg" max-height="200"></v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <v-card class="rounded-lg px-8 py-8 d-flex flex-column" dark style="background:#31313C" :height="$mq==='mobile'? '300':'400'" data-aos="fade-left" data-aos-delay="500" data-aos-offset="200px">
                            <div class="card_contents">
                                <h4 class="mb-2">궁극의 단순함</h4>
                                <p v-if="$mq==='mobile'? false:true">우리가 제공하는 가치가 게임 환경에 도움이 될 수 있도록 최적의 인터페이스와 다채로운 유저 경험을 연구합니다.</p>
                            </div>
                            <v-img src="@/assets/img/about/how_we_make_our_service_02.png" class="align-end rounded-lg" max-height="200"></v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <v-card class="rounded-lg px-8 py-8 d-flex flex-column" dark style="background:#31313C" :height="$mq==='mobile'? '300':'400'" data-aos="fade-right" data-aos-delay="500" data-aos-offset="200px">
                            <div class="card_contents">
                                <h4 class="mb-2">폭 넓은 인사이트</h4>
                                <p v-if="$mq==='mobile'? false:true">다양한 시각의 다채로운 경험을 제공할 수 있도록 e스포츠 관계자, 프로 선수, 데이터 분석가 등 업계의 다양한 파트너들과 소통합니다.</p>
                            </div>
                            <v-img src="@/assets/img/about/how_we_make_our_service_03.png" class="align-self-end rounded-lg" max-height="200px"></v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <v-card class="rounded-lg px-8 py-8 d-flex flex-column" dark style="background:#31313C" :height="$mq==='mobile'? '300':'400'" data-aos="fade-left" data-aos-delay="500" data-aos-offset="200px">
                            <div class="card_contents">
                                <h4 class="mb-2">끊임없는 시도</h4>
                                <p v-if="$mq==='mobile'? false:true">게이머를 위한 궁극의 가치를 제공하기위해 우리는 새로운 것들을 고민하고 끊임없이 시도합니다.</p>
                            </div>
                            <v-img src="@/assets/img/about/how_we_make_our_service_04.png" class="align-self-end rounded-lg" max-height="200"></v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .banner_title{
        background: rgba(0,0,0,0.1);
        font-weight: bold;
    }
    strong {
        font-size: 24px;
    }
    .game_title{
        font-size: 12px;
    }
    .card_contents{
        height: 50%;
        p {
            font-size: 15px;
        }
    }
</style>