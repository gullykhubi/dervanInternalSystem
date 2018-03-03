import { Component, OnInit,Input } from '@angular/core';
import { CommonService } from "../common.service";
import { MappingService} from "../mapping.service";
@Component({
  selector: 'app-game-table-list',
  templateUrl: './game-table-list.component.html',
  styleUrls: ['./game-table-list.component.css']
})
export class GameTableListComponent implements OnInit {
  @Input('eventSelected') eventSelected : any ;
  amount : any ;
  constructor(private commonService: CommonService, public mappingService : MappingService ) {

  }
  ngOnInit() {
   this.eventSelected = this.eventSelected;
   this.amount = this.commonService.selectMode === 'ind' ? 100 : 500 ;
  }
}
