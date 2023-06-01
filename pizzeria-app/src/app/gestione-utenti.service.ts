import { Injectable } from '@angular/core';
import { Utente } from './models/utente';

@Injectable({
  providedIn: 'root'
})
export class GestioneUtentiService {

  utenti: Utente[] = [
    {
      id: 1,
      username: "Cristina",
      password: "12345",
      role: 'Admin'
    },
    {
      id: 2,
      username: "Leonardo",
      password: "54321",
      role: 'User'
    },

  ];

  constructor() { }

  login(username: string, password: string): boolean {
    //cerco l'utente che corrisponde alle credenziali
    const utenteLoggato = this.utenti.find(utente => utente.username === username && utente.password === password);
    if (utenteLoggato) {
      // Se l'utente è stato trovato, salvo il ruolo e l'username nell'localStorage
      localStorage.setItem("roleUtenteLoggato", utenteLoggato.role);
      localStorage.setItem("usernameUtentLoggato", utenteLoggato.username);
      return true;// il login e avvenuto con successo
    }
    return false;
  }
//cancello i dati al logout
  logout() {
    localStorage.clear();
  }
}
