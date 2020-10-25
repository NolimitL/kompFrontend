import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss']
})
export class GreetComponent implements OnInit {

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
