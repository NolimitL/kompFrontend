import { CommentsList } from 'src/app/shared/interfaces';
import { CommentsService } from 'src/app/shared/services/comments.service';
import { Subscription } from 'rxjs';
import { RequestService } from 'src/app/shared/services/request.service';
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

  constructor(private reqService: RequestService,
              private commentService: CommentsService) { }

  ngOnInit(){
    if (this.reqService.getSvcPos.length == 0) {
      this.subAside = this.reqService.getServiceView()
        .subscribe(observer => {
          this.asideList = observer
          console.log("list", this.asideList);
        })
    } else {
      this.asideList = this.reqService.getSvcPos
    }

    if (this.commentService.comments.length === 0) {
      this.subCom = this.commentService.getCommentsList()
        .subscribe(observer => {
          this.comments = observer
        })
    } else {
      this.comments = this.commentService.comments
    }
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
