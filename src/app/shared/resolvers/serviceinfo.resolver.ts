import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RequestService } from 'src/app/shared/services/request.service';
import { ServiceInfo } from 'src/app/shared/interfaces';

@Injectable({providedIn:'root'})
export class ServiceInfoResolver implements Resolve<ServiceInfo[]>{

  constructor(private reqService: RequestService){}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): ServiceInfo[] | Observable<ServiceInfo[]> | Promise<ServiceInfo[]> {
    return this.reqService.getServiceInfo()
  }

}
