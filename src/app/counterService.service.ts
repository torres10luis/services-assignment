import { EventEmitter } from '@angular/core';

export class CounterService {
  // tslint:disable-next-line:no-inferrable-types
  numeros: number = 0;
  updateNumeros = new EventEmitter<number>();

  constructor() {

  }
  onClickUser() {
    this.numeros++;
    console.log(this.numeros);
    this.updateNumeros.emit(this.numeros);
   }
}
