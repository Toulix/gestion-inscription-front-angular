
import { Component, OnInit } from '@angular/core';
import { InscriptionsListGQL } from 'src/generated/graphql';
import { Observable } from 'rxjs';
import  { map } from 'rxjs/operators'

@Component({
  selector: 'app-inscription-list',
  templateUrl: './inscription-list.component.html',
  styleUrls: ['./inscription-list.component.css']
})


export class InscriptionListComponent implements OnInit {
inscriptionsList : Observable<any> 

  constructor(private inscriptionsListGQL : InscriptionsListGQL) { }

  ngOnInit(): void {  
    this.inscriptionsList = this.inscriptionsListGQL
    .watch()
    .valueChanges
    .pipe(
      map(result => result.data.inscriptions));
  }

}
