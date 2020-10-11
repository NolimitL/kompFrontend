import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { CommentsList } from '../interfaces';

@Injectable({providedIn:'root'})
export class CommentsService{

  commentsArr:CommentsList[] = []

  constructor(private http: HttpClient){}

  get comments(){
    return this.commentsArr
  }

  getCommentsList(): Observable<CommentsList[]>{
    return this.http.get<CommentsList[]>(`${environment.urlAPI}/comments`)
      .pipe(
        map(arr => {
          arr.forEach(comment => comment.date = new Date(comment.date))
          this.commentsArr = arr
          return arr
        })
      )
  }


}
