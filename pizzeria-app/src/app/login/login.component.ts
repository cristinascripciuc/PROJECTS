/*import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GestioneUtentiService } from '../gestione-utenti.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userServ: GestioneUtentiService, private router: Router){
  }

  loggedIn: boolean | undefined;

  onLogin(){
    this.loggedIn = true;
    this.userServ.login();
    this.router.navigate(['/']);
  }

  onLogout(){
    this.loggedIn = false;
    this.userServ.logout();
  }
}*/
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GestioneUtentiService } from '../gestione-utenti.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  loggedIn: boolean = false;

  constructor(private userServ: GestioneUtentiService, private router: Router) {}

  onLogin() {
    this.loggedIn = this.userServ.login(this.username, this.password);
    if (this.loggedIn) {
      this.router.navigate(['/']);
    } else {
      // Mostra un messaggio di errore o esegui altre azioni in caso di login fallito
    }
  }

  onLogout() {
    this.loggedIn = false;
    this.userServ.logout();
    this.router.navigate(['/login']);
  }
}
