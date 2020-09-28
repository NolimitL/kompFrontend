import { Subscription } from 'rxjs';
import { RequestService } from 'src/app/shared/services/request.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-feedbackslist',
  templateUrl: './feedbackslist.component.html',
  styleUrls: ['./feedbackslist.component.scss']
})
export class FeedbacksListComponent implements OnInit, OnDestroy {

  asideList = []
  subAside: Subscription

  constructor(private reqService: RequestService) { }

  ngOnInit(): void {
    if (this.reqService.getSvcPos.length == 0) {
      this.subAside = this.reqService.formServiceView()
        .subscribe(observer => this.asideList = observer)
    } else {
      this.asideList = this.reqService.getSvcPos
    }
    console.log("List aside:", this.asideList)
  }

  ngOnDestroy(){
    if (this.subAside) {
      this.subAside.unsubscribe()
    }
  }

}
