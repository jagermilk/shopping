export default{

      addcart(context,payload){
        return new Promise((resolve,reject)=>{
          let oldProduct=null
        for(let item of context.state.cartlist){
          if(item.iid===payload.iid){
            oldProduct=item;
          }
        }if(oldProduct){
          context.commit('addcounter',oldProduct)
          resolve('当前商品数量+1~')
        }else{
          payload.count=1
          payload.checked=false
          context.commit('addcar',payload)
          resolve('已添加新的商品～')
        }}

          
        )}}
        
