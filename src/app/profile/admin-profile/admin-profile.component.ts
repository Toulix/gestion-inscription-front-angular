import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig} from "@angular/material/dialog"
import  { map,switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AdminProfileGQL, ScolariteProfileGQL } from 'src/generated/graphql';
import { UpdateAdminProfileComponent } from 'src/app/update-profile/update-admin-profile/update-admin-profile.component';


interface Admin {
  id: string,
  nom?: string,
  prenom?: string,
  tel?: string,
  email?: string,
  image?: string,
  sexe?: string,
}

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  defaultAdminAvatar: string = "/assets/images/icons8_Male_User_100px.png";
  admin:Observable<any>;
  realAvatar: string ;
  adminToUpdate:  Admin;

  constructor(private adminProfileGQL: AdminProfileGQL,
              private activatedRoute: ActivatedRoute,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.admin= this.activatedRoute.paramMap
                    .pipe(
                      switchMap(params => {
                        let id = params.get('id');
                        return this.adminProfileGQL
                                    .watch({ adminId: id})
                                    .valueChanges
                      })
                    ).pipe( 
                      map(result => result.data.admin)
                    )

          this.admin.subscribe((admin: Admin) => {
                      this.adminToUpdate = admin;
                    })
  }

  onUpdateAdminProfile() {
    const dialogConfig = new MatDialogConfig();
   
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.data = { ...this.adminToUpdate }
    //dialogConfig.height = "70%"
    this.dialog.open(UpdateAdminProfileComponent, dialogConfig);
  }
}
