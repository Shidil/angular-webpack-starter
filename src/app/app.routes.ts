import { Routes } from '@angular/router';
import { HomeComponent } from './dashboard/components/home/home.component';
import { LoginFormComponent } from './login/components/login-form/login-form.component';
import { NoContentComponent } from './no-content/no-content.component';
import { AuthGuard } from './_guards/auth.guard';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginFormComponent },
  { path: '**', component: NoContentComponent },
];
