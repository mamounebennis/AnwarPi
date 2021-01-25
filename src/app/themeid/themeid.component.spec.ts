import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeidComponent } from './themeid.component';

describe('ThemeidComponent', () => {
  let component: ThemeidComponent;
  let fixture: ComponentFixture<ThemeidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
