import { Injectable } from '@angular/core';
import { Pizza } from './models/pizza';
import { Panino } from './models/panino';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private pizze: Pizza[] = [
    new Pizza(1, 'Margherita', 'Pomodoro, mozzarella, basilico', 5.99, 'assets/pizza_margherita.jpeg'),
    new Pizza(2, 'Capricciosa', 'Pomodoro, mozzarella, prosciutto cotto, carciofi, olive', 9.99, 'assets/pizza_funghi.jpeg')
  ];

  private panini: Panino[] = [
    new Panino(1, 'Panino Classico', 'Prosciutto, formaggio, lattuga, pomodoro', 5.99, 'assets/panino_classico.jpeg'),
    new Panino(2, 'Panino Vegetariano', 'Avocado, cetrioli, formaggio spalmabile', 6.99, 'assets/panino_avocado.jpeg')
  ];

  getPizze(): Pizza[] {
    return this.pizze;
  }

  getPanini(): Panino[] {
    return this.panini;
  }


}
