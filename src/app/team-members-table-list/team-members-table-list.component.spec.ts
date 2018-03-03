import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembersTableListComponent } from './team-members-table-list.component';

describe('TeamMembersTableListComponent', () => {
  let component: TeamMembersTableListComponent;
  let fixture: ComponentFixture<TeamMembersTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMembersTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMembersTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
