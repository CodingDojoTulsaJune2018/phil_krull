import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsShowComponent } from './animals-show.component';

describe('AnimalsShowComponent', () => {
  let component: AnimalsShowComponent;
  let fixture: ComponentFixture<AnimalsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
