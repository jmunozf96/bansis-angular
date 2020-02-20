import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {global} from './global';

@Injectable()
export class BodegaService {
  public url: string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = global.url;
  }

  getBodegas(): Observable<any> {
    return this._http.get(this.url + 'bod_bodega');
  }
}
