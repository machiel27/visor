import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeDistributionComponent } from './age-distribution.component';

describe('AgeDistributionComponent', () => {
  let component: AgeDistributionComponent;
  let fixture: ComponentFixture<AgeDistributionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgeDistributionComponent]
    });
    fixture = TestBed.createComponent(AgeDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
