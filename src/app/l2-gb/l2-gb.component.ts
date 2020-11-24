import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l2-gb',
  templateUrl: './l2-gb.component.html',
  styleUrls: ['./l2-gb.component.css']
})
export class L2GBComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  constructor() { }

  ngOnInit(): void {
  }

}
