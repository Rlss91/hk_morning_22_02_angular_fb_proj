import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListTComponent } from './books-list-t.component';

describe('BooksListTComponent', () => {
  let component: BooksListTComponent;
  let fixture: ComponentFixture<BooksListTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksListTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
