import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l1-ig',
  templateUrl: './l1-ig.component.html',
  styleUrls: ['./l1-ig.component.css']
})
export class L1IGComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";

  anneeUniversitaire = "2018-2019";
  niveau = "L1";
  parcours = "IG";

  premierSemestre = "S1"
  deuxiemeSemestre = "S2"
  

  constructor() { }

  ngOnInit(): void {
  }

}
