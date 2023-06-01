import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaniniComponent } from './panini/panini.component';
import { PizzeComponent } from './pizze/pizze.component';

import { HomeComponent } from './home/home.component';

import { AccessoNegatoComponent } from './accesso-negato./accesso-negato..component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'panini', component: PaniniComponent ,canActivate: [authGuard]},
  { path: 'pizze', component: PizzeComponent ,canActivate: [authGuard]},
  {path: "login", component: LoginComponent},
  { path: 'accesso-negato', component: AccessoNegatoComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
