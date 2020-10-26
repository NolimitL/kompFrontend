import { FlurDirective } from 'src/app/shared/directives/flur.directive';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  toggle1 = false
  toggle2 = false

  constructor(private router: Router) { }

  ngOnInit(): void {
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
  changed(){
    if (!this.toggle1) {
      this.toggle1 = true
    } else {
      this.toggle1 = false
    }
    if (!this.toggle2) {
      this.toggle2 = true
    } else{
      this.toggle2 = false
    }
  }
}
