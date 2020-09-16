import { Component, OnInit } from '@angular/core';
import { ServiceCard } from 'src/app/shared/interfaces';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.scss']
})
export class ServiceViewComponent implements OnInit {

  services: ServiceCard[]

  constructor(private reqService: RequestService) { }

  ngOnInit(): void {
    this.reqService.formServiceView().subscribe(listOfService => {
      this.services = listOfService
    })
  }


}