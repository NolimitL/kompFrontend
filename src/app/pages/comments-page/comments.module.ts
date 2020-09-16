import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { NgModule } from "@angular/core";

const routes: Routes = [
  {path:'', component:FeedbackComponent}
]

@NgModule({
  declarations:[FeedbackComponent],
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class CommentsModule{}
