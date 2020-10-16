import { ActivatedRoute } from '@angular/router';
import { CommentsList } from 'src/app/shared/interfaces';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-feedbackslist',
  templateUrl: './feedbackslist.component.html',
  styleUrls: ['./feedbackslist.component.scss']
})
export class FeedbacksListComponent implements OnInit, OnDestroy{

  asideList = []
  comments: CommentsList[] = []
  subAside: Subscription
  subCom: Subscription
  paramsName = ''
  pipeFilter = ''

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(){
    this.subCom = this.activeRoute.data.subscribe(data => {
      this.comments = data.commentsRes
    })
    this.subAside = this.activeRoute.data.subscribe(data => {
      this.asideList = data.asideList
    })
  }

  ngOnDestroy(){
    if (this.subAside) {
      this.subAside.unsubscribe()
    }
    if (this.subCom){
      this.subCom.unsubscribe()
    }
  }

}
