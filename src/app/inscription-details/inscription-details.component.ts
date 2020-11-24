import { Observable } from 'rxjs';
import { InscriptionGQL } from './../../generated/graphql';
import { Component, OnInit } from '@angular/core';
import  { map,switchMap } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inscription-details',
  templateUrl: './inscription-details.component.html',
  styleUrls: ['./inscription-details.component.css']
})
export class InscriptionDetailsComponent implements OnInit {
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
