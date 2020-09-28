export interface ServiceCard{
  id: string
  title: string
  name: string
  img: string
}
export interface ServiceInfo{
  name:string
  title:string
  about:string
  "types-of-jobs":[{
    component:string
    price:number
    extra?:string
  }]
}
export interface PartJob{
  component:string
  price:number
  extra:string
}
export interface PositionRel{
  position: number
  name: string
}
export interface CommentsList{
  id:number
  name:string //Name of user
  date:Date
  type:string //What work have been done
  text:string
}
