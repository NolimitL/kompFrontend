import { GreetComponent } from './pages/home-page/greet/greet.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';


const routes: Routes = [
  {path:'', component:MainLayoutComponent, children:[
    {path:'', redirectTo:'/home', pathMatch:'full'},
    // {path:'home', component:GreetComponent},
    {path:'home',
    loadChildren: () => import('./pages/home-page/home-page.module')
      .then(homemodule => homemodule.HomePageModule)},
    {path:'about',
    loadChildren: () => import('./pages/about-page/about.module')
      .then(aboutmodule => aboutmodule.AboutModule)},
    {path:'services',
    loadChildren: () => import('./pages/svc-page/svc-page.module')
      .then(servicemodule => servicemodule.SVCPageModule)},
    {path:'error', component: ErrorPageComponent},
    {path:'**', redirectTo:'/error'}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
