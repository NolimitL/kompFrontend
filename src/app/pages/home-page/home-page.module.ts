import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClipboardModule } from 'ngx-clipboard';

import { SharedModule } from './../../shared/shared.module';
import { InfoComponent } from './info/info.component';
import { ServiceViewComponent } from './service-view/service-view.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { HoverDirective } from 'src/app/shared/directives/hover.directive';
import { FlurDirective } from 'src/app/shared/directives/flur.directive';

const routes: Routes = [
  {path:'', component:ServiceViewComponent}
]

 @NgModule({
   declarations:[
    InfoComponent,
    ServiceViewComponent,
    FeedbacksComponent,
    FlurDirective,
    HoverDirective
   ],
   imports:[
     CommonModule,
     SharedModule,
     ClipboardModule,
     RouterModule.forChild(routes)
    ],
   exports:[RouterModule],
   providers:[]
 })
 export class HomePageModule{}
