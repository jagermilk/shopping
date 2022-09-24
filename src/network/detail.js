import {request} from '@/network/request'
export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
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