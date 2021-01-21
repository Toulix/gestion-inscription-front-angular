import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l2-ig',
  templateUrl: './l2-ig.component.html',
  styleUrls: ['./l2-ig.component.css']
})
export class L2IGComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  anneeUniversitaire = "2018-2019"; //this is hardCoded
  niveau = "L2";
  parcours = "IG";
  premierSemestre = "S1"
  deuxiemeSemestre = "S2"

  // semestreName = "S1";
  
  constructor() { }

  ngOnInit(): void {
  }

}
