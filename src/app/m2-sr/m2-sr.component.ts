import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m2-sr',
  templateUrl: './m2-sr.component.html',
  styleUrls: ['./m2-sr.component.css']
})
export class M2SRComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  anneeUniversitaire = "2018-2019"; //this is hardCoded
  niveau = "M2";
  parcours = "SR";
  premierSemestre = "S1"
  deuxiemeSemestre = "S2";

  semestreName = "S1";

  constructor() { }

  ngOnInit(): void {
  }

}
