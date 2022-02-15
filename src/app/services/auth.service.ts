import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthTService {
  isLoggedInT: boolean;
  tokenDataT: any;
  constructor(private http: HttpClient) {
    this.isLoggedInT = false;
  }

  isAuthT(): boolean {
    return this.isLoggedInT;
  }

  loginT(emailT: string, passwordT: string): Observable<any> {
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`,
        {
          email: emailT,
          password: passwordT,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((dataT: any) => {
          this.tokenDataT = dataT;
          this.isLoggedInT = true;
        })
      );
  }

  signupT(emailT: string, passwordT: string): Observable<any> {
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`,
        {
          email: emailT,
          password: passwordT,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((dataT: any) => {
          this.tokenDataT = dataT;
          this.isLoggedInT = true;
        })
      );
  }

  logoutT(): void {
    this.isLoggedInT = false;
    this.tokenDataT = undefined;
  }
}
