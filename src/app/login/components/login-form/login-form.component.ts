import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {
  login: FormGroup;
  isSubmitted: boolean;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.isSubmitted = false;
    this.login = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  save(model: User, isValid: boolean) {
    this.isSubmitted = true;
    console.log(model, isValid);
  }

}
