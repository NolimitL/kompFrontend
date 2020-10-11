import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { PositionRel, ServiceInfo } from './../interfaces';
import { ServiceCard } from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment';


@Injectable({providedIn:"root"})
export class RequestService{

  serviceView: ServiceCard[] = []

  constructor(private http: HttpClient){}

  get getSvcPos(){
    return this.serviceView
  }

  getServicePosition(listCard: ServiceCard[]): Observable<ServiceCard[]> | null{
    return this.http.get(`${environment.urlAPI}/extra/position`)
      .pipe(
        map((position: PositionRel) => {
          listCard.forEach(card => {
            card.id = +position.pos[card.name]
          })
          this.serviceView = listCard.sort((a, b) => a.id - b.id)
          return this.serviceView
        })
      )
  }

  getServiceView(): Observable<ServiceCard[]> | null{
    return this.http.get<ServiceCard[]>(`${environment.urlAPI}/extra/card-view`)
      .pipe(
        switchMap((list) => {
          return this.getServicePosition(list)
        })
      )
  }

  getServiceInfo(): Observable<ServiceInfo[]> | null{
    return this.http.get<ServiceInfo[]>(`${environment.urlAPI}/extra/service-info`)
  }

}
