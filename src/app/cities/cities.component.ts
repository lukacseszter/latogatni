/*
* File: cities.component.scss
* Author: Lukács Eszter
* Copyright: 2023, Lukács Eszter
* Group: Szoft II N
* Date: 2023-01-20
* Github: https://github.com/lukacseszter/
* Licenc: GNU GPL
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  cities:any = []
  constructor() {
  }

  ngOnInit(): void {
      this.cities = [
        {name: "Székesfehérvár", county: "Fejér", area: 170.89 , population: 95545},
        {name: "Szombathely", county: "Vas", area: 97.5 , population: 78324},
        {name: "Sopron", county: "Győr-Moson_Sopron", area: 169.04, population: 62900},
        {name: "Zalaegerszeg", county: "Zala", area: 102.42 , population: 55470},
        {name: "Sárvár", county: "Vas", area: 64.65, population: 15072},
        {name: "Lenti", county: "Zala", area: 73.79 , population: 7348},
        {name: "Zalakaros", county: "Zala", area: 17.17 , population: 1936}
      ]
  }
}
