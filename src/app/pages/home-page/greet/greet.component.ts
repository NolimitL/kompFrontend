import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss']
})
export class GreetComponent implements OnInit {

  triangle = 'assets/img/triangle.svg'

  constructor() { }

  ngOnInit(): void {
  }

}
