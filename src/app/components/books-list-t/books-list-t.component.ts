import { Component, OnInit } from '@angular/core';
import { BooksHttpTService } from 'src/app/services/books-http-t.service';

@Component({
  selector: 'app-books-list-t',
  templateUrl: './books-list-t.component.html',
  styleUrls: ['./books-list-t.component.css'],
})
export class BooksListTComponent implements OnInit {
  booksArrT: any;
  constructor(private booksHttpServiceT: BooksHttpTService) {}

  ngOnInit(): void {
    this.booksHttpServiceT.getBooksT().subscribe((dataFromServerT: any) => {
      console.log('dataFromServerT', dataFromServerT);
      this.booksArrT = dataFromServerT;
    });
  }
}
