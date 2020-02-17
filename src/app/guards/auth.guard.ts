import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  public token;
  public identity;

  constructor(
    private _router: Router
  ) {
  }

  canActivate(): boolean {
    this.identity = JSON.parse(localStorage.getItem('_identity'));
    this.token = localStorage.getItem('_token');

    if (this.identity == null && this.token == null) {
      this._router.navigate(['login']);
      return false;
    }
    return true;
  }
}
