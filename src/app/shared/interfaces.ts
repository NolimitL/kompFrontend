export interface ServiceCard{
  _id: string
  id: number
  title: string
  name: string
  img: string
}
export interface ServiceInfo{
  _id: string
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
  _id: string,
  pos: {}
}
export interface CommentsList{
  allowed?: boolean
  _id?:string
  date:Date | string
  name:string //Name of user
  type:string //In what kind of services have work been done
  text:string
  phone:string
}
