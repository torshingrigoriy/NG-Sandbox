import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: string[] = [
    'Albert',
    'Petr',
    'Vitaliy',
    'Oleksandr',
    'Vladimir',
    'Eduard'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
