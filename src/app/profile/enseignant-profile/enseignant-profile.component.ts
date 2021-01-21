
import { UpdateEnseignantProfileComponent } from './../../update-profile/update-enseignant-profile/update-enseignant-profile.component';


import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  { map,switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EnseignantProfileGQL } from 'src/generated/graphql';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig} from "@angular/material/dialog"

interface Enseignant {
  id: string,
  nom?: string,
  prenom?: string,
  titre?: string,
  tel?: string,
  email?: string,
  image?: string,
  sexe?: string,
}

@Component({
  selector: 'app-enseignant-profile',
  templateUrl: './enseignant-profile.component.html',
  styleUrls: ['./enseignant-profile.component.css']
})
export class EnseignantProfileComponent implements OnInit {
  defaultEnseignantAvatar: string = "/assets/images/icons8_Male_User_100px.png"
  sub: Subscription;
  enseignant:Observable<any>;
  realAvatar: string ;
  enseignantToUpdate:  Enseignant;

  constructor(private enseignantProfileGQL: EnseignantProfileGQL,
              private activatedRoute: ActivatedRoute,
              private dialog: MatDialog) { }

  ngOnInit() {
          this.enseignant= this.activatedRoute.paramMap
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

          this.enseignant.subscribe((enseignant: Enseignant) => {
         
            console.log(" enseigant image: " + enseignant.image); //mety
                      this.enseignantToUpdate = enseignant;
                    })
   }

  //  ngOnInit(): void {  
  //   this.inscriptionsList = this.inscriptionsListGQL
  //   .watch()
  //   .valueChanges
  //   .pipe(
  //     map(result => result.data.inscriptions));
  // }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();    
  // }

  onUpdateEnseignantProfile() {
    const dialogConfig = new MatDialogConfig();
    console.log(this.enseignant);
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.data = { ...this.enseignantToUpdate }
    //dialogConfig.height = "70%"
    this.dialog.open(UpdateEnseignantProfileComponent, dialogConfig);
  }
}

