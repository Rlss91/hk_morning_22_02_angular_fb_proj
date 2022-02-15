import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthTService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-new-book-t',
  templateUrl: './add-new-book-t.component.html',
  styleUrls: ['./add-new-book-t.component.css'],
})
export class AddNewBookTComponent implements OnInit {
  bookTitleT: string;
  constructor(private http: HttpClient, private authTService: AuthTService) {
    this.bookTitleT = '';
  }

  ngOnInit(): void {}

  handleNewBookT(): void {
    //https://testproject-e937d-default-rtdb.firebaseio.com/books.json?auth=ergkojneropiugn439-085jgoinst098g435jyt09jrgtpoisnmt09ps438jt0oiu354ng09543ng092345thg0w3459iuthw0435uito
    this.http
      .post<any>(
        'https://testproject-e937d-default-rtdb.firebaseio.com/books.json',
        {
          owner: this.authTService.tokenDataT.localId,
          title: this.bookTitleT,
        },
        {
          params: new HttpParams().set(
            'auth',
            this.authTService.tokenDataT.idToken
          ),
        }
      )
      .subscribe((dataFromServerT: any) => {
        console.log('dataFromServerT', dataFromServerT);
      });
  }
}
