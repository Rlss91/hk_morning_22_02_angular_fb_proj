import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthTService } from './auth.service';
import { BookFbModelT, BookModelT } from 'src/app/model/Book.fb.model';

@Injectable({
  providedIn: 'root',
})
export class BooksHttpTService {
  constructor(private http: HttpClient, private authTService: AuthTService) {}

  // createNewBootT()

  getBooksT(): Observable<BookModelT[]> {
    return this.http
      .get<{ [key: string]: BookFbModelT }>(
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
      );
  }
}
