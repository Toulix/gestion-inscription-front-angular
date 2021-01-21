import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m1-ig',
  templateUrl: './m1-ig.component.html',
  styleUrls: ['./m1-ig.component.css']
})
export class M1IGComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  anneeUniversitaire = "2018-2019"; //this is hardCoded
  niveau = "M1";
  parcours = "IG";
  premierSemestre = "S1"
  deuxiemeSemestre = "S2";


  constructor() { }

  ngOnInit(): void {
  }

}
