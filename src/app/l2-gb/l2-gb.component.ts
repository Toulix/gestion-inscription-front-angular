import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l2-gb',
  templateUrl: './l2-gb.component.html',
  styleUrls: ['./l2-gb.component.css']
})
export class L2GBComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  anneeUniversitaire = "2018-2019"; //this is hardCoded
  niveau = "L2";
  parcours = "GB";
  premierSemestre = "S1"
  deuxiemeSemestre = "S2"

  constructor() { }

  ngOnInit(): void {
  }

}
