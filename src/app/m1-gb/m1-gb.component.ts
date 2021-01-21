import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m1-gb',
  templateUrl: './m1-gb.component.html',
  styleUrls: ['./m1-gb.component.css']
})
export class M1GBComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  anneeUniversitaire = "2018-2019"; //this is hardCoded
  niveau = "M1";
  parcours = "GB";
  premierSemestre = "S1"
  deuxiemeSemestre = "S2";



  constructor() { }

  ngOnInit(): void {
  }

}
