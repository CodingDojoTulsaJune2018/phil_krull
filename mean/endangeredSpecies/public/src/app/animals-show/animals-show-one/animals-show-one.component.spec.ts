import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsShowOneComponent } from './animals-show-one.component';

describe('AnimalsShowOneComponent', () => {
  let component: AnimalsShowOneComponent;
  let fixture: ComponentFixture<AnimalsShowOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsShowOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsShowOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
