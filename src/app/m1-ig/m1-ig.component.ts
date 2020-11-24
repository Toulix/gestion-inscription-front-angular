import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m1-ig',
  templateUrl: './m1-ig.component.html',
  styleUrls: ['./m1-ig.component.css']
})
export class M1IGComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  constructor() { }

  ngOnInit(): void {
  }

}
