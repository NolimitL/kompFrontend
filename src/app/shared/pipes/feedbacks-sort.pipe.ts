import { CommentsList } from 'src/app/shared/interfaces';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'sort',
  pure: false
})
export class FeedbacksSortPipe implements PipeTransform{
  transform(comments: CommentsList[], sortBy: string = ''): CommentsList[] {
    if (!sortBy) {
      return comments
    }else{
      return comments.filter(comment => comment.type === sortBy)
    }
  }

}
