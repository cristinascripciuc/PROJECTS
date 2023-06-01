import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestioneUtentiService } from '../gestione-utenti.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string | null = null;

  constructor(private userServ: GestioneUtentiService, private router: Router) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('usernameUtentLoggato');
  }

  onLogout(): void {
    this.userServ.logout();
    this.router.navigate(['/login']);
  }
}
