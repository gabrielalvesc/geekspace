import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean > {
    if (this.authService.getRoles()[0] == 'ROLE_ADMIN') {
      return true;
    } else {
      this.router.navigate(['/'])
      return false;
    }
  }
  
}
