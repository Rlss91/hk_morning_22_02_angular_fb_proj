import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthTService } from 'src/app/services/auth.service';
import { BooksHttpTService } from 'src/app/services/books-http-t.service';

@Component({
  selector: 'app-add-new-book-t',
  templateUrl: './add-new-book-t.component.html',
  styleUrls: ['./add-new-book-t.component.css'],
})
export class AddNewBookTComponent implements OnInit {
  bookTitleT: string;
  constructor(private booksHttpTService: BooksHttpTService) {
    this.bookTitleT = '';
  }

  ngOnInit(): void {}

  handleNewBookT(): void {
    //https://testproject-e937d-default-rtdb.firebaseio.com/books.json?auth=ergkojneropiugn439-085jgoinst098g435jyt09jrgtpoisnmt09ps438jt0oiu354ng09543ng092345thg0w3459iuthw0435uito
    this.booksHttpTService
      .createNewBookT(this.bookTitleT)
      .subscribe((dataFromServerT: any) => {
        console.log('dataFromServerT', dataFromServerT);
      });
  }
}
