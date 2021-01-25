import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumidComponent } from './forumid.component';

describe('ForumidComponent', () => {
  let component: ForumidComponent;
  let fixture: ComponentFixture<ForumidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
