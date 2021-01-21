import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l3-ig',
  templateUrl: './l3-ig.component.html',
  styleUrls: ['./l3-ig.component.css']
})
export class L3IGComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  anneeUniversitaire = "2018-2019"; //this is hardCoded
  niveau = "L3";
  parcours = "IG";
  premierSemestre = "S1"
  deuxiemeSemestre = "S2"


  
  constructor() { }

  ngOnInit(): void {
  }

}
