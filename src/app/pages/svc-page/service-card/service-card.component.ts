import { ActivatedRoute, Params, Router } from '@angular/router';
import { AfterContentChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { ServiceCard, ServiceInfo } from 'src/app/shared/interfaces';
import { Subscription } from 'rxjs';
import { slide } from 'src/app/shared/animate.const';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
  animations: slide
})
export class ServiceCardComponent implements OnInit, OnDestroy, AfterContentChecked{

  subParams: Subscription
  subService: Subscription
  subActRoute: Subscription

  paramsName = ''
  toggle = false
  small = false
  big = true
  asideListCard: ServiceCard[] = []
  serviceInfo: ServiceInfo[] = []
  serviceShowedComponent: ServiceInfo

  constructor(
    private router: Router, //for back button
    private actRoute: ActivatedRoute) {
      window.addEventListener('resize', () => {
        if (window.innerWidth <= 650) {
          this.small = true
          this.big = false
        }else if(window.innerWidth > 650){
          this.small = false
          this.big = true
        }
      })
      if (window.innerWidth <= 650) {
        this.small = true
        this.big = false
        this.toggle = false
      } else if(window.innerWidth > 650){
        this.small = false
        this.big = true
        this.toggle = true
      }
    }

    ngOnInit() {
      this.subActRoute = this.actRoute.data.subscribe(data => {
      this.asideListCard = data.asideList
    })
    this.subParams = this.actRoute.params.subscribe((params: Params) => {
      this.paramsName = params.name
      this.subService = this.actRoute.data.subscribe(data => {
        this.serviceInfo = data.serviceInf
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
    if (this.subService) {
      this.subService.unsubscribe()
    }
    if (this.subActRoute) {
      this.subActRoute.unsubscribe()
    }
  }

}
