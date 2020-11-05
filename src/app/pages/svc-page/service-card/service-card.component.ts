import { ActivatedRoute, Params, Router } from '@angular/router';
import { AfterContentChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { ServiceCard, ServiceInfo } from 'src/app/shared/interfaces';
import { Subscription } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
  animations: [
    trigger( 'slide', [
      transition(':enter', [
        style({
          transformOrigin:'top',
          transform:'rotateX(-90deg)'
        }),
        animate(400, style({
          transformOrigin:'top',
          transform:'rotateX(0deg)'
        }))
      ]),
      transition(':leave', [
        style({
          transformOrigin:'top',
          transform:'rotateX(0deg)'
        }),
        animate(400, style({
          transformOrigin:'top',
          transform:'rotateX(-90deg)'
        }))
      ])
    ]),
    trigger( 'slideUp', [
      transition(':enter', [
        style({
          transformOrigin:'bottom',
          transform:'rotateX(90deg)'
        }),
        animate(400, style({
          transformOrigin:'bottom',
          transform:'rotateX(0deg)'
        }))
      ]),
      transition(':leave', [
        style({
          transformOrigin:'bottom',
          transform:'rotateX(0deg)'
        }),
        animate(400, style({
          transformOrigin:'bottom',
          transform:'rotateX(-90deg)'
        }))
      ])
    ])
  ]
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
          // this.toggle = false
        }else if(window.innerWidth > 650){
          this.small = false
          this.big = true
          // this.toggle = true
        }
        console.log('t:', this.toggle);
        console.log('s:', this.small);
        console.log('b:', this.big);
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
      console.log('t:', this.toggle);
      console.log('s:', this.small);
      console.log('b:', this.big);
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
