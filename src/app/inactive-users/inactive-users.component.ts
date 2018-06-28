import { Component, OnInit } from '@angular/core';

import { UserService } from '../../app/userService.service';
import { CounterService } from './../counterService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  // @Output() userSetToActive = new EventEmitter<number>();

  users: Array<string> = [];



  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
    // this.counterService.onClickUser();
  }

  constructor(private userService: UserService, private counterService: CounterService) {

  }

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }


}
