import { Injectable } from '@angular/core';

@Injectable()
export class DrawMatchService {
  placement = {
    "round2":{
      "1":[130,-137,0,20],
      "2":[130,-308,0,20],
      "4":[130,-653,0,20]
    },
    "round3":{
      "2":[250,-567,0,5],
      "1":[250,-222,0,20]
    }
  }
  placementTeam = {
      "round2":{
        "1":[50,-150,0,5],
        "2":[50,-332,0,5],
        "4":[50,-696,0,5]
      },
      "round3":{
        "2":[260,-650,0,20],
        "1":[260,-287,0,20]
      }
  }
  constructor() { }
  print(obj,type){
    let temp=[];
    let content=[];
    for(let i=0;i<obj.length;i++){
      temp.push(obj[i]);
      if( (i + 1) % 8 === 0 ){
        let a=(type==1)?this.drawIndividualMatches(temp):this.drawTeamMatches(temp);
        for(let j=0;j<a.length;j++){
          content.push(a[j]);
        }
        if(i<obj.length-1){
          content.push({ text: '', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8] });
        }
        temp=[];
      }
    }
    if(temp.length>0){
      let a=(type==1)?this.drawIndividualMatches(temp):this.drawTeamMatches(temp);
      for(let j=0;j<a.length;j++){
        content.push(a[j]);
      }

    }
    return content;
  }
  drawTeamMatches(obj){
    let content = [];
    for(let i = 0;i<obj.length;i++){
      content.push(this.printTeamRoundOne(obj[i]));
    }
    let len = obj.length/2;
    if(len > 1){
    for(let i = 0;i<len;i++){
      content.push(this.printTeamRoundTwo(i,len));
    }
    len = len/2;
    if(len > 1){
      for(let i = 0;i<len;i++){
        content.push(this.printTeamRoundThird(i,len));
      }
      content.push(this.printTeamRoundFour(0,1));

    }else{
      content.push(this.printTeamRoundThird(0,1));
      content.push(this.printTeamRoundForFourMembers());
    }
  }else{
    content.push(this.printTeamRoundTwo(0,1));
    content.push(this.printTeamRoundForTwoMembers());
  }
    return content;
  }
  printTeamRoundForTwoMembers(){
    return  {
	        "margin": [
        260,
        -102,
        0,
        5
      ],

	        fontSize:9,
	        stack:[
	           {
	               margin:[-15,0,0,0],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 35,
          "x2": 10,
          "y2": 35,
          "lineWidth": 2,
          "lineColor": "#000"
        }
      ]},      {
	               margin:[-15,-42,0,0],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 5,
          "x2": 0,
          "y2": 75,
          "lineWidth": 2,
          "lineColor": "#000"
        }
      ]},
	            {margin:[0,-38,0,10],
	             text:""
	            },
    {
      "margin": [
        -5,
        -15,
        0,
        10
      ],
      "canvas": [
        {
          "type": "rect",
          "x": 0,
          "y": 0,
          "w": 240,
          "h": 20,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    }]}

  }
  printTeamRoundForFourMembers(){
    return  {
	        "margin": [
        310,
        -150,
        0,
        5
      ],

	        fontSize:9,
	        stack:[
	           {
	               margin:[-15,0,0,0],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 15,
          "x2": 10,
          "y2": 15,
          "lineWidth": 2,
          "lineColor": "#000"
        }
      ]},      {
	               margin:[-15,-80,0,0],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 5,
          "x2": 0,
          "y2": 165,
          "lineWidth": 2,
          "lineColor": "#000"
        }
      ]},
	            {margin:[0,-90,0,10],
	             text:""
	            },
    {
      "margin": [
        -5,
        -15,
        0,
        10
      ],
      "canvas": [
        {
          "type": "rect",
          "x": 0,
          "y": 0,
          "w": 240,
          "h": 20,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    }



  ]};
  }
  printTeamRoundFour(ind, len){
    return {
	        "margin": [
        310,
        -504,
        0,
        5
      ],

	        fontSize:9,
	        stack:[
	           {
	               margin:[-15,0,0,0],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 15,
          "x2": 10,
          "y2": 15,
          "lineWidth": 2,
          "lineColor": "#000"
        }
      ]},      {
	               margin:[-15,-80,0,0],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 5,
          "x2": 0,
          "y2": 165,
          "lineWidth": 2,
          "lineColor": "#000"
        }
      ]},
	            {margin:[0,-90,0,10],
	             text:""
	            },
    {
      "margin": [
        -5,
        -15,
        0,
        10
      ],
      "canvas": [
        {
          "type": "rect",
          "x": 0,
          "y": 0,
          "w": 240,
          "h": 20,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    },      {
	               margin:[100,-15,0,0],
      "canvas": [
        {
          "type": "line",
          "x1": 100,
          "y1": 5,
          "x2": 100,
          "y2": 150,
          "lineWidth": 2,
          "lineColor": "#000"
        }
      ]},      {
	               margin:[100,45,0,0],
      "canvas": [
        {
          "type": "line",
          "x1": 100,
          "y1": 5,
          "x2": 100,
          "y2": 150,
          "lineWidth": 2,
          "lineColor": "#000"
        }
      ]}
    ,
             {
	               margin:[-15,0,0,0],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 15,
          "x2": 10,
          "y2": 15,
          "lineWidth": 2,
          "lineColor": "#000"
        }
      ]},      {
	               margin:[-15,-80,0,0],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 5,
          "x2": 0,
          "y2": 165,
          "lineWidth": 2,
          "lineColor": "#000"
        }
      ]},
	            {margin:[0,-90,0,10],
	             text:""
	            },
    {
      "margin": [
        -5,
        -15,
        0,
        10
      ],
      "canvas": [
        {
          "type": "rect",
          "x": 0,
          "y": 0,
          "w": 240,
          "h": 20,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    },
    {
      "margin": [
        -5,
        -230,
        0,
        10
      ],
      "canvas": [
        {
          "type": "rect",
          "x": 0,
          "y": 0,
          "w": 240,
          "h": 50,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    }



	            ]}
  }
  printTeamRoundThird(ind, len){
    return {
	        "margin": (ind === 0)?this.placementTeam['round3'][len] : [270,110,0,5],

	        "fontSize":9,
	        "stack":[
	           {
	               "margin":[-15,0,0,0],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 35,
          "x2": 10,
          "y2": 35,
          "lineWidth": 2,
          "lineColor": "#000"
        }
      ]},      {
	               "margin":[-15,-42,0,0],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 5,
          "x2": 0,
          "y2": 75,
          "lineWidth": 2,
          "lineColor": "#000"
        }
      ]},
	            {"margin":[0,-38,0,10],
	             "text":""
	            },
    {
      "margin": [
        -5,
        -15,
        0,
        10
      ],
      "canvas": [
        {
          "type": "rect",
          "x": 0,
          "y": 0,
          "w": 240,
          "h": 20,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    }
    ,
            {
	               "margin":[-15,127,0,0],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 35,
          "x2": 10,
          "y2": 35,
          "lineWidth": 2,
          "lineColor": "#000"
        }
      ]},      {
	               "margin":[-15,-42,0,0],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 5,
          "x2": 0,
          "y2": 75,
          "lineWidth": 2,
          "lineColor": "#000"
        }
      ]},
	            {"margin":[0,-38,0,10],
	             "text":""
	            },
    {
      "margin": [
        -5,
        -15,
        0,
        10
      ],
      "canvas": [
        {
          "type": "rect",
          "x": 0,
          "y": 0,
          "w": 240,
          "h": 20,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    }



	            ]}
  }
  printTeamRoundTwo(ind, len){
    return {
  "margin": (ind===0)? this.placementTeam['round2'][len]:[50,62,0,5],
  "fontSize": 9,
  "stack": [
    {
      "margin": [
        -15,
        0,
        0,
        0
      ],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 5,
          "x2": 10,
          "y2": 5,
          "lineWidth": 2,
          "lineColor": "#000"
        }
      ]
    },
    {
      "margin": [
        -15,
        -22,
        0,
        0
      ],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 5,
          "x2": 0,
          "y2": 40,
          "lineWidth": 2,
          "lineColor": "#000"
        }
      ]
    },
    {
      "margin": [
        0,
        -23,
        0,
        10
      ],
      "text": ""
    },
    {
      "margin": [
        -5,
        -15,
        0,
        10
      ],
      "canvas": [
        {
          "type": "rect",
          "x": 0,
          "y": 0,
          "w": 240,
          "h": 20,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    },
    {
      "margin": [
        -15,
        65,
        0,
        0
      ],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 5,
          "x2": 10,
          "y2": 5,
          "lineWidth": 2,
          "lineColor": "#000"
        }
      ]
    },
    {
      "margin": [
        -15,
        -22,
        0,
        0
      ],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 5,
          "x2": 0,
          "y2": 40,
          "lineWidth": 2,
          "lineColor": "#000"
        }
      ]
    },
    {
      "margin": [
        0,
        -23,
        0,
        10
      ],
      "text": ""
    },
    {
      "margin": [
        -5,
        -15,
        0,
        10
      ],
      "canvas": [
        {
          "type": "rect",
          "x": 0,
          "y": 0,
          "w": 240,
          "h": 20,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    }
  ]
}
  }
