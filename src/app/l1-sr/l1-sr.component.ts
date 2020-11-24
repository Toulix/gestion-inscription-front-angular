import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l1-sr',
  templateUrl: './l1-sr.component.html',
  styleUrls: ['./l1-sr.component.css']
})
export class L1SRComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  constructor() { }

  ngOnInit(): void {
  }

}
