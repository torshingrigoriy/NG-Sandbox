import {
  AfterViewChecked,
  AfterViewInit,
  Component, ComponentFactory,
  ComponentFactoryResolver, ComponentRef, ElementRef,
  OnInit, Renderer2,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {ColorsComponent} from "./components/colors/colors.component";
import {NumbersComponent} from "./components/numbers/numbers.component";
import {TasksComponent} from "./components/tasks/tasks.component";
import {UsersComponent} from "./components/users/users.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Sandbox';
  widgets: any[] = [
    {component: ColorsComponent, size: 'fillHalf'},
    {component: NumbersComponent, size: 'fillAll'},
    {component: TasksComponent, size: 'fillHalf'}
  ]

  @ViewChild("widgetsContainer", { read: ViewContainerRef }) container: any;
  componentRef: ComponentRef<any> | undefined;
  constructor(
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private elementRef: ElementRef
  ) {
  }



  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.widgets, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.container.clear();
    this.widgets.forEach((w:any, index:number)=> {
      let div = this.renderer.createElement('div');
      this.renderer.addClass(div, `socket`);
      this.renderer.addClass(div, `socket-${index+1}`);
      this.renderer.addClass(div, `${w.size}`);
      this.renderer.appendChild(this.container.element.nativeElement, div);
      console.log(this.viewContainerRef)
      console.log(this.container)
      /*const factory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(w.component);
      this.componentRef = this.container.createComponent(factory);*/
    });
  }

}
