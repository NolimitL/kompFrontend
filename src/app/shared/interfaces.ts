export interface ServiceCard{
  id: string
  title: string
  name: string
  img: string
}
export interface ServiceInfo{
  name:string
  about:string
  "first-text":string
  title:string
  "types-of-jobs":{
    part:{
      type:string
      price:number
      extra:string
    }
  }
}
export interface PositionRel{
  position: number
  name: string
}
