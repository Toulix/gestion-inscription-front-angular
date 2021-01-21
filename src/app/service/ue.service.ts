import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class UeService {
  uesSubject = new Subject<UeOne[]>();

 private ues: UeOne[] = [
    {
      id: 1,
      nom: "Mathèmatique pour l'informatique",
      matieres: []
    },
    {
      id: 2,
      nom: "Algorithmique",
      matieres: []
    }
  ]

  constructor() { }

emitUesSubject() {
  this.uesSubject.next(this.ues.slice());
}

  // getUes() {
  //   return this.ues;
  // }

  addNewUe() {
    let id = ++this.ues[this.ues.length-1].id;
    const enwUe = { id, nom: "", matieres: []}
    this.ues.push(enwUe);
    this.emitUesSubject();
  }

  deleteUe(id) {
    const ue = this.ues.find(ue => ue.id == id);
    let index = this.ues.indexOf(ue);
    this.ues.splice(index, 1);
    this.emitUesSubject();
  }

  updateUe() {

  }

}
