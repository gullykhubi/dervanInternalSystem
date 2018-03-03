import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTableListComponent } from './game-table-list.component';

describe('GameTableListComponent', () => {
  let component: GameTableListComponent;
  let fixture: ComponentFixture<GameTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
