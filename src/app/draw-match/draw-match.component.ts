import { Component, OnInit } from '@angular/core';
import { CommonService } from "../common.service";
import { DrawMatchService } from "../draw-match.service";
import { RequestOptions , Http , Headers } from '@angular/http';
declare var pdfMake: any;
@Component({
  selector: 'app-draw-match',
  templateUrl: './draw-match.component.html',
  styleUrls: ['./draw-match.component.css'],
  providers:[DrawMatchService]
})
export class DrawMatchComponent implements OnInit {
  discipline: any;
  gender: any;
  game: any;
  pdf: any;
  selectedGames=[];
  mockobj:any;
  type:any;
  playerList:any;//=[{partid:"1","firstName":"Gulshan","lastName":"Khubnani"},{partid:"1","firstName":"Gulshan","lastName":"Khubnani"},{partid:"1","firstName":"Gulshan","lastName":"Khubnani"}];
 // mockobj={
 //    "rounds": [
 //        {
 //            "firstTeamName": "piyu dalal",
 //            "lastTeamSchoolName": "Bye",
 //            "matchId": "1",
 //            "partTeamID": 0,
 //            "seed": null
 //        },
 //        {
 //            "firstTeamName": "Camella Patil",
 //            "lastTeamSchoolName": "nitu kumar",
 //            "matchId": "2",
 //            "partTeamID": 0,
 //            "seed": null
 //        },
 //        {
 //            "firstTeamName": "Camella Patil",
 //            "lastTeamSchoolName": "nitu kumar",
 //            "matchId": "2",
 //            "partTeamID": 0,
 //            "seed": null
 //        },
 //        {
 //            "firstTeamName": "Camella Patil",
 //            "lastTeamSchoolName": "nitu kumar",
 //            "matchId": "2",
 //            "partTeamID": 0,
 //            "seed": null
 //        },
 //        {
 //            "firstTeamName": "piyu dalal",
 //            "lastTeamSchoolName": "Bye",
 //            "matchId": "1",
 //            "partTeamID": 0,
 //            "seed": null
 //        },
 //        {
 //            "firstTeamName": "Camella Patil",
 //            "lastTeamSchoolName": "nitu kumar",
 //            "matchId": "2",
 //            "partTeamID": 0,
 //            "seed": null
 //        },
 //        {
 //            "firstTeamName": "Camella Patil",
 //            "lastTeamSchoolName": "nitu kumar",
 //            "matchId": "2",
 //            "partTeamID": 0,
 //            "seed": null
 //        },
 //        {
 //            "firstTeamName": "Camella Patil",
 //            "lastTeamSchoolName": "nitu kumar",
 //            "matchId": "2",
 //            "partTeamID": 0,
 //            "seed": null
 //        },
 //        {
 //            "firstTeamName": "piyu dalal",
 //            "lastTeamSchoolName": "Bye",
 //            "matchId": "1",
 //            "partTeamID": 0,
 //            "seed": null
 //        },
 //        {
 //            "firstTeamName": "Camella Patil",
 //            "lastTeamSchoolName": "nitu kumar",
 //            "matchId": "2",
 //            "partTeamID": 0,
 //            "seed": null
 //        },
 //        {
 //            "firstTeamName": "Camella Patil",
 //            "lastTeamSchoolName": "nitu kumar",
 //            "matchId": "2",
 //            "partTeamID": 0,
 //            "seed": null
 //        },
 //        {
 //            "firstTeamName": "Camella Patil",
 //            "lastTeamSchoolName": "nitu kumar",
 //            "matchId": "2",
 //            "partTeamID": 0,
 //            "seed": null
 //        },
 //        {
 //            "firstTeamName": "piyu dalal",
 //            "lastTeamSchoolName": "Bye",
 //            "matchId": "1",
 //            "partTeamID": 0,
 //            "seed": null
 //        },
 //        {
 //            "firstTeamName": "Camella Patil",
 //            "lastTeamSchoolName": "nitu kumar",
 //            "matchId": "2",
 //            "partTeamID": 0,
 //            "seed": null
 //        },
 //        {
 //            "firstTeamName": "Camella Patil",
 //            "lastTeamSchoolName": "nitu kumar",
 //            "matchId": "2",
 //            "partTeamID": 0,
 //            "seed": null
 //        },
 //        {
 //            "firstTeamName": "Camella Patil",
 //            "lastTeamSchoolName": "nitu kumar",
 //            "matchId": "2",
 //            "partTeamID": 0,
 //            "seed": null
 //        }
 //    ]
 // }
disiplineArr=[]
  constructor(public commonService: CommonService,public drawMatchService: DrawMatchService, private http : Http) { }

