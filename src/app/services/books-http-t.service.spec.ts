import { TestBed } from '@angular/core/testing';

import { BooksHttpTService } from './books-http-t.service';

describe('BooksHttpTService', () => {
  let service: BooksHttpTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksHttpTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
