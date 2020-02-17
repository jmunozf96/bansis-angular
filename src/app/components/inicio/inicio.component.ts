import {Component, OnInit} from '@angular/core';
import {SigninService} from '../../services/signin.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [SigninService]
})
export class InicioComponent implements OnInit {
  public identity;
  public token;

  constructor(
    private _signinService: SigninService
  ) {
    this.identity = this._signinService.getIdentity();
  }

  ngOnInit(): void {

  }

}
