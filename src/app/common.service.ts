import { Injectable } from '@angular/core';
import { events } from './events';
import { RequestOptions , Http , Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
@Injectable()
export class CommonService {
  resourceURL="/";
  selectMode: string = 'ind';
  currentPage: string = 'modeSelection';
  eventList = events;
  personalEditFlag=false;
  regNo: any ='';
  list = {
      ind: ["ARCHERY", "ATHLETICS", "BADMINTON", "CARROM", "CHESS", "GYMNASTICS", "SHOOTING", "SWIMMING", "TT", "WALL CLIMBING", "YOGA"],
      team: ["ATHLETICS", "BASKET BALL", "FOOTBALL", "KABADDI", "KHO KHO", "LANGADI", "SWIMMING", "VOLLEYBALL"]
  }
  eventSelected:any =[]
  selectedEventList : any;
  partidetails: any={
      "firstname": "",
      "lastname": "",
      "middlename": "",
      "addr1": "",
      "addr2": "",
      "state": "",
      "city": "",
      "pincode": "",
      "nameOfSchoolOrClub": "",
      "addressOfSchoolOrClub": "",
      "address2OfSchoolOrClub": "",
      "schoolstate": "",
      "schoolcity": "",
      "schoolpincode": "",
      "dob": "",
      "age": "",
      "contactno": "",
      "alternativeno": "",
      "email": "",
      "gender": "",
      "bankDetails": "",
      "paymentdate": null,
      "bloodgroup":'',
      "identitynumber":'',
      "identitytype":''
    };
    teamMemberDetail = {
                    firstname: "",
                    lastname: "",
                    middlename: "",
                    day: "",
                    month: "",
                    year: "",
                    contactno: "",
                    alternativeno: "",
                    email: "",
                    dob: "",
                    bloodgroup:""
                }
    teamMemberDetailsList=[];
  constructor(private http : Http) { }
  reset(){
    this.teamMemberDetailsList=[]
    //this.selectMode = 'ind';
    this.eventSelected =[]
    this.selectedEventList=undefined;
    this.currentPage = 'modeSelection';
    this.partidetails={
        "firstname": "",
        "lastname": "",
        "middlename": "",
        "addr1": "",
        "addr2": "",
        "state": "",
        "city": "",
        "pincode": "",
        "nameOfSchoolOrClub": "",
        "addressOfSchoolOrClub": "",
        "address2OfSchoolOrClub": "",
        "schoolstate": "",
        "schoolcity": "",
        "schoolpincode": "",
        "dob": "",
        "age": "",
        "contactno": "",
        "alternativeno": "",
        "email": "",
        "gender": "",
        "bankDetails": "",
        "paymentdate": null,
        "bloodgroup":'',
        "identitynumber":'',
        "identitytype":''
      };
      this.teamMemberDetail = {
                      firstname: "",
                      lastname: "",
                      middlename: "",
                      day: "",
                      month: "",
                      year: "",
                      contactno: "",
                      alternativeno: "",
                      email: "",
                      dob: "",
                      bloodgroup:""
                  }
  }
  save(partid?:any,update?:any){
    let record;
    let url
    if (update === true){
      this.partidetails['partid'] = partid;
      record = {
        "record":{
          "partidetails": this.partidetails
        }
      }
      url = 'RestServiceSystem/rest/updateDetails/partUpdate';
    }else{
      url = (this.selectMode === 'ind')?"RestServiceSystem/rest/registration":"RestServiceSystem/rest/teamRegister";

      record = {
        "record":{
          "partidetails": this.partidetails,
          "games": this.eventSelected,
          "tm": this.teamMemberDetailsList,
          "amt": this.eventSelected.length*100,
          "type":this.selectMode
        }
      }
    }
    const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('authentication', `hello`);
        headers.append('HttpHeaderForm','123');

       const options = new RequestOptions({headers: headers});
       console.log(JSON.stringify(record));
        this.http.post(`${this.resourceURL}${url}`, record ,options ).map((res:any)=> {
                    return res.json()
                }).subscribe((e:any) => {
                  console.log(e)
                  if (update === true){
                    this.personalEditFlag= false;
                    this.partidetails=e.record.partidetails;
                  }
                  //if(e != "inValidRequest"){
                    this.regNo= (this.selectMode === 'ind') ? e.partid : e.captainid;
                    this.currentPage = 'submission';
                  //}
    })
  }
  getAge(fromdate1, todate):any {
        if (todate)
            todate = new Date(todate);
        else
            todate = new Date();
        let age = {};
        let fromdate = new Date(fromdate1);
        let y = [todate.getFullYear(), fromdate.getFullYear()];
        let ydiff = y[0] - y[1];
        let m = [todate.getMonth(), fromdate.getMonth()];
        let mdiff = m[0] - m[1];
        let d = [ todate.getDate(), fromdate.getDate()];
        let ddiff = d[1] - d[0];
        if (mdiff < 0 || (mdiff === 0 && d[1] - d[0] < 0))
            --ydiff;
        if (mdiff < 0)
            mdiff += 12;
        if (ddiff < 0) {
            fromdate.setMonth(m[1] + 1, 0);
            ddiff = fromdate.getDate() - d[1] + d[0];
            --mdiff;
        }
        age["year"] = (ydiff);
        age["month"] = (mdiff);
        age["day"] = (ddiff);
        return age;
    }
}
