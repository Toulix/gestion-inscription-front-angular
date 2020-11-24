import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l2-sr',
  templateUrl: './l2-sr.component.html',
  styleUrls: ['./l2-sr.component.css']
})
export class L2SRComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  constructor() { }

  ngOnInit(): void {
  }

}
