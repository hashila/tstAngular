import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {



  constructor() {

    var vehicle=[
      {
        "brand": "bmw",
        "buildYear": "1995",
        "engineNumber": "1515489",
        "fuelType": "petrol",
        "image": "bmw image",
        "model": "ak 47",
        "onBoardDate": "2017",
        "orgId": "455",
        "photo": "string",
        "regNumber": "455",
        "type": 0,
        "vehicleId": "455"
      },
      {
        "brand": "benz",
        "buildYear": "1887",
        "engineNumber": "1515470",
        "fuelType": "string",
        "image": "string",
        "model": "string",
        "onBoardDate": "string",
        "orgId": "322",
        "photo": "string",
        "regNumber": "string",
        "type": 0,
        "vehicleId": "string"
      },
      {
        "brand": "audi",
        "buildYear": "2018",
        "engineNumber": "1515488",
        "fuelType": "water",
        "image": "string",
        "model": "string",
        "onBoardDate": "string",
        "orgId": "255",
        "photo": "string",
        "regNumber": "string",
        "type": 0,
        "vehicleId": "string"
      },
    ]

   }

  ngOnInit() {
  }

}
