import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m2-ig',
  templateUrl: './m2-ig.component.html',
  styleUrls: ['./m2-ig.component.css']
})
export class M2IGComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  anneeUniversitaire = "2018-2019"; //this is hardCoded
  niveau = "M2";
  parcours = "GB";
  premierSemestre = "S1"
  deuxiemeSemestre = "S2";



  constructor() { }

  ngOnInit(): void {
  }

}
