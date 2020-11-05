import { HostListener } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [
    trigger('stand', [
      transition(':enter', [
        style({
          perspectiveOrigin:'top center',
          transformOrigin:'top',
          transform:'translateY(-80px) rotateX(-90deg)'
        }),
        animate(500)
      ]),
      transition(':leave', [
        style({
          transformOrigin:'top',
          transform:'rotateX(0deg)'
        }),
        animate(500, style({
          transformOrigin:'top',
          transform:'rotateX(-90deg)'
        }))
      ])
    ])
  ]
})
export class MainLayoutComponent implements OnInit {

  toggle = false
  decreased = false
  @HostListener('window:scroll') scrolling(){
    if (pageYOffset >= 200) {
      this.decreased = true
    }else{
      this.decreased = false
    }
  }

  constructor(
    private router: Router) { }

  ngOnInit(){
  }

  toAnchor(anchor){
    if (this.router.url === '/home'
        || this.router.url === '/home#services'
        || this.router.url === '/home#contacts') {
      document.getElementById(anchor).scrollIntoView({
        behavior:"smooth",
        block:"center"
      })
    }else{
      this.router.navigate(['/home'], {fragment:anchor})
    }
  }

  stopedScrolling(){
    document.querySelector("body").classList.toggle('lock')
    this.toggle = !this.toggle
  }
}
