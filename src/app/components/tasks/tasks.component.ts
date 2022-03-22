import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: string[] = [
    'New page for integrations',
    'Matching improvement',
    'Public API',
    'Reports',
    'Show real answers from finAPI',
    'Show deviation icons if there is no committed plan'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
