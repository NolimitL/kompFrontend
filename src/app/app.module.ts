import { SharedModule } from './shared/shared.module';
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptor } from './shared/services/headers.interceptor';
import ruLocale from '@angular/common/locales/ru';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { GreetComponent } from './pages/home-page/greet/greet.component';

registerLocaleData(ruLocale, 'ru')
const INTERCEPTOR: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HeadersInterceptor,
  multi: true
}

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
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [INTERCEPTOR],
  bootstrap: [AppComponent]
})
export class AppModule { }
