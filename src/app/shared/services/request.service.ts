import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { PositionRel, ServiceInfo } from './../interfaces';
import { ServiceCard } from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment';


@Injectable({providedIn:"root"})
export class RequestService{

  servicesMainInfo: ServiceCard[] = []

  constructor(private http: HttpClient){}

  get getSvcPos(){
    return this.servicesMainInfo
  }

  //Service
  getServicePosition(listCard: ServiceCard[]): Observable<ServiceCard[]>{
    return this.http.get(`${environment.urlFbDb}/position-cards.json`)
    .pipe(
      map((list:PositionRel) => {
        const position = []
        Object.entries(list).forEach(pos => {
          const obj = {name:pos[0], position:+pos[1]}
          position.push(obj)
        })
        listCard.forEach(card => {
          const obj = position.find(pos => pos['name']=== card['name'])
          card.id = obj['position']
        })
        listCard.sort((a,b) => +a.id - +b.id)
        this.servicesMainInfo = listCard
        // console.log("List:",this.servicesMainInfo)
        return listCard
      })
      )
  }
  getServiceList(): Observable<ServiceCard[]>{
    return this.http.get(`${environment.urlServiceCard}/card-view.json`)
      .pipe(
        map(response => {
          const cardList = []
          Object.keys(response).forEach(key => {
            const obj: ServiceCard = {
              name: key,
              id: null,
              title: response[key].title,
              img: response[key].img
            }
            cardList.push(obj)
          })
          return cardList
        })
      )
  }
  formServiceView(): Observable<ServiceCard[]>{
    return this.getServiceList().pipe(
      switchMap((list) => {
        return this.getServicePosition(list)
      })
    )
  }

  getServiceInfo(): Observable<ServiceInfo[]>{
    return this.http.get(`${environment.urlServiceCard}/service-info.json`)
      .pipe(map(obj => {
        const arr = []
        Object.keys(obj).forEach(s => arr.push({...obj[s]}) )
        return arr
      }))
  }

}
