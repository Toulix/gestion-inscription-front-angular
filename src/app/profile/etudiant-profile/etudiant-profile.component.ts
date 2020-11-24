import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InscriptionGQL } from 'src/generated/graphql';
import { Observable } from 'rxjs';
import  { map,switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-etudiant-profile',
  templateUrl: './etudiant-profile.component.html',
  styleUrls: ['./etudiant-profile.component.css']
})
export class EtudiantProfileComponent implements OnInit {

  inscription: Observable<any>
 
  constructor(private inscriptionGQL: InscriptionGQL,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.inscription = this.activatedRoute.paramMap
    .pipe(
      switchMap(params => {
        let id = params.get('id');
        return this.inscriptionGQL
                    .watch({ id: id})
                    .valueChanges
      })
    ).pipe( 
      map(result => result.data.inscription)
    )
  }

}
