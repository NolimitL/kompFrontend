import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { ServiceCardComponent } from './service-card/service-card.component';

const routes: Routes = [
  {path:'', component:ServiceCardComponent}
]

@NgModule({
  declarations:[ServiceCardComponent],
  imports:[
    SharedModule,
    RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class SVCPageModule{}
