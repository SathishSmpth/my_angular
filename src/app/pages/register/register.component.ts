import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  inValid = false;

  userDetail: FormGroup;

  multipleData = [
    {
      firstName: 'Sathish',
      lastName: 'Sampath',
      dob: '26/01/1997',
      gender: 'male',
      phone: 7366356356,
      email: 'satishsmpth@gmail.com',
      password: 'Sathish#90',
      confirmPassword: 'Sathish#90',
      city: 'chennai',
      state: 'tamilnadu',
      country: 'india',
      pin: 606123,
    },
  ];

  constructor(fb: FormBuilder) {
    this.userDetail = fb.group(
      {
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.pattern("^[a-zA-Z -']+"),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.pattern("^[a-zA-Z -']+"),
          ],
        ],
        dob: ['', Validators.required],
        gender: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.pattern("^[a-zA-Z -']+"),
          ],
        ],
        phone: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,99}/
            ),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,99}/
            ),
          ],
        ],
        city: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.pattern("^[a-zA-Z -']+"),
          ],
        ],
        state: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.pattern("^[a-zA-Z -']+"),
          ],
        ],
        country: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.pattern("^[a-zA-Z -']+"),
          ],
        ],
        pin: ['', [Validators.required, Validators.minLength(6)]],
      },
      {
        validator: this.MatchPassword('password', 'confirmPassword'),
      }
    );
    // passwordComparisonValidator:
  }
  //Explain this code password and comparison password
  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];
      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }
      if (
        confirmPasswordControl?.errors &&
        !confirmPasswordControl?.errors?.['passwordMismatch']
      ) {
        return null;
      }
      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return ;
      } else {
        confirmPasswordControl.setErrors(null);
        return ;
      }
    };
  }

  register() {
    if (this.userDetail.valid) {
        this.multipleData.push(this.userDetail.value);
      this.inValid = false;
      this.userDetail.reset();
    } else {
      this.inValid = true;
    }
  }
}
