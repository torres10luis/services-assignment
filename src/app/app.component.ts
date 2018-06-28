import { CounterService } from './counterService.service';
import { Component, OnInit } from '@angular/core';
// import { UserService } from './userService/userService.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
numeros: number = 0;


constructor(private counterService: CounterService) {}

ngOnInit() {
  this.numeros = this.counterService.numeros;
  this.counterService.updateNumeros.subscribe((numeros: number) => this.numeros = numeros);
}

}
