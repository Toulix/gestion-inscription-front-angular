import { Component, OnInit } from '@angular/core';
import {  FormGroup,
          FormControl,
          FormBuilder,
          FormArray,
          Validators } from '@angular/forms';

@Component({
  selector: 'app-enseignements',
  templateUrl: './enseignements.component.html',
  styleUrls: ['./enseignements.component.css']
})
export class EnseignementsComponent implements OnInit {
  semestre1: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.semestre1 = this.fb.group({
      semestreName: ['', Validators.required],
      ue: this.fb.array([this.initUniteDEnseignement()])
    })
  }

  initUniteDEnseignement() {
    return this.fb.group({
      ueName: [''],
      matieres: this.fb.array([this.initMatieres()])
    })
  }

  initMatieres() {
    return this.fb.group({
      libelle: [''],
      abbreviation: [''],
      enseignementTheorique: [null],
      enseignementDirige: [null],
      enseignementPratique: [null],
      credit: [null],
      poids: [null] 
    })
  }

  addUniteDenseignement() {
    const ue = this.semestre1.get("ue") as FormArray;
    ue.push(this.initUniteDEnseignement());
  }

  removeUniteDenseignement(idUe) {
    const ueArray = <FormArray>this.semestre1.get("ue");
    ueArray.removeAt(idUe);
  }

  addMatiere(j) {
    console.log(j);
    const ueArray = <FormArray>this.semestre1.get("ue");
    const matieresArray = <FormArray> ueArray.controls[j].get("matieres");
    matieresArray.push(this.initMatieres())
  }

  removeMatiere(j) {
    console.log(j);
    const ueArray = <FormArray>this.semestre1.get("ue");
    const matieresArray = <FormArray>ueArray.controls[j].get("matieres");
    matieresArray.removeAt(j);

  }

}
