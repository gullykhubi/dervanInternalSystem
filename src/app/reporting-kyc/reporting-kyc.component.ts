import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonService } from "../common.service";
import { RequestOptions , Http , Headers } from '@angular/http';
@Component({
  selector: 'app-reporting-kyc',
  templateUrl: './reporting-kyc.component.html',
  styleUrls: ['./reporting-kyc.component.css']
})
export class ReportingKycComponent implements OnInit {
  @Input('fromPayment')
  fromPayment : any;
  @Output('getInfo')
  info = new EventEmitter();

  partiDetails = undefined
  eventSelected = undefined;
  memberDetalis=undefined;
  prnno:any;
  err:any=[];
  kycCheck: any;
  reporting: any;
  paymentFlag:any;
  constructor(private _Activatedroute:ActivatedRoute,private _router:Router,public commonService: CommonService, private http : Http) {
    this.commonService.selectMode=this._Activatedroute.snapshot.queryParamMap.get('type');
    if(this.commonService.selectMode !== 'team' && this.commonService.selectMode !== 'ind'){
      this._router.navigate(['RestServiceSystem/'])
    }
  }
  createNew(){
    this.commonService.partidetails=this.partiDetails;
    this._router.navigate(['RestServiceSystem/individual-registration'], { queryParams: { type: 'ind' }});
  }
  fromReporting:boolean = false;
  ngOnInit() {
    this.commonService.personalEditFlag=false;
  }
  getDetails() {
    if(this.fromPayment === 'yes'){
this.fromReporting=true;
      const headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Accept', 'application/json');
          headers.append('authentication', `hello`);
          headers.append('HttpHeaderForm','123');
          let record;
          if(this.commonService.selectMode === 'ind'){
            record={
  	           "partid" : this.prnno
             }
          }else {
            record={
  	           "captainid": this.prnno
             }
          }

          const options = new RequestOptions({headers: headers});
          console.log(JSON.stringify(record));
          const url = (this.commonService.selectMode === 'ind')?"RestServiceSystem/rest/indPayment":"RestServiceSystem/rest/teamPayment";
          this.http.post(`/${url}`, record ,options ).map((res:any)=> {
            return res.json();
          }).subscribe((e:any) => {
            this.partiDetails=e.record.partidetails;
            this.memberDetalis=e.record.tm;
            this.eventSelected = e.record.games;
            this.commonService.eventSelected = this.eventSelected;
            let amt = this.commonService.selectMode === 'ind' ? 100 : 500;
            amt = amt * this.eventSelected;
            this.info.emit({partid:this.prnno,amt: (amt+amt*0.18)});
        });
      return ;
    }else{
      this.fromReporting=true;
      const headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Accept', 'application/json');
          headers.append('authentication', `hello`);
          headers.append('HttpHeaderForm','123');
          let record;
          if(this.commonService.selectMode === 'ind'){
            record={
  	           "partid" : this.prnno
             }
          }else {
            record={
  	           "captainid": this.prnno
             }
          }

          const options = new RequestOptions({headers: headers});
          console.log(JSON.stringify(record));
          const url = (this.commonService.selectMode === 'ind')?"RestServiceSystem/rest/individualReport/showInfo":"RestServiceSystem/rest/teamReport/showInfo";
          this.http.post(`/${url}`, record ,options ).map((res:any)=> {
            return res.json();
          }).subscribe((e:any) => {
            this.partiDetails=e.record.partidetails;
            if(e.record.tm!=undefined && e.record.tm.length>0){
              this.memberDetalis=e.record.tm.filter((element,ind)=>{
                return element.partid !== this.prnno;
              });
            }
            this.eventSelected = e.record.games;
            let amt = this.commonService.selectMode === 'ind' ? 100 : 500;
            amt = amt * this.eventSelected;
            this.kycCheck=e.record.kycheck ==='Y';
            this.reporting = e.record.reportingflag ==='Y';
            this.paymentFlag = e.record.paymentflag==='Y';
            this.info.emit({partid:this.prnno,amt: (amt+amt*0.18)});
        });
        return;
    }
    /*
    this.fromReporting=true;
  this.partiDetails=  {
      "addressLine1":"Officer Colony",
      "addressLine2":"Railway",
      "age":16,
      "bloodGrp":"A+",
      "city":"Itarsi",
      "dob": "2000-03-12",
      "emailId":"ajinkya509@outlook.com",
      "emerPhone":"9893856323",
      "fname":"Ajinkya",
      "gender":"B",
      "idInt":"BCSPA5378R",
      "idType":"Aadhar",
      "lname":"Patil",
      "mname":"",
      "phone":"9893856323",
      "pincode":"461111",
      "school":"Margregorios",
      "schoolAddressLine1":"Itarsi",
      "schoolAddressLine2":"",
      "schoolCity":"Itarsi",
      "schoolPincode":"461111",
      "schoolState":"Madhya Pradesh",
      "state":"Madhya Pradesh"
   };
   this.memberDetalis = [
     {
                     firstname: "Gulshan",
                     lastname: "khubnani",
                     middlename: "fsd",
                     day: "1",
                     month: "5",
                     year: "2014",
                     contactno: "9999999999",
                     alternativeno: "88888888",
                     email: "gulshan.khubnani@yahoo.com",
                     dob: "21-1-2016",
                     bloodgroup:"B+"
       },
       {
                       firstname: "Gulshan",
                       lastname: "khubnani",
                       middlename: "fsd",
                       day: "1",
                       month: "5",
                       year: "2014",
                       contactno: "9999999999",
                       alternativeno: "88888888",
                       email: "gulshan.khubnani@yahoo.com",
                       dob: "21-1-2016",
                       bloodgroup:"B+"
         }
   ]
   this.eventSelected = [
      {
         "ageGrp":"U17",
         "category":"B",
         "discipline":"BADMINTON",
         "event":"UNDER 17 SINGLE",
         "gameId" : 9012
      },
      {
         "ageGrp":"U17",
         "category":"B",
         "discipline":"TT",
         "event":"UNDER 17 SINGLE",
         "gameId" : 9013
      }]*/
  }
  submit(){
    this.err=[];
    const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('authentication', `hello`);
        headers.append('HttpHeaderForm','123');
        let record;
        if(this.commonService.selectMode === 'ind'){
          record={
             "partid" : this.prnno,
             "kycflag" : (this.kycCheck === true) ? 'Y':'N',
             "reportingflag" : (this.reporting === true) ? 'Y':'N',
             "paymentflag": (this.paymentFlag === true) ? 'Y':'N'
           }
        }else {
          record={
             "captainid": this.prnno,
             "kycflag" : (this.kycCheck === true) ? 'Y':'N',
             "reportingflag" : (this.reporting === true) ? 'Y':'N',
             "paymentflag": (this.paymentFlag === true) ? 'Y':'N'
           }
        }

        const options = new RequestOptions({headers: headers});
        console.log(JSON.stringify(record));
        const url = (this.commonService.selectMode === 'ind')?"RestServiceSystem/rest/individualReport/changeInfo":"RestServiceSystem/rest/teamReport/changeInfo";
        this.http.post(`/${url}`, record ,options ).map((res:any)=> {
          return res.json();
        }).subscribe((e:any) => {
          this.err.push(e.message)
      });
  }
  editPersonalINfo(){
    this.commonService.personalEditFlag=true;
  }
  edited(value){
    this.commonService.personalEditFlag=value;
  }
  ngOnDestroy(){
      this.prnno = undefined;
      this.partiDetails=undefined;
      this.memberDetalis=undefined;
      this.eventSelected = undefined;
  }
}
