import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { GreetComponent } from './pages/home-page/greet/greet.component';
import { AsideListResolver } from './shared/resolvers/asidelist.resolver';
import { ServiceInfoResolver } from './shared/resolvers/serviceinfo.resolver';

const routes: Routes = [
  {path:'', component:MainLayoutComponent, children:[
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home', component:GreetComponent, children:[
      {
        path:'',
        loadChildren: () => import('./pages/home-page/home-page.module')
          .then(homemodule => homemodule.HomePageModule)
      }]
    },
    {path:'services',redirectTo:'/home', pathMatch:'full'},
    {
      path:'services/:name',
      loadChildren: () => import('./pages/svc-page/svc-page.module')
        .then(servicemodule => servicemodule.SVCPageModule)
    },
    {
      path:'comments',
      loadChildren: () => import('./pages/comments-page/comments.module')
      .then(commentsmodule => commentsmodule.CommentsModule)
    },
    {
      path:'about',
      loadChildren: () => import('./pages/about-page/about.module')
        .then(aboutmodule => aboutmodule.AboutModule)
    },
    {path:'error', component: ErrorPageComponent},
    {path:'**', redirectTo:'/error'}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: "top",
      // anchorScrolling: 'enabled', //для перехода к фрагменту
      scrollOffset: [0, 0]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
