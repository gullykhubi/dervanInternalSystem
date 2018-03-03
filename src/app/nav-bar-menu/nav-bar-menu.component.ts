import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-menu',
  templateUrl: './nav-bar-menu.component.html',
  styleUrls: ['./nav-bar-menu.component.css']
})
export class NavBarMenuComponent implements OnInit {

  constructor() { }
  menuList=[{
    "title":"Registration",
    "children":[{
      "displayText":"Individual",
      "routingURL":"individual-registration",
      "type":'ind'
    },
    {
      "displayText":"Team",
      "routingURL":"team-registration",
      "type":'team'
    }
  ]
  },
  {
    "title":"Reporting",
    "children":[{
      "displayText":"Individual",
      "routingURL":"reporting-kyc",
      "type":'ind'
    },
    {
      "displayText":"Team",
      "routingURL":"reporting-kyc",
      "type":'team'
    },
    {
      "displayText":"Payment Details",
      "routingURL":"reporting-kyc",
      "type":'team'
    }
	]
  }
]
  ngOnInit() {
  }

}
