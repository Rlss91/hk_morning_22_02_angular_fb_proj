import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthTService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar-t',
  templateUrl: './navbar-t.component.html',
  styleUrls: ['./navbar-t.component.css'],
})
export class NavbarTComponent implements OnInit, OnDestroy {
  linksArrT: string[];
  isloggedIn: boolean;
  loggedInChangeSubT: Subscription;
  constructor(private authTService: AuthTService, private router: Router) {
    this.linksArrT = ['home', 'dashboard'];
    this.isloggedIn = false;
  }

  ngOnDestroy(): void {
    this.loggedInChangeSubT.unsubscribe();
  }

  ngOnInit(): void {
    this.loggedInChangeSubT = this.authTService.loggedInChangeT.subscribe(
      (status: boolean) => {
        this.isloggedIn = status;
      }
    );
  }

  handleLogoutT(): void {
    this.authTService.logoutT();
    this.router.navigate(['home']);
  }
}
