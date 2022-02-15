import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthTService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar-t',
  templateUrl: './navbar-t.component.html',
  styleUrls: ['./navbar-t.component.css'],
})
export class NavbarTComponent implements OnInit {
  linksArrT: string[];
  isloggedIn: boolean;
  constructor(private authTService: AuthTService, private router: Router) {
    this.linksArrT = ['home', 'dashboard'];
    this.isloggedIn = false;
  }

  ngOnInit(): void {
    this.authTService.loggedInChangeT.subscribe((status: boolean) => {
      this.isloggedIn = status;
    });
  }

  handleLogoutT(): void {
    this.authTService.logoutT();
    this.router.navigate(['home']);
  }
}
