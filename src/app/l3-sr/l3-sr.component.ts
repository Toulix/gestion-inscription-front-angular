import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l3-sr',
  templateUrl: './l3-sr.component.html',
  styleUrls: ['./l3-sr.component.css']
})
export class L3SRComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  anneeUniversitaire = "2018-2019"; //this is hardCoded
  niveau = "L3";
  parcours = "SR";
  premierSemestre = "S1"
  deuxiemeSemestre = "S2"

  

  constructor() { }

  ngOnInit(): void {
  }

}
