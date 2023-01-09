import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  multipleData = [Array];
  loginCd: FormGroup;
  isValid = false;
  constructor(fb: FormBuilder) {
    this.loginCd = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
          ),
        ],
      ],
    });
  }

  login() {
    this.isValid = true;
    // this.multipleData.push(this.loginCd.value);
    // this.loginCd.reset();
    // console.log(this.multipleData);
  }

}
