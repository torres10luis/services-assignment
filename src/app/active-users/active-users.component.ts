import { Component, OnInit } from '@angular/core';

import { CounterService } from './../counterService.service';
import { UserService } from '../../app/userService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[] = [];

  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
    // this.counterService.onClickUser();

  }

  constructor(private userService: UserService, private counterService: CounterService) {
  }

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }

}
