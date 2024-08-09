import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    let authReq = req;
    if (token) {
      authReq = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) });
    }
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle error
        return throwError(() => new Error(error.message || 'Server error'));
      })
    );
  }
}
