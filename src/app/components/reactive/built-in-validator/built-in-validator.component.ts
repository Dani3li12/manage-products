import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-built-in-validator',
  templateUrl: './built-in-validator.component.html',
  styleUrls: ['./built-in-validator.component.css']
})
export class BuiltInValidatorComponent implements OnInit {
  matching(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);
      if(control==null)
        return null
      if(checkControl==null)
        return null
      if (control.value !== checkControl.value) {
        checkControl.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }
 
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email],
  ],
  password: [
    '', [Validators.required, Validators.minLength(8)]
    ],
    confirmPassword: [
      '', [Validators.required]
    ]
  },
    {
    validators:[this.matching("password","confirmPassword")]
  }
  );

constructor(private fb: FormBuilder) {}

get email() {
    return this.form.controls['email'];
}

get password() {
    return this.form.controls['password'];
}
  
get confirmPassword() {
    return this.form.controls['confirmPassword'];
}
ngOnInit(): void {}

}