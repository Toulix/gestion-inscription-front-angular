import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l3-ig',
  templateUrl: './l3-ig.component.html',
  styleUrls: ['./l3-ig.component.css']
})
export class L3IGComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  constructor() { }

  ngOnInit(): void {
  }

}
