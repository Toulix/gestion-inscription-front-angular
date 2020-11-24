import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m1-gb',
  templateUrl: './m1-gb.component.html',
  styleUrls: ['./m1-gb.component.css']
})
export class M1GBComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";

  constructor() { }

  ngOnInit(): void {
  }

}
