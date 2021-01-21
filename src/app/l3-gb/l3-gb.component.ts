import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l3-gb',
  templateUrl: './l3-gb.component.html',
  styleUrls: ['./l3-gb.component.css']
})
export class L3GBComponent implements OnInit {
 
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  anneeUniversitaire = "2018-2019"; //this is hardCoded
  niveau = "L3";
  parcours = "GB";
  premierSemestre = "S1"
  deuxiemeSemestre = "S2"

  constructor() { }

  ngOnInit(): void {
  }

}
