import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';


//definisco la funzione guardia di autenticazione
export const authGuard: CanActivateFn = (route, state) => {

//inietto i servizi necessari
  const authService = inject(AuthenticationService);
  const router = inject(Router);

 // Controllo il ruolo dell'utente e concessione o negazione dell'accesso
  if (authService.controllaRuolo()) {
    return true;
  } else {
    return router.navigate(['/accesso-negato']);
   }
};
