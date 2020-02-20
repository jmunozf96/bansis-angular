import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing, appRoutingProviders} from '../app.routing';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {ErrorComponent} from './components/error/error.component';
import {InicioComponent} from './components/inicio/inicio.component';

import {AuthGuard} from './guards/auth.guard';
import { BodBodegaComponent } from './components/Bodega/bod-bodega/bod-bodega.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    InicioComponent,
    BodBodegaComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
