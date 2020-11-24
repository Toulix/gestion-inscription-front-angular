import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l2-ig',
  templateUrl: './l2-ig.component.html',
  styleUrls: ['./l2-ig.component.css']
})
export class L2IGComponent implements OnInit {
  PremierSemestre = "Premier Semestre";
  DeuxiemeSemestre = "Deuxième Semestre";
  
  constructor() { }

  ngOnInit(): void {
  }

}
