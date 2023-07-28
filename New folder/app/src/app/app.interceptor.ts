import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { apiUrl } from './constants';

export class AppInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request = req;

    if (req.url.startsWith('/api')) {
      request = req.clone({
        url: req.url.replace('/api', apiUrl),
      });
    }

    return next.handle(request).pipe(tap((req) =>{
        if (req instanceof HttpRequest) {
            console.log(req);
        }
    } ));
  }
}
