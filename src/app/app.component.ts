import {
  AfterViewInit,
  Component,
  ComponentRef,
  OnInit, ViewChild
} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {ColorsComponent} from "./components/colors/colors.component";
import {NumbersComponent} from "./components/numbers/numbers.component";
import {TasksComponent} from "./components/tasks/tasks.component";
import {UsersComponent} from "./components/users/users.component";
import {FormComponent} from "./components/form/form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Sandbox';
  connectedWidgets: any[] = [];
  allWidgets: any[] = [];
  settingMode: boolean = true;
  componentRef: ComponentRef<any> | undefined;
  @ViewChild('availableWidgets') availableWidgets: any;

  constructor() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.connectedWidgets, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.getConnectedWidgets();
  }

  ngAfterViewInit(): void {
  }

  getAllWidgets() {
    return [
      {id: 1, name: 'Colors', component: ColorsComponent},
      {id: 2, name: 'Numbers', component: NumbersComponent},
      {id: 3, name: 'Tasks', component: TasksComponent},
      {id: 4, name: 'Form', component: FormComponent},
      {id: 5, name: 'Users', component: UsersComponent}
    ]
  }

  getConnectedWidgets() {
    let allWidgets = this.getAllWidgets();
    let connectedWidgets = [
      {id: 1, size: 'fillHalf'},
      {id: 3, size: 'fillAll'},
      {id: 4, size: 'fillHalf'},
    ];
    this.connectedWidgets = connectedWidgets.map(cw => allWidgets.find(aw => aw.id === cw.id));
    this.allWidgets = allWidgets.filter((aw: any) => !connectedWidgets.find(cw => cw.id == aw.id));
  }

  remove(removedWidget: any) {
    this.connectedWidgets = this.connectedWidgets.filter(w => w.id !== removedWidget.id);
    this.allWidgets.push(removedWidget);
  }

  addWidget(newWidget: any) {
    this.connectedWidgets.push({...newWidget, size: 'fillHalf'});
    this.allWidgets = this.allWidgets.filter(aw => aw.id != newWidget.id);
  }

  log() {
    console.log(this.availableWidgets.selectedOptions.value)
  }
}
