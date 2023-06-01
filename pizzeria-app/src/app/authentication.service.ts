import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
 // Controllo il ruolo dell'utente loggato
  controllaRuolo(): boolean{
    const roleUtenteLoggato = localStorage.getItem('roleUtenteLoggato');

    if(roleUtenteLoggato === "Admin"){
      return true;// L'utente loggato è un amministratore
    }else{
      return false;// L'utente loggato non è un amministratore
    }
  }



}
