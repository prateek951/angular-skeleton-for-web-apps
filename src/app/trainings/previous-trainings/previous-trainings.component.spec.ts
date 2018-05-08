import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousTrainingsComponent } from './previous-trainings.component';

describe('PreviousTrainingsComponent', () => {
  let component: PreviousTrainingsComponent;
  let fixture: ComponentFixture<PreviousTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
