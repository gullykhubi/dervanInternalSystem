import { Component, OnInit } from '@angular/core';
import { RequestOptions , Http , Headers } from '@angular/http';
import { CommonService } from "../common.service";
declare var pdfMake: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cashierName:any='';
  err:any =[];
  partid : any;
  amt:any;
  receiptnumber:any;
  pdf: any;
  refNo:any='';
  modeOfPayment:any;
  newP=true;
  constructor(private http : Http,public commonService: CommonService) { }

  ngOnInit() {
  }
  getData(obj){
    this.partid = obj.partid;
    this.amt=obj.amt;
  }
  newPayment(){
    this.refNo='';
    this.cashierName='';
    this.modeOfPayment= undefined;
    this.newP= false;
    setTimeout(()=>{
      this.newP = true;
    },500);
    this.receiptnumber = undefined;
  }
  printReceipt(){
    let currentDate= new Date();
    let d= currentDate.getDate()+'-'+currentDate.getMonth()+'-'+currentDate.getFullYear();
    let name = this.commonService.partidetails.firstname + ' '+this.commonService.partidetails.lastname;
    let schoolName=this.commonService.partidetails.nameOfSchoolOrClub;
    let gamesCount=this.commonService.eventSelected.length;
    let amt = gamesCount * (this.commonService.selectMode === 'ind' ?100 : 500);
    let msg = (this.commonService.selectMode === 'ind')? 'Individual Event' : 'Team Event';
    let content = {
  "content": [
    {
      "fontSize": 10,
      "columns": [
        {
          "width": 350,
          "stack": [
            {
              "fontSize": 13,
              "bold": true,
              "text": "SHRI VITHALRAO JOSHI CHARITIES TRUST"
            },
            {
              "fontSize": 13,
              "bold": true,
              "text": "SPORTS ACADEMY"
            },
            {
              "text": "At Kasarwadi, Post : Sawarde, Tal : Chiplun,"
            },
            {
              "text": "Dist : Ratnagiri, Pin : 415 606"
            }
          ]
        },
        {
          "stack": [
            {
              "text": "Reg, Number : E-6678 Bom"
            },
            {
              "text": "PAN : AABTS7103H"
            },
            {
              "text": "GSTN : 27AABTS7103H1ZK"
            },
            {
              "text": [
                {
                  "text": "Receipt Date :"
                },
                {
                  "text": d
                }
              ]
            },
            {
              "text": [
                {
                  "text": "Receipt Number :"
                },
                {
                  "text": this.receiptnumber,
                  "color": "red",
                  "italics": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "fontSize": 10,
      "columns": [
        {
          "width": 200,
          "text": [
            {
              "text": "Participant Name :"
            },
            {
              "text": name,
              "color": "red",
              "italics": true
            }
          ]
        },
        {
          "width": 150,
          "text": [
            {
              "text": "Village/City :"
            },
            {
              "text": "Dervan",
              "color": "red",
              "italics": true
            }
          ]
        },
        {
          "text": [
            {
              "text": "District :"
            },
            {
              "text": "Ratnagiri",
              "color": "red",
              "italics": true
            }
          ]
        }
      ]
    },
    {
      "fontSize": 10,
      "columns": [
        {
          "text": [
            {
              "text": "School / Club :"
            },
            {
              "text": schoolName,
              "color": "red",
              "italics": true
            }
          ]
        }
      ]
    },
    {
      "fontSize": 10,
      "columns": [
        {
          "text": [
            {
              "text": "Permanent Registration Number ( PRN ) :"
            },
            {
              "text": this.partid,
              "color": "red",
              "italics": true
            }
          ]
        }
      ]
    },
    {
      "fontSize": 10,
      "table": {
        "widths": [
          10,
          300,
          100,
          50
        ],
        "body": [
          [
            "",
            "",
            "No of Events",
            "Entry Fee"
          ],
          [
            "1",
            "Participation in Dervan Youth Games 2018 - "+ msg,
            gamesCount,
            amt
          ],
          [
            "",
            "",
            "Sub Total",
            amt
          ],
          [
            "",
            "",
            "Add CGST @ 9%",
            amt * 0.09
          ],
          [
            "",
            "",
            "Add SGST @ 9%",
            amt * 0.09
          ],
          [
            "",
            "",
            "Grand Total",
           (amt+  amt * 0.18)
          ]
        ]
      }
    },
    {
      "fontSize": 10,
      "columns": [
        {
          "margin": [
            0,
            40,
            0,
            0
          ],
          "text": [
            {
              "text": "Mode of Payment :"
            },
            {
              "text": this.modeOfPayment,
              "color": "red",
              "italics": true
            }
          ]
        }
      ]
    },
    {
      "fontSize": 10,
      "margin": [
        0,
        5,
        0,
        0
      ],
      "columns": [
        {
          "text": [
            {
              "text": "Payment Details :"
            },
            {
              "text": this.refNo,
              "color": "red",
              "italics": true
            }
          ]
        }
      ]
    },
    {
      "fontSize": 10,
      "columns": [
        {
          "alignment": "right",
          "margin": [
            0,
            0,
            40,
            0
          ],
          "text": [
            {
              "text": "Receivers Signature"
            }
          ]
        }
      ]
    },
    {
      "fontSize": 10,
      "columns": [
        {"alignment": "right",
          "margin": [
            0,
            10,
            50,
            0
          ],
          "text": [
            {
              "text": "Cashier :"
            },
            {
              "text": this.cashierName,
              "color": "red",
              "italics": true
            }
          ]
        }
      ]
    },
    {
      "margin": [
        -40,
        -320,
        0,
        0
      ],
      "canvas": [
        {
          "type": "rect",
          "x": 20,
          "y": 0,
          "w": 540,
          "h": 340,
          "lineWidth": 3,
          "lineColor": "#000"
        }
      ]
    }
  ]
    }
    this.pdf = pdfMake;
    this.pdf.createPdf(content).download('Receipt.pdf');
  }
  receivedPayment(){
    this.err=[];
    if(this.cashierName=== ''){
      this.err.push('Enter the Cashier Name');
    }
    if(this.modeOfPayment===  undefined){
      this.err.push('Select the Mode of Payment.');
    }
    if(this.refNo.trim() ===  ''){
      this.err.push('Enter Reference Number.');
    }
    if(this.err.length>0){
      return;
    }
    const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('authentication', `hello`);
        headers.append('HttpHeaderForm','123');
        let record ;
        let gamesCount=this.commonService.eventSelected.length;
        let amt = gamesCount * (this.commonService.selectMode === 'ind' ?100 : 500);
        if(this.commonService.selectMode === 'ind'){
          record={
	         "partid" : this.partid,
	          "amt" : (amt+  amt * 0.18),
	          "user" : this.cashierName,
            "paymentmode": this.modeOfPayment,
            "referencenumber":  this.refNo
          }
          }else{
            record={
    	         "captainid" : this.partid,
    	          "amt" : (amt+  amt * 0.18),
    	          "user" : this.cashierName,
                "paymentmode":  this.modeOfPayment,
                "referencenumber":  this.refNo
              }
          }

        const options = new RequestOptions({headers: headers});
        const url = (this.commonService.selectMode === 'ind')?"RestServiceSystem/rest/acceptIndPay":"RestServiceSystem/rest/acceptTeamPay";
        this.http.post(`/${url}`, record ,options ).map((res:any)=> {
          return res.json();
        }).subscribe((e:any) => {
          if(e.success === false)
            this.err.push(e.message);
            else{
              this.receiptnumber = e.receiptnumber;
            }
        });
  }
}
