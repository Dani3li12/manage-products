import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-group-form-control',
  templateUrl: './group-form-control.component.html',
  styleUrls: ['./group-form-control.component.css']
})
export class GroupFormControlComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ]) 
  });
  constructor(private fb: FormBuilder) { }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Ariel',
      address: {
        street: '123 Drew Street'
      }
    });
  }
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
 
  onSubmit() {
    console.warn(this.profileForm.value);
  }

  // ngOnInit(): void {
  // }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 

}
