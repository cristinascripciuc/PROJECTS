import { Component, OnInit } from '@angular/core';

import { MenuService } from '../menu.service';
import { Panino } from '../models/panino';

@Component({
  selector: 'app-panini',
  templateUrl: './panini.component.html',
  styleUrls: ['./panini.component.css']
})
export class PaniniComponent implements OnInit {
  panini: Panino[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.panini = this.menuService.getPanini();
  }
}
