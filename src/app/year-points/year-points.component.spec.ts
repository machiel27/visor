import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearPointsComponent } from './year-points.component';

describe('YearPointsComponent', () => {
  let component: YearPointsComponent;
  let fixture: ComponentFixture<YearPointsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearPointsComponent]
    });
    fixture = TestBed.createComponent(YearPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
