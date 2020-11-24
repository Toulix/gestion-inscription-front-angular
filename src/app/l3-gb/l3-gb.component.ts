import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l3-gb',
  templateUrl: './l3-gb.component.html',
  styleUrls: ['./l3-gb.component.css']
})
export class L3GBComponent implements OnInit {
 
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";

  constructor() { }

  ngOnInit(): void {
  }

}
