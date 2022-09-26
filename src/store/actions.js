export default{
    addcarlist(context,payload){
        let oldProduct=null
        for(let item of context.state.cartlist){
          if(item.iid===payload.iid){
            oldProduct=item;
          }
        }if(oldProduct){
          context.commit('addcounter',oldProduct)
        }else{
          payload.count=1
          payload.checked=false
          context.commit('addcar',payload)
        }}
}