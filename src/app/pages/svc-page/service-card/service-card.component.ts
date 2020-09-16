import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { PositionRel, ServiceCard, ServiceInfo } from 'src/app/shared/interfaces';
import { RequestService } from 'src/app/shared/services/request.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit, OnDestroy, OnChanges{

  mainCardInfo: ServiceCard[] = []
  serviceInfo: ServiceInfo[] = []
  subP: Subscription
  subS: Subscription
  paramsName = ''

  constructor(
    private reqService: RequestService,
    private router: Router, //for back button
    private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.mainCardInfo = this.reqService.getSvcPos
    this.subP = this.actRoute.params.subscribe((params: Params) => {
      this.paramsName = params.name
    })
    this.reqService.getServiceInfo().subscribe(obj => {
      console.log('array-obj:', obj)
      this.serviceInfo = obj
    })
    // console.log('Card list: ', this.reqService.getSvcPos)
  }
  ngOnChanges(){
    
  }
  ngOnDestroy(){
    if (this.subP) {
      this.subP.unsubscribe()
    }
  }

}
