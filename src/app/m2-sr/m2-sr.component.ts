import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m2-sr',
  templateUrl: './m2-sr.component.html',
  styleUrls: ['./m2-sr.component.css']
})
export class M2SRComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  constructor() { }

  ngOnInit(): void {
  }

}
