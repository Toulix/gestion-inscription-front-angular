import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m1-sr',
  templateUrl: './m1-sr.component.html',
  styleUrls: ['./m1-sr.component.css']
})
export class M1SRComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  anneeUniversitaire = "2018-2019"; //this is hardCoded
  niveau = "M1";
  parcours = "SR";
  premierSemestre = "S1"
  deuxiemeSemestre = "S2";

  
  constructor() { }

  ngOnInit(): void {
  }

}
