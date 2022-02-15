import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthTService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-t',
  templateUrl: './login-t.component.html',
  styleUrls: ['./login-t.component.css'],
})
export class LoginTComponent implements OnInit {
  @ViewChild('fT', { static: false }) loginFormT: NgForm;

  constructor(private authTService: AuthTService, private router: Router) {}

  ngOnInit(): void {}

  handleSubmitT(): void {
    if (this.loginFormT.form.status == 'VALID') {
      this.authTService
        .loginT(this.loginFormT.value.email, this.loginFormT.value.password)
        .subscribe((data: any) => {
          console.log('data from ob', data);
          this.router.navigate(['dashboard']);
        });
    }
  }
}
