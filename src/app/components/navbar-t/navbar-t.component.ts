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

  constructor(private authTService: AuthTService, private router: Router) {
    this.linksArrT = ['home', 'dashboard'];
  }

  ngOnInit(): void {}

  handleLogoutT(): void {
    this.authTService.logoutT();
    this.router.navigate(['home']);
  }
}
