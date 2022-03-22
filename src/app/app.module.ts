import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {FormComponent} from './components/form/form.component';
import {ColorsComponent} from './components/colors/colors.component';
import {NumbersComponent} from './components/numbers/numbers.component';
import {UsersComponent} from './components/users/users.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    FormComponent,
    ColorsComponent,
    NumbersComponent,
    UsersComponent
  ],
  entryComponents: [
    TasksComponent,
    FormComponent,
    ColorsComponent,
    NumbersComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DragDropModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
