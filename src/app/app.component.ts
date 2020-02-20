import {Component} from '@angular/core';
import {OnInit, DoCheck} from '@angular/core';
import {SigninService} from './services/signin.service';
import {AuthGuard} from './guards/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SigninService]
})
export class AppComponent implements OnInit, DoCheck {
  public title = 'ansis';
  public identity;
  public token;

  constructor(
    public _signInService: SigninService
  ) {
    this.identity = this._signInService.getIdentity();
    this.token = this._signInService.getToken();
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.loadUser();
  }

  loadUser() {
    this.identity = this._signInService.getIdentity();
    this.token = this._signInService.getToken();
  }
}
