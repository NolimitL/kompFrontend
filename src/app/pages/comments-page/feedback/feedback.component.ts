import { CommentsService } from 'src/app/shared/services/comments.service';
import { CommentsList, PhonePermit } from 'src/app/shared/interfaces';
import { Observable, Subscription } from 'rxjs';
import { RequestService } from 'src/app/shared/services/request.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit{

  form: FormGroup
  subService: Subscription
  options = []

  constructor(private reqService: RequestService,
              private commentService: CommentsService,
              private http: HttpClient) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(2)
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[+8]+[0-9]+$'),
        Validators.maxLength(13),
        Validators.minLength(11)
      ], this.asyncValidator.bind(this) ),
      type: new FormControl('', Validators.required),
      text: new FormControl('', [
        Validators.required,
        Validators.maxLength(1700)
      ])
    })

    if (this.reqService.getSvcPos.length === 0) {
      this.subService =  this.reqService.getServiceView()
        .subscribe(value => {
          this.options = value
          this.options = this.options.map(service => {
            return {
              name: service.name,
              title: service.title
            }
          })
          this.options.push({
            name: 'other',
            title: 'Другое'
          })
        })
    }else{
      this.options = this.reqService.getSvcPos.map(service => {
        return {
          name: service.name,
          title: service.title
        }
      })
      this.options.push({
        name: 'other',
        title: 'Другое'
      })
      console.log(this.options)
    }

  }

  submit(){
    if (this.form.valid) {
      const dataPost: CommentsList = {
        ...this.form.value,
        date: new Date()
      }
      console.log('Sended:', dataPost);
      this.commentService.postComment(dataPost).subscribe(v => console.log("data:", v))
    }
    this.form.reset()
  }


  asyncValidator(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    return this.http.post<PhonePermit>(`${environment.urlAPI}/extra/restrictedphones`, {
      phone: control.value
    })
      .pipe(
        map(data => {
          if (data.permit == false) {
            return {
              restricted: true
            }
          } else {
            return null
          }
        })
      )
  }

}
