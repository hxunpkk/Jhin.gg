<template>
    <v-system-bar window class="elevation-4 rounded rounded-b-0">
        <v-icon class="me-2">mdi mdi-message</v-icon>
        <span :style="$mq === 'pc' || $mq === 'tablet' ? '':'display:none;'">6개의 패치내역이 있습니다</span>
        <span :style="$mq === 'pc' || $mq === 'tablet' ? 'display:none;':''">6개의 패치내역</span>
        <v-spacer></v-spacer>
        <v-btn icon="">
            <v-icon style="font-size: 14px;">
                mdi mdi-minus
            </v-icon>
        </v-btn>
        <v-btn icon="">
            <v-icon style="font-size: 14px;">
                mdi mdi-checkbox-blank-outline
            </v-icon>
        </v-btn>
        <v-btn icon="">
            <v-icon style="font-size: 14px;">mdi mdi-close</v-icon>
        </v-btn>
    </v-system-bar>
</template>

<script>
export default {
    data() {
        return {
           
        }
    },
}
</script>

<style lang="scss" scoped></style>