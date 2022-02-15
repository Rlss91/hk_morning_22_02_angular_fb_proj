import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTComponent } from './pages/dashboard-t/dashboard-t.component';
import { HomeTComponent } from './pages/home-t/home-t.component';
import { LoginTComponent } from './pages/login-t/login-t.component';
import { SignupTComponent } from './pages/signup-t/signup-t.component';
import { AuthTGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeTComponent },
  {
    path: 'login',
    component: LoginTComponent,
  },
  {
    path: 'signup',
    component: SignupTComponent,
  },
  {
    path: 'dashboard',
    canActivate: [AuthTGuard],
    component: DashboardTComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
