import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {UserSignin} from '../../models/user-signin';
import {SigninService} from '../../services/signin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SigninService]
})
export class LoginComponent implements OnInit {
  public title: string;
  public userSignin: UserSignin;
  public status: boolean;
  public token;
  public identity;

  constructor(
    private _signInService: SigninService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.title = '';
    this.userSignin = new UserSignin('', '');
    this.status = true;

    this.identity = this._signInService.getIdentity();
    this.token = this._signInService.getToken();
  }

  ngOnInit(): void {
    this.logout();

    if (this.identity != null && this.token != null) {
      this._router.navigate(['inicio']);
    }

  }

  ngOnSubmit(form): void {
    this._signInService.login(this.userSignin).subscribe(
      response => {
        if (!response.status && response.status != 'error') {
          this.token = response;
          this._signInService.login(this.userSignin, true).subscribe(
            response => {
              this.identity = response;
              this.status = true;

              localStorage.setItem('_token', this.token);
              localStorage.setItem('_identity', JSON.stringify(this.identity));

              this._router.navigate(['']);
            },
            error => {
              this.status = false;
              form.reset();
              // @ts-ignore
              $('#user').focus();
              console.log(<any> error);
            }
          );
        } else {
          this.status = false;
          // @ts-ignore
          $('#user').focus();
          form.reset();
        }
      },
      error => {
        this.status = false;
        // @ts-ignore
        $('#user').focus();
        form.reset();
        console.log(<any> error);
      }
    );
  }

  logout() {
    this._route.params.subscribe(
      params => {
        let logout = params['sure'];

        if (logout == 1) {
          localStorage.removeItem('_token');
          localStorage.removeItem('_identity');

          this.identity = null;
          this.token = null;

          this._router.navigate(['login']);
        }
      }
    );
  }

}
