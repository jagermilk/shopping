<template>
    <div class="detailparams">
        <div class="rule">
            <table width="100%"  v-for="table in GoodsParams.sizes">
                <tr v-for="tr in table" :key="item">
                    <td v-for="item in tr">{{item}}</td>
                </tr>
            </table>
        </div>
        <div class="info">
            <table width="100%">
                <tr v-for="item in GoodsParams.infos" :key="item">
                    <td width="25%">{{item.key}}</td>
                    <td class="pink">{{item.value}}</td>
                </tr>
            </table>
        </div>

        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            GoodsParams:{
             type:Object,
            default(){
                return {}
            }   
            }
            
        }
    }
</script>

<style lang="less" scoped>
    .detailparams{
        width: 95%;
        margin: auto;
        font-size: 16px;
        table{
                border-collapse: collapse; 
                tr{
                    height: 42px;
                    td{
                    border-bottom: 1px solid rgb(196, 189, 189);
                }
                }
                
                }
       .info{
        display: flex;
        flex-direction: column;
        
        .infoitems{


    } 
    }
}
.pink{
    color:rgb(232, 148, 162)
}
</style>