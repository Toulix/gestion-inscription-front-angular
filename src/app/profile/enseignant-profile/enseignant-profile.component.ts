import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  { map,switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { EnseignantProfileGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-enseignant-profile',
  templateUrl: './enseignant-profile.component.html',
  styleUrls: ['./enseignant-profile.component.css']
})
export class EnseignantProfileComponent implements OnInit {

  enseignant: Observable<any>
 
  constructor( private enseignantProfileGQL: EnseignantProfileGQL,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.enseignant = this.activatedRoute.paramMap
    .pipe(
      switchMap(params => {
        let id = params.get('id');
        return this.enseignantProfileGQL
                    .watch({ enseignantId: id})
                    .valueChanges
      })
    ).pipe( 
      map(result => result.data.enseignant)
    )

    this.enseignant.subscribe(
      result => console.log(result)
    )
  }
}

