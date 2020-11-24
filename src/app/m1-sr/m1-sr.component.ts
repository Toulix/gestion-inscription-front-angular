import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m1-sr',
  templateUrl: './m1-sr.component.html',
  styleUrls: ['./m1-sr.component.css']
})
export class M1SRComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  constructor() { }

  ngOnInit(): void {
  }

}
