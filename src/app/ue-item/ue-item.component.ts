import { Subscription } from 'rxjs';
import { UeService } from './../service/ue.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

interface UeOne {
  id: number,
  nom: string,
  // credit?: number
  matieres: Matieres[]
}

interface Matieres {
  libelle?: string,
  abbreviation?: string,
  et?: number,
  ed?: number,
  ep?: number,
  credit?: number,
  poids?:number,
  enseignant?: any
}


@Component({
  selector: 'ue-item',
  templateUrl: './ue-item.component.html',
  styleUrls: ['./ue-item.component.css']
})
export class UeItemComponent implements OnInit {
  @Input() ueItem: UeOne;
  @Input() ueItemIndex: number;



  ueCtrl = new FormControl();

  constructor(private ueService: UeService) { }

  ngOnInit(): void {
    this.ueCtrl.setValue(this.ueItem.nom);
  }
  
  removeUe() {
    this.ueService.deleteUe(this.ueItemIndex);
  }

}