printTeamRoundOne(matchObj){
  return {
  "margin": [
    0,
    5,
    0,
    5
  ],
  "fontSize": 9,
  "stack": [
    {
      "text": matchObj.firstTeamName.substr(0,50)
    },
    {
      "margin": [
        -5,
        -15,
        0,
        10
      ],
      "canvas": [
        {
          "type": "rect",
          "x": 0,
          "y": 0,
          "w": 240,
          "h": 20,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    },
    {
      "margin": [
        0,
        30,
        0,
        0
      ],
      "text":  matchObj.lastTeamSchoolName.substr(0,50)
    },
    {
      "margin": [
        -5,
        -15,
        0,
        10
      ],
      "canvas": [
        {
          "type": "rect",
          "x": 0,
          "y": 0,
          "w": 240,
          "h": 20,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    }
  ]
}
}


  drawIndividualMatches(obj){
    let content = [];
    for(let i = 0;i<obj.length;i++){
      content.push(this.printIndividualRoundOne(obj[i]));
    }
    let len = obj.length/2;
    if(len > 1){
    for(let i = 0;i<len;i++){
      content.push(this.printIndividualRoundTwo(i,len));
    }
    len = len/2;
    if(len > 1){
      for(let i = 0;i<len;i++){
        content.push(this.printIndividualRoundThird(i,len));
      }
      content.push(this.printIndividualRoundFour(0,1));

    }else{
      content.push(this.printIndividualRoundThird(0,1));
    }
  }else{
    content.push(this.printIndividualRoundTwo(0,1));
  }
    return content;
  }
  printIndividualRoundFour(ind, len){
    return {
  "margin": [
    370,
    -394,
    0,
    20
  ],
  "fontSize": 9,
  "stack": [
    {
      "margin": [
        -5,
        -5,
        0,
        10
      ],
      "canvas": [
        {
          "type": "rect",
          "x": 0,
          "y": 0,
          "w": 100,
          "h": 20,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    },
    {
      "margin": [
        95,
        -20,
        0,
        247
      ],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 0,
          "x2": 15,
          "y2": 0,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    },
    {
      "margin": [
        -5,
        87,
        0,
        10
      ],
      "canvas": [
        {
          "type": "rect",
          "x": 0,
          "y": 0,
          "w": 100,
          "h": 20,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    },
    {
      "margin": [
        95,
        -20,
        0,
        0
      ],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 0,
          "x2": 15,
          "y2": 0,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    },
    {
      "margin": [
        109,
        0,
        0,
        25
      ],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 0,
          "x2": 0,
          "y2": -344,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    },
    {
      "margin": [
        109,
        -220,
        0,
        25
      ],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 15,
          "x2": 70,
          "y2": 15,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    }
  ]
}
  }
  printIndividualRoundThird(ind, len){
    console.log(len)
    return {
  "margin": (ind === 0) ? this.placement["round3"][len+''] : [250,222,0,20],
  "fontSize": 9,
  "stack": [
    {
      "margin": [
        -5,
        -5,
        0,
        10
      ],
      "canvas": [
        {
          "type": "rect",
          "x": 0,
          "y": 0,
          "w": 100,
          "h": 20,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    },
    {
      "margin": [
        95,
        -20,
        0,
        75
      ],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 0,
          "x2": 15,
          "y2": 0,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    },
    {
      "margin": [
        -5,
        87,
        0,
        10
      ],
      "canvas": [
        {
          "type": "rect",
          "x": 0,
          "y": 0,
          "w": 100,
          "h": 20,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    },
    {
      "margin": [
        95,
        -20,
        0,
        0
      ],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 0,
          "x2": 15,
          "y2": 0,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    },
    {
      "margin": [
        109,
        0,
        0,
        25
      ],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 0,
          "x2": 0,
          "y2": -172,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    },
    {
      "margin": [
        109,
        -125,
        0,
        25
      ],
      "canvas": [
        {
          "type": "line",
          "x1": 0,
          "y1": 15,
          "x2": 5,
          "y2": 15,
          "lineWidth": 1,
          "lineColor": "#000"
        }
      ]
    }
  ]
}
  }
  printIndividualRoundTwo(ind,len){
    console.log(len);
    return {
              "margin": (ind === 0)?this.placement['round2'][len+'']:[130,81,0,20],
              "fontSize": 9,
              "stack": [
                {
                  "margin": [-5,-5,0,10],
                  "canvas": [
                    {
                      "type": "rect",
                      "x": 0,
                      "y": 0,
                      "w": 100,
                      "h": 20,
                      "lineWidth": 1,
                      "lineColor": "#000"
                    }
                  ]
                },
                {
                  "margin": [95,-20,0,75],
                  "canvas": [
                    {
                      "type": "line",
                      "x1": 0,
                      "y1": 0,
                      "x2": 15,
                      "y2": 0,
                      "lineWidth": 1,
                      "lineColor": "#000"
                    }
                  ]
                },
                {
                  "margin": [-5,1,0,10],
                  "canvas": [
                    {
                      "type": "rect",
                      "x": 0,
                      "y": 0,
                      "w": 100,
                      "h": 20,
                      "lineWidth": 1,
                      "lineColor": "#000"
                    }
                  ]
                },
                {
                  "margin": [95,-20,0,0],
                  "canvas": [
                    {
                      "type": "line",
                      "x1": 0,
                      "y1": 0,
                      "x2": 15,
                      "y2": 0,
                      "lineWidth": 1,
                      "lineColor": "#000"
                    }
                  ]
                },
                {
                  "margin": [109,0,0,25],
                  "canvas": [
                    {
                      "type": "line",
                      "x1": 0,
                      "y1": 0,
                      "x2": 0,
                      "y2": -87,
                      "lineWidth": 1,
                      "lineColor": "#000"
                    }
                  ]
                },
                {
                  "margin": [109,-85,0,25],
                  "canvas": [
                    {
                      "type": "line",
                      "x1": 0,
                      "y1": 15,
                      "x2": 5,
                      "y2": 15,
                      "lineWidth": 1,
                      "lineColor": "#000"
                    }
                  ]
                }
              ]
            }
  }
  printIndividualRoundOne(matchObj) {
    return {
              "margin": [ 0, 20, 0, 20],
              "fontSize": 9,
              "stack": [
                  {
                    "text": matchObj.firstTeamName
                  },
                  {
                    "margin": [ -5, -15, 0, 10],
                    "canvas": [
                      {
                        "type": "rect",
                        "x": 0,
                        "y": 0,
                        "w": 100,
                        "h": 20,
                        "lineWidth": 1,
                        "lineColor": "#000"
                      }
                    ]
                  },
                  {
                    "margin": [95, -20, 0, 25],
                    "canvas": [
                      {
                        "type": "line",
                        "x1": 0,
                        "y1": 0,
                        "x2": 15,
                        "y2": 0,
                        "lineWidth": 1,
                        "lineColor": "#000"
                      }
                    ]
                  },
                  {
                    "text": matchObj.lastTeamSchoolName
                  },
                  {
                    "margin": [-5, -15, 0, 10],
                    "canvas": [
                      {
                        "type": "rect",
                        "x": 0,
                        "y": 0,
                        "w": 100,
                        "h": 20,
                        "lineWidth": 1,
                        "lineColor": "#000"
                      }
                    ]
                  },
                  {
                    "margin": [ 95, -20, 0, 25],
                    "canvas": [
                      {
                        "type": "line",
                        "x1": 0,
                        "y1": 0,
                        "x2": 15,
                        "y2": 0,
                        "lineWidth": 1,
                        "lineColor": "#000"
                      }
                    ]
                  },
                  {
                    "margin": [109,-55,0,25],
                    "canvas": [
                      {
                        "type": "line",
                        "x1": 0,
                        "y1": 0,
                        "x2": 0,
                        "y2": 30,
                        "lineWidth": 1,
                        "lineColor": "#000"
                      }
                    ]
                  },
                  {
                    "margin": [109,-55,0,25],
                    "canvas": [
                      {
                        "type": "line",
                        "x1": 0,
                        "y1": 15,
                        "x2": 15,
                        "y2": 15,
                        "lineWidth": 1,
                        "lineColor": "#000"
                      }
                    ]
                  }
                ]
              }
            }

}
