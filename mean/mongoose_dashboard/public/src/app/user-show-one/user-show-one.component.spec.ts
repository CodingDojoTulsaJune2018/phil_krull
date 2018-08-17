import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShowOneComponent } from './user-show-one.component';

describe('UserShowOneComponent', () => {
  let component: UserShowOneComponent;
  let fixture: ComponentFixture<UserShowOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShowOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShowOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
