import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeaddComponent } from './themeadd.component';

describe('ThemeaddComponent', () => {
  let component: ThemeaddComponent;
  let fixture: ComponentFixture<ThemeaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
