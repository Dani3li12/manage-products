import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  name = new FormControl('');
  updateName() {
    this.name.setValue('Mikel');
  } 
  constructor() { }
  ngOnInit(): void {
  }

}
