export default{
    addcounter(state,payload){
        payload.count++
      },
      addcar(state,payload){
        state.cartlist.push(payload)
      },
      changecheck(state,payload){
        const item=state.cartlist.find(item=>item.iid==payload)
        item.checked=!item.checked
      }
}