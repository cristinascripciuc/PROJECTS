import { Component, OnInit } from '@angular/core';

import { MenuService } from '../menu.service';
import { Pizza } from '../models/pizza';

@Component({
  selector: 'app-pizze',
  templateUrl: './pizze.component.html',
  styleUrls: ['./pizze.component.css']
})
export class PizzeComponent implements OnInit {
  pizze: Pizza[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.pizze = this.menuService.getPizze();
  }
}


