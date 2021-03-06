import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawMatchComponent } from './draw-match.component';

describe('DrawMatchComponent', () => {
  let component: DrawMatchComponent;
  let fixture: ComponentFixture<DrawMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
