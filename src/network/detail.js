import {request} from '@/network/request'
export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}
export function getrecommend(){
    return request({
        url:'/recommend'
    })
}
export class GoodsInfo{
    constructor(iteminfo,columns,services){
        this.title=iteminfo.title
        this.desc=iteminfo.desc
        this.lowNowPrice=iteminfo.lowNowPrice
        this.oldPrice=iteminfo.oldPrice
        this.discountDesc=iteminfo.discountDesc
        this.columns=columns
        this.services=services
        this.price=iteminfo.price
    }
}
export class ShopInfo{
    constructor(shopInfo){
        this.logo=shopInfo.shopLogo
        this.name=shopInfo.name
        this.fans=shopInfo.cFans
        this.sells=shopInfo.cSells
        this.score=shopInfo.score
        this.goodsCount=shopInfo.goodsCount
    }
}
export class GoodsParam{
    constructor(info,rule){
        this.image=info.images? info.images[0]:'',
        this.infos=info.set
        this.sizes=rule.tables
    }
}
export class commend{
    constructor(rate){
        if(rate.cRate!==0){
          this.rate=rate.cRate,
            this.list=rate.list[0]          
        }
        
    }
}