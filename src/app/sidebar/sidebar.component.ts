import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    type: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'individual-registration', title: 'Individual Registration',  icon: 'pe-7s-note2', class: '', type:'ind' },
    { path: 'team-registration', title: 'Team Registration',  icon:'pe-7s-note2', class: '', type:'team'  },
    { path: 'individual-reporting-kyc', title: 'Individual Reporting',  icon:'pe-7s-news-paper', class: '', type:'ind' },
    { path: 'team-reporting-kyc', title: 'Team Reporting',  icon:'pe-7s-news-paper', class: '', type:'team' },
    { path: 'individual-payment', title: 'Individual Payment',  icon:'pe-7s-news-paper', class: '', type:'ind' },
    { path: 'team-payment', title: 'Team Payment',  icon:'pe-7s-news-paper', class: '', type:'team' },
    ,
    { path: 'draw-game', title: 'Draw Game',  icon:'pe-7s-news-paper', class: '', type:'' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      /*if ($(window).width() > 991) {
          return false;
      }
      return true;*/
      return false;
  };
}
