import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingKycComponent } from './reporting-kyc.component';

describe('ReportingKycComponent', () => {
  let component: ReportingKycComponent;
  let fixture: ComponentFixture<ReportingKycComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportingKycComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportingKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
