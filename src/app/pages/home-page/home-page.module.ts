import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { GreetComponent } from './greet/greet.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path:'', component:GreetComponent}
]

 @NgModule({
   declarations:[
    GreetComponent,
    InfoComponent
   ],
   imports:[RouterModule.forChild(routes)],
   exports:[RouterModule]
 })
 export class HomePageModule{}
