import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // let loggedIn = Math.random() < 0.5;

      // if (!loggedIn) {
      //      alert("Você não está logado e será direcionado para tela de login");
      //     this.router.navigate(["/admin/login"]);
      //  }

      // return loggedIn;

      const currentUser = this.authenticationService.currentUserValue

      if(currentUser) {
        return true;
      }

      this.router.navigate(['/admin/login'], {queryParams: {returnUrl: state.url}})

      return false;
  }

}
