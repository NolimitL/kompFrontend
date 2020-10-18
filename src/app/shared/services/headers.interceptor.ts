import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class HeadersInterceptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const cloned = req.clone({
      // headers: req.headers.append('Origin','http:/localhost:4200')
    })
    console.log('Interceptor:', req);
    return next.handle(cloned)
  }

}
