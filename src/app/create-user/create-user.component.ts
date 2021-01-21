import { NotificationService } from './../shared/notification.service';
import { CreateDefaultAdminProfileGQL, CreateDefaultAdminProfileMutation, CreateDefaultScolariteProfileGQL, CreateDefaultEnseignantProfileGQL, CreateUserGQL, AddAdminProfileToUserGQL, AddEnseignantProfileToUserGQL, AddScolariteProfileToUserGQL } from './../../generated/graphql';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { map } from 'rxjs/operators';
import { id } from 'date-fns/locale';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  generatedPassword : string; 
  createUserFormGroup: FormGroup;
  defaultUser: String = '/assets/images/user_two.png';
 
  constructor(private fb: FormBuilder,
              private notificationService: NotificationService,
              private dialogRef: MatDialogRef<CreateUserComponent>,
              private createUserGQL: CreateUserGQL,
              private createDefaultEnseignantProfileGQL: CreateDefaultEnseignantProfileGQL,
              private createDefaultAdminProfileGQL: CreateDefaultAdminProfileGQL,
              private createDefaultScolariteProfileGQL: CreateDefaultScolariteProfileGQL,
              ) {}

  ngOnInit(){
    this.createUserFormGroup = this.fb.group({
      username : ['', Validators.required, Validators.minLength(5)],
      password : ['', Validators.required, Validators.minLength(5)],
      roles: ['', Validators.required]
    })
  }

 generatePassword() {
    this.generatedPassword = Math.random().toString(36).slice(2);
    this.createUserFormGroup.get('password').setValue(this.generatedPassword);
    console.log(this.generatePassword);
  }

  onCreateUserToApi() {
   
    const { username, password, roles } = this.createUserFormGroup.value;
    switch(roles){
      case 'admin':
        return this.createAdminProfile(username, password, roles);
      case 'enseignant':
        return this.createEnseignantProfile(username, password, roles);
      case 'scolarite':
        return this.createScolariteProfile(username, password, roles);
    }

    this.createUserFormGroup.reset();
    this.dialogRef.close();
  }

  createEnseignantProfile(username: string, password: string, roles: string) {
    let idCreatedEnseigant:  string;

    this.createDefaultEnseignantProfileGQL
        .mutate()
        .pipe(
          map((result) => result.data.createDefaultEnseignantProfile.id)
        )
        .subscribe(
            id => { 
              idCreatedEnseigant = id;
              if(idCreatedEnseigant) {
                this.createUserGQL
                .mutate({
                  username: username,
                  password: password,
                  roles: roles,
                  profile: idCreatedEnseigant
                })
                .subscribe((result) => {
                  this.notificationService.succes("Enseignant créé avec succès"),
                  this.dialogRef.close();
                },
                  error => {
                    this.notificationService.warn("Une erreur s'est produite")
                }
                  )
              }
        }
    )

  }

  createScolariteProfile(username: string, password: string, roles: string) {
    let idCreatedScolarite : string;

    this.createDefaultScolariteProfileGQL
    .mutate()
    .pipe(
      map((result) => idCreatedScolarite = result.data.createDefaultScolariteProfile.id)
    ).subscribe(
      id => { 
        idCreatedScolarite = id;
        if(idCreatedScolarite) {
          this.createUserGQL
          .mutate({
            username: username,
            password: password,
            roles: roles,
            profile: idCreatedScolarite
          })
          .subscribe(() => this.notificationService.succes("Agent scolarité créer avec succès"),
            error => this.notificationService.warn("Une erreur s'est produite"))
        }
        
      }
    );
  }
  

    createAdminProfile(username: string, password: string, roles: string) {
      let idCreatedAdmin: string;
      
      this.createDefaultAdminProfileGQL
      .mutate()
      .pipe(
        map((result)=> idCreatedAdmin = result.data.createDefaultAdminProfile.id)
      )
      .subscribe(
        id => { 
          idCreatedAdmin = id;
            if(idCreatedAdmin) {
              this.createUserGQL
              .mutate({
                username: username,
                password: password,
                roles: roles,
                profile: idCreatedAdmin
              })
              .subscribe(
                () => this.notificationService.succes("Administrateur créer avec succès"),
                error => this.notificationService.warn("Une erreur s'est produite")
              )}
        }
      );
    
    }
}
