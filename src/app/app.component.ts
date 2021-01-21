import { AdminProfileGQL, EnseignantProfileGQL, ScolariteProfileGQL } from './../generated/graphql';
import { AuthService } from './auth.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  admin: Observable<any>
  enseignant: Observable<any>
  scolarite: Observable<any>

  constructor(private adminProfileGQL: AdminProfileGQL,
             private scolariteProfileGQL: ScolariteProfileGQL,
              private enseignantProfileGQL: EnseignantProfileGQL, 
              private dialog: MatDialog,
              public authService: AuthService){}
      opened = false;

ngOnInit() {
    if(this.authService.currentUser.roles === "admin") {
        this.admin = this.adminProfileGQL
                          .watch({ adminId: this.authService.currentUser.profile})
                          .valueChanges
                          .pipe( 
                              map(result => result.data.admin)
                          )
        }
    if(this.authService.currentUser.roles === "enseignant") {
      this.enseignant = this.enseignantProfileGQL
                          .watch({ enseignantId: this.authService.currentUser.profile})
                          .valueChanges
                          .pipe( 
                              map(result => result.data.enseignant)
                          )
    }

    if(this.authService.currentUser.roles === 'scolarite') {
      this.scolarite = this.scolariteProfileGQL
                          .watch({ scolariteId: this.authService.currentUser.profile})
                          .valueChanges
                          .pipe( 
                              map(result => result.data.scolarite)
                          ) 
         }
    
      }

      onCreateProfile() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "40%"
        this.dialog.open(CreateUserComponent, dialogConfig)
      }
}
