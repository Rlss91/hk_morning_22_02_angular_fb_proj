import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBookTComponent } from './add-new-book-t.component';

describe('AddNewBookTComponent', () => {
  let component: AddNewBookTComponent;
  let fixture: ComponentFixture<AddNewBookTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewBookTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBookTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
