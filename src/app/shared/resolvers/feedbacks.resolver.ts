import { CommentsService } from 'src/app/shared/services/comments.service';
import { CommentsList } from 'src/app/shared/interfaces';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FeedbacksResolver implements Resolve<CommentsList[]>{

  constructor(private commentsService: CommentsService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): CommentsList[] | Observable<CommentsList[]> | Promise<CommentsList[]> {
    if (this.commentsService.comments.length == 0) {
      return this.commentsService.getCommentsList()
    } else {
      return this.commentsService.comments
    }
  }

}
