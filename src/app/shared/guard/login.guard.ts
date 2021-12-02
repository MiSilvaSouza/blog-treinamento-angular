import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;

    let loggedIn = Math.random() < 0.5;

    if(!loggedIn) {
      alert("Você precisa se identificar para comentar e será direcionado para página de Login");
      this.router.navigate(["/login"]);
    }

    return loggedIn;
  }

}
