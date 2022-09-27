<template>
    <div class="carbottom">
        <div class="checkbox">
            <input type="checkbox" :checked="allchecked" @click="checkclick">
            <span>全选</span>
        </div>
        <div class="total">
            ¥{{allprice}}
        </div>
        <div class="pay">
            结算
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed:{
            ...mapGetters(['allprice']),
            allchecked(){
                if(this.$store.state.cartlist.length!==0){
                   return !(this.$store.state.cartlist.filter(item=>!item.checked).length) 
                }
                else{
                    return false
                }
            }
        },
        methods:{
            checkclick(){
                if(this.allchecked){
                    this.$store.commit('allunchecked')
                }
                else{
                    this.$store.commit('allchecked')
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .carbottom{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        width: 100%;
        background-color: rgb(246, 246, 246);
        position: fixed;
        top:580px;
        z-index: 9999;
        .checkbox{

            input{
                display:inline-block;
                zoom:150%;
                margin-left: 7px;
                margin-right: 5px;
            }
            span{
                display:inline-block;
                margin: 0px auto;
                zoom:150%;
            }

        }
        .total{
            width: 10px;
            font-size: 25px;
        }
        .pay{
            width: 120px;
            font-size: 30px;
            padding:3px;
            background-color: pink;
            text-align: center;
        }
    }
</style>