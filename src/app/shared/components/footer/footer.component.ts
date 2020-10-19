import { FlurDirective } from 'src/app/shared/directives/flur.directive';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  visible: boolean = false
  visibleL: boolean = false

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

}
