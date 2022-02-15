import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarTComponent } from './components/navbar-t/navbar-t.component';
import { LoginTComponent } from './pages/login-t/login-t.component';
import { SignupTComponent } from './pages/signup-t/signup-t.component';
import { DashboardTComponent } from './pages/dashboard-t/dashboard-t.component';
import { HomeTComponent } from './pages/home-t/home-t.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarTComponent,
    LoginTComponent,
    SignupTComponent,
    DashboardTComponent,
    HomeTComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
