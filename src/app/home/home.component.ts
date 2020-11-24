
import { Observable } from 'rxjs';
import { MeGQL } from './../../generated/graphql';
import { Component, OnInit } from '@angular/core';
import  { map,switchMap } from 'rxjs/operators'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user : Observable<any>;
id: Observable<String>
  constructor(private meGQL: MeGQL) { }

  ngOnInit(): void {
   this.user = this.meGQL.fetch()
    .pipe(
      map(result => result.data.me)
    )
    this.id = this.meGQL.fetch()
        .pipe(
      map(result => result.data.me.profile)
    )
 
  }


}
