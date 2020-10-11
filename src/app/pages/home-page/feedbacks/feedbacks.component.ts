import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommentsList } from 'src/app/shared/interfaces';
import { CommentsService } from 'src/app/shared/services/comments.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit, OnDestroy {

  commentsList:CommentsList[] = []
  sub: Subscription

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.sub = this.commentsService.getCommentsList().subscribe(observer => {
      this.commentsList = observer
      this.commentsList = this.commentsList.slice(0, 4)
    })
  }

  ngOnDestroy(){
    if (this.sub) {
      this.sub.unsubscribe
    }
  }

}
