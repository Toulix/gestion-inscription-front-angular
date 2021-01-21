import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l2-sr',
  templateUrl: './l2-sr.component.html',
  styleUrls: ['./l2-sr.component.css']
})
export class L2SRComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  anneeUniversitaire = "2018-2019"; //this is hardCoded
  niveau = "L2";
  parcours = "SR";
  premierSemestre = "S1"
  deuxiemeSemestre = "S2"


  constructor() { }

  ngOnInit(): void {
  }

}
