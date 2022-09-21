<template>
    <div class="home">
        我是home
    </div>
</template>

<script>
    import {request} from '../network/request'
    export default {
        created(){
            request({
                url:'/home/multidata'
            }).then((res)=>{
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            })
        },
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>