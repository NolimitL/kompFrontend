import { ActivatedRoute, Params, Router } from '@angular/router';
import { AfterContentChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { ServiceCard, ServiceInfo } from 'src/app/shared/interfaces';
import { RequestService } from 'src/app/shared/services/request.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit, OnDestroy, AfterContentChecked{

  subParams: Subscription
  subSPos: Subscription
  subService: Subscription

  paramsName = ''
  asideListCard: ServiceCard[] = []
  serviceInfo: ServiceInfo[] = []
  serviceShowedComponent: ServiceInfo

  constructor(
    private reqService: RequestService,
    private router: Router, //for back button
    private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.reqService.getSvcPos.length === 0) {
      (async () => {
        this.asideListCard = await this.reqService.getServiceView().toPromise()
      })()
    } else {
      this.asideListCard = this.reqService.getSvcPos
    }
    this.subParams = this.actRoute.params.subscribe((params: Params) => {
      this.paramsName = params.name
      this.subService = this.reqService.getServiceInfo().subscribe(obj => {
        this.serviceInfo = obj
        this.serviceShowedComponent = this.serviceInfo.find(point => point.name === this.paramsName)
      })
    })
  }

  ngAfterContentChecked(){
    this.serviceShowedComponent = this.serviceInfo.find(point => point.name == this.paramsName)
  }

  ngOnDestroy(){
    if (this.subParams) {
      this.subParams.unsubscribe()
    }
    if (this.subSPos) {
      this.subSPos.unsubscribe()
    }
    if (this.subService) {
      this.subService.unsubscribe()
    }
  }

}
