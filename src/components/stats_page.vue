<template>
    <v-container>
        <v-row>
            <v-col style="color:white">
                {{ summoner }}
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name:'statsPage',
        data(){
            return {
                sID: this.$route.params.s_ID,
                summoner: this.$store.getters.summoner
            }
        },
        created(){
            this.$store.dispatch('searchUser')
        }
    }
</script>

<style lang="scss" scoped>

</style>