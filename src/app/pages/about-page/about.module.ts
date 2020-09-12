import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NgModule } from "@angular/core";

const routes: Routes = [
  {path:'', component:AboutComponent}
]

@NgModule({
  declarations:[
    AboutComponent
  ],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AboutModule{

}
