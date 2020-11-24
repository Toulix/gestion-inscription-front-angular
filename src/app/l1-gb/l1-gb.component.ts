import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l1-gb',
  templateUrl: './l1-gb.component.html',
  styleUrls: ['./l1-gb.component.css']
})
export class L1GBComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  constructor() { }

  ngOnInit(): void {
  }

}
