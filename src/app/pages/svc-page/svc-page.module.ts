import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { ServiceCardComponent } from './service-card/service-card.component';
import { AsideListResolver } from 'src/app/shared/resolvers/asidelist.resolver';
import { ServiceInfoResolver } from 'src/app/shared/resolvers/serviceinfo.resolver';

const routes: Routes = [
  {
    path:'',
    component:ServiceCardComponent,
    resolve:{
      asideList:AsideListResolver,
      serviceInf:ServiceInfoResolver
    }
  }
]

@NgModule({
  declarations:[ServiceCardComponent],
  imports:[
    SharedModule,
    RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class SVCPageModule{}
