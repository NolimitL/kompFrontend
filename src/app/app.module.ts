import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import ruLocale from '@angular/common/locales/ru';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { GreetComponent } from './pages/home-page/greet/greet.component';

registerLocaleData(ruLocale, 'ru')

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    FooterComponent,
    ErrorPageComponent,
    GreetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
