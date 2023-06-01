import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaniniComponent } from './panini/panini.component';
import { PizzeComponent } from './pizze/pizze.component';
import { HomeComponent } from './home/home.component';

import { AccessoNegatoComponent } from './accesso-negato./accesso-negato..component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaniniComponent,
    PizzeComponent,
    HomeComponent,
    LoginComponent,
    AccessoNegatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
