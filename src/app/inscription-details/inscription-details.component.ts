import { InscriptionService } from './../inscription.service';
import { NotificationService } from './../shared/notification.service';
import { DenyInscriptionComponent } from './../deny-inscription/deny-inscription.component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { InscriptionGQL, UpdateInscriptionGQL, AddMatriculeToEtudiantGQL, CreateUserGQL } from './../../generated/graphql';
import { Component, OnInit } from '@angular/core';
import  { map,switchMap } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig} from "@angular/material/dialog";
@Component({
  selector: 'app-inscription-details',
  templateUrl: './inscription-details.component.html',
  styleUrls: ['./inscription-details.component.css']
})
export class InscriptionDetailsComponent implements OnInit {
  inscription: Observable<any>
  createStudentUserFormGroup: FormGroup;
  infoStudentProfileFormGroup : FormGroup;
  generatedPassword : string;
  isMatriculeCompleted: boolean = false;
  isInscriptionAccepted: boolean = false;
  // {{ (inscription | async)?.etudiant.mail }}
  studentMail: string;

  constructor(private matDialog:  MatDialog,
              private inscriptionService: InscriptionService, 
              private updateInscriptionGQL: UpdateInscriptionGQL,
              private addMatriculeToEtudiantGQL: AddMatriculeToEtudiantGQL,
              private createUserGQL : CreateUserGQL,
              private inscriptionGQL: InscriptionGQL,
              private activatedRoute: ActivatedRoute,
              private notificationService: NotificationService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.createStudentUserFormGroup = this.fb.group({
      username : ['', Validators.required],
      password : ['', Validators.required],
    })

    this.infoStudentProfileFormGroup = this.fb.group({
      matricule: ['', [Validators.required,Validators.minLength(3)]]
    })

    this.inscription = this.activatedRoute.paramMap
    .pipe(
      switchMap(params => {
        let id = params.get('id');
        return this.inscriptionGQL
                    .watch({ id: id})
                    .valueChanges
      })
    ).pipe(
      map(result => {
        this.studentMail = result.data.inscription.etudiant.mail;
        console.log(this.studentMail);
        return result.data.inscription
      }
  //      this.studentMail = result.data.inscription.etudiant.mail;
      )
    )

  }
  acceptInscription() {
    this.isInscriptionAccepted = true;
  }

  denyInscription() {
    //
    this.matDialog.open(DenyInscriptionComponent)
        .afterClosed()
        .subscribe(
          result => {
            if(result == "true") {
              this.updateInscriptionGQL.mutate({
                etat: "Refusé",
                id: this.activatedRoute.snapshot.params['id']
              }).subscribe(
                result => 
                {console.log(result.data.updateInscription.etat)
                  //send email
                  //redirect to inscriptions

                }
              )
            }
            if(result == "false") {
              return null;
            }
            
          }
    )
  }

  generatePassword() {
    this.generatedPassword = Math.random().toString(36).slice(2);
    this.createStudentUserFormGroup.get('password').setValue(this.generatedPassword);
    console.log(this.generatePassword);
  }

  onCreateStudentUserToApi() {
    const username = this.createStudentUserFormGroup.get('username').value;
    const password = this.createStudentUserFormGroup.get('password').value;
    const studentEmail = this.studentMail;

   const studentCredentials = { studentEmail, username, password};
   console.log(" I'm now sending the email: " + studentCredentials.studentEmail + ' ' +
    studentCredentials.username + ' ' + studentCredentials.password);
    
    //1 - accept inscription
     this.updateInscriptionGQL.mutate({
      etat: "Accepté",
      id: this.activatedRoute.snapshot.params['id']
    }).subscribe(
      result => 
      {
        console.log(result.data.updateInscription.etat)
        // assign matricule
        this.addMatriculeToEtudiantGQL.mutate({
          id: this.activatedRoute.snapshot.params['id'],
          matricule: this.infoStudentProfileFormGroup.get('matricule').value
        }).subscribe(
          result => {
            console.log(result.data.addMatriculeToEtudiant.matricule)
            // 2 - create profile for student in users collections
            this.createUserGQL
            .mutate({
              username: username ,
              password: password,
              roles: 'etudiant',
              profile: this.activatedRoute.snapshot.params['id']
            }).subscribe(() => 
            {

              this.notificationService.succes("Profile de l'étudiant créé avec succès")
              this.inscriptionService.sendEmailToStudent(studentCredentials)
                  .subscribe(result => console.log("Result of sending email : " + result)
              )
            },
              error => this.notificationService.warn("Une erreur s'est produite")
              )
        }
       )
      }
    )
    // 3 - send email
    
  }
}
