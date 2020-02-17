import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserSignin} from '../models/user-signin';
import {global} from './global';

@Injectable()
export class SigninService {
  public url: string;
  public token;
  public identity;

  constructor(
    public _http: HttpClient
  ) {
    this.url = global.url;
  }

  test() {
    return 'Hola desde un servicio';
  }

  login(credentials, getToken = null): Observable<any> {

    if (getToken != null) {
      credentials.getToken = true;
    }

    let json = JSON.stringify(credentials);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url + 'bansis/login', params, {headers: headers});
  }

  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('_identity'));

    if (identity && identity != 'undefined') {
      this.identity = identity;
    } else {
      this.identity = null;
    }

    return this.identity;
  }

  getToken() {
    let token = localStorage.getItem('_token');

    if (token && token != 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }

    return this.token;
  }

}
