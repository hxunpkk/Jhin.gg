<template>
    <v-system-bar window class="elevation-4 rounded rounded-b-0">
        <v-icon class="me-2">mdi mdi-message</v-icon>
        <span>6개의 패치내역이 있습니다</span>
        <v-spacer></v-spacer>
        <v-btn icon="">
            <v-icon>
                mdi mdi-minus
            </v-icon>
        </v-btn>
        <v-btn icon="">
            <v-icon>
                mdi mdi-checkbox-blank-outline
            </v-icon>
        </v-btn>
        <v-btn icon="">
            <v-icon>mdi mdi-close</v-icon>
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