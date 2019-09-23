import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService
    ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authRequest: any;
        const token = this.authService.getToken();

        if (req.url.startsWith('http://viacep.com.br/ws/')) {
            return next.handle(req);
        }

        if (this.authService.isLoggedIn()) {

            authRequest = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return next.handle(authRequest);
        } else {
            return next.handle(req);
        }
    }
}