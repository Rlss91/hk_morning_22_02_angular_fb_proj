import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthTService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup-t',
  templateUrl: './signup-t.component.html',
  styleUrls: ['./signup-t.component.css'],
})
export class SignupTComponent implements OnInit {
  @ViewChild('fT', { static: false }) loginFormT: NgForm;

  constructor(private authTService: AuthTService, private router: Router) {}

  ngOnInit(): void {}

  handleSubmitT(): void {
    if (this.loginFormT.form.status == 'VALID') {
      this.authTService
        .signupT(this.loginFormT.value.email, this.loginFormT.value.password)
        .subscribe({
          next: (data: any) => {
            console.log('data from ob', data);
            this.router.navigate(['dashboard']);
          },
          error: (errT) => {
            console.error('errT', errT);
          },
        });
    }
  }
}
