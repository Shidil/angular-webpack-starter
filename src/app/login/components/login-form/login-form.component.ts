import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  returnUrl: string;

  constructor(public fb: FormBuilder, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // reset login services
    localStorage.clear();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';

    this.isSubmitted = false;
    this.login = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  save(model: User, isValid: boolean) {
    this.isSubmitted = true;
    console.log(model, isValid);

    if (isValid) {
      localStorage.currentUser = model.username;
      this.router.navigate([this.returnUrl]);
    }
  }

}
