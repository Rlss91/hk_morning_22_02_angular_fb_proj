import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthTService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-books-list-t',
  templateUrl: './books-list-t.component.html',
  styleUrls: ['./books-list-t.component.css'],
})
export class BooksListTComponent implements OnInit {
  constructor(private http: HttpClient, private authTService: AuthTService) {}

  ngOnInit(): void {
    this.http
      .get<any>(
        'https://testproject-e937d-default-rtdb.firebaseio.com/books.json',
        {
          params: new HttpParams().set(
            'auth',
            this.authTService.tokenDataT.idToken
          ),
        }
      )
      .pipe(
        map((dataFromServerT: any) => {
          let booksArr = [];
          for (const key in dataFromServerT) {
            if (dataFromServerT.hasOwnProperty(key)) {
              booksArr = [...booksArr, { id: key, ...dataFromServerT[key] }];
            }
          }
          return booksArr;
        })
      )
      .subscribe((dataFromServerT: any) => {
        console.log('dataFromServerT', dataFromServerT);
      });
  }
}
