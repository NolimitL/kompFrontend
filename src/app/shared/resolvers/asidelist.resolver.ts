import { RequestService } from 'src/app/shared/services/request.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ServiceCard } from 'src/app/shared/interfaces';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AsideListResolver implements Resolve<ServiceCard[]>{

  constructor(private reqService: RequestService){}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): ServiceCard[] | Observable<ServiceCard[]> | Promise<ServiceCard[]> {
    if (this.reqService.getSvcPos.length == 0) {
      return this.reqService.getServiceView()
    } else {
      return this.reqService.getSvcPos
    }
  }

}
