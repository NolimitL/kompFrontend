import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { CommentsList } from '../interfaces';

@Injectable({providedIn:'root'})
export class CommentsService{

  constructor(private http: HttpClient){}

  getCommentsList(): Observable<CommentsList[]>{
    return this.http.get<[]>(`${environment.urlFbDb}/comments.json`)
      .pipe(
        map(arr => {
          let listComments:CommentsList[] = []
          Object.keys(arr).forEach(key => {
            const obj:CommentsList = {
              ...arr[key],
              id:key,
              date: new Date(arr[key].date)
            }
            listComments.push(obj)
          })
          return listComments
        })
      )
  }


}