  ngOnInit() {
    this.pdf = pdfMake;
  }
  getDisciplines(event){
    this.type=event;
    this.disiplineArr = this.commonService.list[(this.type == 1)?'ind':'team'];
  }
  getGames(event?:any){
    if(this.discipline !== undefined && this.gender !== undefined){
      this.selectedGames = this.commonService.eventList[(this.type==1)?'ind':'team'][this.discipline][this.gender];
      console.log(this.selectedGames);
    }
  }
  getKey(obj){
    return Object.keys(obj)[0];
  }
  getPlayers(){

          const headers = new Headers();
              headers.append('Content-Type', 'application/json');
              headers.append('Accept', 'application/json');
              headers.append('authentication', `hello`);
              headers.append('HttpHeaderForm','123');
              let record = {
                "gameId":this.game,
                "type":this.type
              }
              const options = new RequestOptions({headers: headers});
              this.http.post(`/RestServiceSystem/rest/drawround/partiteamdtl/`, record ,options ).map((res:any)=> {
                return res.json();
              }).subscribe((e:any) => {
                this.playerList = e.details;
            });
    console.log(this.game)
  }
  submit(){
    // this.print();
    // return ;
     this.playerList.map((element)=>{
      if(element['seed']===undefined || element['seed']===null){
        element['seed']='-1';
      }
    });

    const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('authentication', `hello`);
        headers.append('HttpHeaderForm','123');
        let record = {
          "details":this.playerList
        }
        const options = new RequestOptions({headers: headers});
        this.http.post(`/RestServiceSystem/rest/drawround/seed/`, record ,options ).map((res:any)=> {
          return res.json();
        }).subscribe((e:any) => {
          this.mockobj = e;
          this.print();
      });
  }
  print(){
    let gameName=this.selectedGames.filter((element,ind)=>{
      return this.getKey(element)===this.game;
    })[0];
  let content =this.drawMatchService.print(this.mockobj.rounds,this.type);
  var docDefinition = {
    "pageMargins": [
        20,
        70,
        20,
        20
      ],
      "header": {


stack: [
    {text:'DYG 2018',fontSize:30 ,alignment:'center'},
    {text:`${this.discipline} - ${(this.gender=='B')?'Male':'Female'} - ${gameName[this.game]}`,fontSize:10 ,alignment:'center'}

]
},
      "footer": {
        fontSize:9,
        width:[10,10,10,10,10,10],
columns: [
    {text:'Referee' , width:32},
        {
            width:100,
          "canvas": [
            {
              "type": "line",
              "x1": 0,
              "y1": 10,
              "x2": 90,
              "y2": 10,
              "lineWidth": 1,
              "lineColor": "#000"
            }
          ]
        },{text:'Winner' , width:30},
        {
            width:100,
          "canvas": [
            {
              "type": "line",
              "x1": 0,
              "y1": 10,
              "x2": 90,
              "y2": 10,
              "lineWidth": 1,
              "lineColor": "#000"
            }
          ]
        },{text:'1st Runner Up' , width:70},
        {
            width:100,
          "canvas": [
            {
              "type": "line",
              "x1": 0,
              "y1": 10,
              "x2": 90,
              "y2": 10,
              "lineWidth": 1,
              "lineColor": "#000"
            }
          ]
        },{text:'1st Runner Up' , width:70},
        {
            width:100,
          "canvas": [
            {
              "type": "line",
              "x1": 0,
              "y1": 10,
              "x2": 90,
              "y2": 10,
              "lineWidth": 1,
              "lineColor": "#000"
            }
          ]
        },
]
},
    content: content
  }
  console.log(JSON.stringify(docDefinition));
  this.pdf.createPdf(docDefinition).download(`${this.discipline}_${gameName[this.game]}.pdf`);
  }
}
