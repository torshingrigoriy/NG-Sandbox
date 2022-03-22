import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      name: ['', Validators.required],
      role: ['noob', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submit() {
    alert(`Hello ${this.form.value.name}, you are new ${this.form.value.role}`);
  }

}
