import { Observable, Subscription } from 'rxjs';
import { map, switchMap, startWith} from 'rxjs/operators';
import { EnseignantsGQL } from './../../generated/graphql';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';

interface Enseignant {
  id: string,
  nom?: string,
  prenom?: string,
  image?: string,
}

@Component({
  selector: 'matiere-item',
  templateUrl: './matiere-item.component.html',
  styleUrls: ['./matiere-item.component.css']
})
export class MatiereItemComponent implements OnInit {

  matiere: FormGroup
  subscription: Subscription
  enseignants: Enseignant[]

  constructor(private fb: FormBuilder,
              private enseignantsGQL: EnseignantsGQL) { 
                  
              }

  ngOnInit(): void {

    this.subscription = this.enseignantsGQL
                            .watch()
                            .valueChanges
                            .pipe(
                              map(enseignants => {
                                this.enseignants = enseignants.data.enseignants;
                              })
                            )
                            .subscribe();

  
    this.matiere = this.fb.group({
      libelle: [''],
      abbreviation: [''],
      enseignementTheorique: [''],
      enseignementDirige: [''],
      enseignementPratique: [''],
      credit: 0,
      poids: [''],
      enseignant: '',
    })

  }

}
