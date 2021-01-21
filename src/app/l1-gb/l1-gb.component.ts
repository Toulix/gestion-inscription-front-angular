import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l1-gb',
  templateUrl: './l1-gb.component.html',
  styleUrls: ['./l1-gb.component.css']
})
export class L1GBComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  
  anneeUniversitaire = "2018-2019";
  niveau = "L1";
  parcours = "GB";

  premierSemestre = "S1";
 
  deuxiemeSemestre = "S2"

  constructor() { }

  ngOnInit(): void {
    console.log()
  }

}
