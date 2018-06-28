import { Injectable } from '@angular/core';
import { CounterService } from './counterService.service';

@Injectable()

export class UserService {

  activeUsers = ['luis', 'roy', 'angel'];
  inactiveUsers = ['juan ', ' matt', 'robert'];

  // tslint:disable-next-line:no-inferrable-types
  numeros: number = 0;

  constructor(private counterService: CounterService) {

  }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.onClickUser();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.onClickUser();
  }
}


