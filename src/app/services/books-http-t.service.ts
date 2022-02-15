import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthTService } from './auth.service';
import { BookFbModelT, BookModelT } from 'src/app/model/Book.fb.model';
import { FBPostResponse } from '../model/FBPostResponse.model';

@Injectable({
  providedIn: 'root',
})
export class BooksHttpTService {
  constructor(private http: HttpClient, private authTService: AuthTService) {}

  createNewBookT(bookTitleT: string): Observable<FBPostResponse> {
    return this.http.post<FBPostResponse>(
      'https://testproject-e937d-default-rtdb.firebaseio.com/books.json',
      {
        owner: this.authTService.tokenDataT.localId,
        title: bookTitleT,
      },
      {
        params: new HttpParams().set(
          'auth',
          this.authTService.tokenDataT.idToken
        ),
      }
    );
  }

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

  /*
    To delete data you will need to pass the id in this function and it will delete the data
  */
  deleteBook(bookid: string): any {
    return this.http.delete(
      `https://testproject-e937d-default-rtdb.firebaseio.com/books/${bookid}.json`,
      {
        params: new HttpParams().set(
          'auth',
          this.authTService.tokenDataT.idToken
        ),
      }
    );
  }
}
