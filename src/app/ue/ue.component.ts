import { UeService } from './../service/ue.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


// single Ue
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
  enseignant?: any,
}


@Component({
  selector: 'ue',
  templateUrl: './ue.component.html',
  styleUrls: ['./ue.component.css']
})
export class UeComponent implements OnInit, OnDestroy{
arrayOfUe : UeOne[]
uesSubscription: Subscription;

  constructor(private ueService: UeService) { }

  ngOnInit(): void {
    this.uesSubscription = this.ueService.uesSubject
                          .subscribe( (ues : UeOne[]) => this.arrayOfUe = ues);
    this.ueService.emitUesSubject();
  }

  addUe() {
    this.ueService.addNewUe()
  }

  ngOnDestroy() {
    this.uesSubscription.unsubscribe();
  }


}
