import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlBhdHJvbnVzIGNvZGUgY2hhbGxlbmdlIiwiaWF0IjoxNTE2MjM5MDIyfQ.ySwvtbpSzdTimko0acSe03Tp6VadH1wCDhYxoNfgH3k`,
      },
    });

    return next.handle(req);
  }
}
