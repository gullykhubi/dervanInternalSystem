import { Component, OnInit ,Input } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-team-members-table-list',
  templateUrl: './team-members-table-list.component.html',
  styleUrls: ['./team-members-table-list.component.css']
})
export class TeamMembersTableListComponent implements OnInit {
  @Input('memberDetails') teamMemberDetailsList : any ;
  constructor(public commonService: CommonService) { }
  ngOnInit() {
  }
getDOB(date){
  var d = new Date(date);
  return d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
}

}
