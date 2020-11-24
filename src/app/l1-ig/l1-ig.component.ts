import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l1-ig',
  templateUrl: './l1-ig.component.html',
  styleUrls: ['./l1-ig.component.css']
})
export class L1IGComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  constructor() { }

  ngOnInit(): void {
  }

}
