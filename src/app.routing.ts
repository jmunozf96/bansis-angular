import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './app/components/login/login.component';
import {ErrorComponent} from './app/components/error/error.component';
import {InicioComponent} from './app/components/inicio/inicio.component';
import {AuthGuard} from './app/guards/auth.guard';
import {BodBodegaComponent} from './app/components/Bodega/bod-bodega/bod-bodega.component';

const appRoutes: Routes = [
  {path: '', component: InicioComponent, canActivate: [AuthGuard]},
  {path: 'inicio', component: InicioComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'logout/:sure', component: LoginComponent},
  {path: 'bodega', component: BodBodegaComponent},
  {path: '**', component: ErrorComponent, canActivate: [AuthGuard]}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
