import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations:[
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
    ])
  ]
})
export class FooterComponent implements OnInit {

  toggle1 = true
  toggle2 = true

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      console.log('resize');
      if (window.innerWidth <= 600) {

      }
    })
  }

  toAnchor(anchor){
    if (this.router.url === '/home'
        || this.router.url === '/home#services'
        || this.router.url === '/home#contacts') {
      document.getElementById(anchor).scrollIntoView({
        behavior:"smooth",
        block:"start"
      })
    }else{
      this.router.navigate(['/home'], {fragment:anchor})
    }
  }

  changed(id:number){
    if (id === 1) {
      if (this.toggle1) {
        this.toggle1 = false
        this.toggle2 = true
      }else{
        this.toggle1 = true
        this.toggle2 = true
      }
    }
    if (id === 2) {
      if (this.toggle2) {
        this.toggle1 = true
        this.toggle2 = false
      }else{
        this.toggle1 = true
        this.toggle2 = true
      }
    }
  }


}
