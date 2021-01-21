import { UpdateSolariteProfileComponent } from './../../update-profile/update-solarite-profile/update-solarite-profile.component';
import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig} from "@angular/material/dialog"
import  { map,switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ScolariteProfileGQL } from 'src/generated/graphql';


interface Scolarite {
  id: string,
  nom?: string,
  prenom?: string,
  fonction?: string,
  tel?: string,
  email?: string,
  image?: string,
  sexe?: string,
}

@Component({
  selector: 'app-scolarite-profile',
  templateUrl: './scolarite-profile.component.html',
  styleUrls: ['./scolarite-profile.component.css']
})

export class ScolariteProfileComponent implements OnInit {
  defaultScolariteAvatar: string = "/assets/images/icons8_Male_User_100px.png";
  scolarite:Observable<any>;
  realAvatar: string ;
  scolariteToUpdate:  Scolarite;

  constructor(private scolariteProfileGQL: ScolariteProfileGQL,
              private activatedRoute: ActivatedRoute,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.scolarite= this.activatedRoute.paramMap
                    .pipe(
                      switchMap(params => {
                        let id = params.get('id');
                        return this.scolariteProfileGQL
                                    .watch({ scolariteId: id})
                                    .valueChanges
                      })
                    ).pipe( 
                      map(result => result.data.scolarite)
                    )

          this.scolarite.subscribe((scolarite: Scolarite) => {
                      this.scolariteToUpdate = scolarite;
                    })
  }

  onUpdateScolariteProfile() {
    const dialogConfig = new MatDialogConfig();
   
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.data = { ...this.scolariteToUpdate }
    //dialogConfig.height = "70%"
    this.dialog.open(UpdateSolariteProfileComponent, dialogConfig);
  }

}
