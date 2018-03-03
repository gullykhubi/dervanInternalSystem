import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from "./common.service";
import { MappingService} from "./mapping.service";
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SelectModeComponent } from './select-mode/select-mode.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EventSelectionComponent } from './event-selection/event-selection.component';
import { SubmitionMsgComponent } from './submition-msg/submition-msg.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { ConfirmationFormComponent } from './confirmation-form/confirmation-form.component';
import { NavBarMenuComponent } from './nav-bar-menu/nav-bar-menu.component';
import { Routes, RouterModule } from '@angular/router';
import { ReportingKycComponent } from './reporting-kyc/reporting-kyc.component';
import { GameTableListComponent } from './game-table-list/game-table-list.component';
import { TeamMembersTableListComponent } from './team-members-table-list/team-members-table-list.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { PaymentComponent } from './payment/payment.component';
import { DrawMatchComponent } from './draw-match/draw-match.component';
export const ROUTES: Routes = [
  { path: '',
    children:[
      { path: 'individual-registration', component: PersonalInfoComponent },
      { path: 'team-registration', component: PersonalInfoComponent },
      { path: 'event-selection', component: EventSelectionComponent },
      { path: 'individual-reporting-kyc', component: ReportingKycComponent },
      { path: 'team-reporting-kyc', component: ReportingKycComponent },
      { path: 'individual-payment', component: PaymentComponent },
      { path: 'team-payment', component: PaymentComponent },
      { path: 'draw-game', component: DrawMatchComponent }
    ]
  },
    { path: '*',pathMatch: 'prefix', redirectTo: "/" }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectModeComponent,
    PersonalInfoComponent,
    EventSelectionComponent,
    SubmitionMsgComponent,
    TeamMembersComponent,
    ConfirmationFormComponent,
    NavBarMenuComponent,
    ReportingKycComponent,
    GameTableListComponent,
    TeamMembersTableListComponent,
    PaymentComponent,
    DrawMatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	SidebarModule,
	NavbarModule,
	FooterModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CommonService, MappingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
