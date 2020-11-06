import { ActivatedRoute } from '@angular/router';
import { CommentsList } from 'src/app/shared/interfaces';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { slide } from 'src/app/shared/animate.const';

@Component({
  selector: 'app-feedbackslist',
  templateUrl: './feedbackslist.component.html',
  styleUrls: ['./feedbackslist.component.scss'],
  animations: slide
})
export class FeedbacksListComponent implements OnInit, OnDestroy{

  asideList = []
  comments: CommentsList[] = []
  subAside: Subscription
  subCom: Subscription
  paramsName = ''
  pipeFilter = ''
  toggle = false
  big = true

  constructor(private activeRoute: ActivatedRoute) {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 650) {
        this.big = false
      }else if(window.innerWidth > 650){
        this.big = true
      }
    })
    if (window.innerWidth <= 650) {
      this.big = false
      this.toggle = false
    } else if(window.innerWidth > 650){
      this.big = true
      this.toggle = true
    }
  }

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
