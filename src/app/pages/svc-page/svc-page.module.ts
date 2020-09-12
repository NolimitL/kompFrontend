import { RouterModule, Routes } from '@angular/router';
import { ServiceCardComponent } from './service-card/service-card.component';
import { NgModule } from "@angular/core";

const routes: Routes = [
  {path:'', component:ServiceCardComponent}
]

@NgModule({
  declarations:[ServiceCardComponent],
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class SVCPageModule{}
