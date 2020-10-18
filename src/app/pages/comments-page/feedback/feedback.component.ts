import { CommentsService } from 'src/app/shared/services/comments.service';
import { CommentsList } from 'src/app/shared/interfaces';
import { from, Subscription } from 'rxjs';
import { RequestService } from 'src/app/shared/services/request.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  form: FormGroup
  subService: Subscription
  options = []

  constructor(private reqService: RequestService,
              private commentService: CommentsService) { }

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
      ]),
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
      this.commentService.postComment(dataPost).subscribe(v => console.log("data:", v))
    }
    this.form.reset()
  }

}
