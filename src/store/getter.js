export default {
    carmount(state){
        return state.cartlist.length
    },
    carlist(state){
        return state.cartlist
    },
    allprice(state){
        let allprice=0
        var newarr=state.cartlist.filter(function(item){
            return item.checked==true
        })
        newarr.forEach((item,index,arr)=>{
            allprice+=item.price*item.count
        })
        return allprice
    }
}