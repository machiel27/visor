import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinsPerCountryComponent } from './wins-per-country.component';

describe('WinsPerCountryComponent', () => {
  let component: WinsPerCountryComponent;
  let fixture: ComponentFixture<WinsPerCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WinsPerCountryComponent]
    });
    fixture = TestBed.createComponent(WinsPerCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
