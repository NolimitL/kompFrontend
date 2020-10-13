import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbacksListComponent } from './feedbackslist/feedbackslist.component';
import { DeclinationPipe } from 'src/app/shared/pipes/declination.pipe';
import { FeedbacksSortPipe } from 'src/app/shared/pipes/feedbacks-sort.pipe';


const routes: Routes = [
  {path:'', redirectTo:'', pathMatch:'full', children:[
    {path:'', component:FeedbacksListComponent},
  ]},
  {path:'add-feedback', component:FeedbackComponent}
]

@NgModule({
  declarations:[
    FeedbackComponent,
    FeedbacksListComponent,
    DeclinationPipe,
    FeedbacksSortPipe
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CommentsModule{}
