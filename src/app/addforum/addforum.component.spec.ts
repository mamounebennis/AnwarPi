import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddforumComponent } from './addforum.component';

describe('AddforumComponent', () => {
  let component: AddforumComponent;
  let fixture: ComponentFixture<AddforumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddforumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
