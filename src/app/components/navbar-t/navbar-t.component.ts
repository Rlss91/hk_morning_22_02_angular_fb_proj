import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-t',
  templateUrl: './navbar-t.component.html',
  styleUrls: ['./navbar-t.component.css'],
})
export class NavbarTComponent implements OnInit {
  linksArrT: string[];

  constructor() {
    this.linksArrT = ['home', 'dashboard', 'login', 'signup'];
  }

  ngOnInit(): void {}
}
