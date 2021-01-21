import { AuthService } from './auth.service';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from "@angular/core";
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InscriptionComponent } from './inscription/inscription.component';
import { GraphQLModule } from './graphql.module';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { InscriptionListComponent } from './inscription-list/inscription-list.component';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUtilisateursComponent } from './list-utilisateurs/list-utilisateurs.component';
import { ListEnseignantComponent } from './list-enseignant/list-enseignant.component';
import { EnseignementsComponent } from './enseignements/enseignements.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { DemandeReclamationComponent } from './demande-reclamation/demande-reclamation.component';
import { InscriptionDetailsComponent } from './inscription-details/inscription-details.component';
import { L1IGComponent } from './l1-ig/l1-ig.component';
import { L2IGComponent } from './l2-ig/l2-ig.component';
import { L3IGComponent } from './l3-ig/l3-ig.component';
import { M1IGComponent } from './m1-ig/m1-ig.component';
import { M2IGComponent } from './m2-ig/m2-ig.component';
import { L1SRComponent } from './l1-sr/l1-sr.component';
import { L2SRComponent } from './l2-sr/l2-sr.component';
import { L3SRComponent } from './l3-sr/l3-sr.component';
import { M1SRComponent } from './m1-sr/m1-sr.component';
import { M2SRComponent } from './m2-sr/m2-sr.component';
import { L1GBComponent } from './l1-gb/l1-gb.component';
import { L2GBComponent } from './l2-gb/l2-gb.component';
import { L3GBComponent } from './l3-gb/l3-gb.component';
import { M1GBComponent } from './m1-gb/m1-gb.component';
import { M2GBComponent } from './m2-gb/m2-gb.component';
import { EtudiantProfileComponent } from './profile/etudiant-profile/etudiant-profile.component';
import { EnseignantProfileComponent } from './profile/enseignant-profile/enseignant-profile.component';
import { ScolariteProfileComponent } from './profile/scolarite-profile/scolarite-profile.component';
import { AdminProfileComponent } from './profile/admin-profile/admin-profile.component';
import { UpdateEnseignantProfileComponent } from './update-profile/update-enseignant-profile/update-enseignant-profile.component';
import { UpdateSolariteProfileComponent } from './update-profile/update-solarite-profile/update-solarite-profile.component';
import { UpdateAdminProfileComponent } from './update-profile/update-admin-profile/update-admin-profile.component';
import { MatieresComponent } from './matieres/matieres.component';
import { MatiereItemComponent } from './matiere-item/matiere-item.component';
import { UeComponent } from './ue/ue.component';
import { UeItemComponent } from './ue-item/ue-item.component';
import { DeleteMatiereComponent } from './delete-matiere/delete-matiere.component';
import { DenyInscriptionComponent } from './deny-inscription/deny-inscription.component';


registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    LoginComponent,
    AdminComponent,
    InscriptionListComponent,
    HomeComponent,
    CreateUserComponent,
    ListUtilisateursComponent,
    ListEnseignantComponent,
    EnseignementsComponent,
    ReclamationsComponent,
    DemandeReclamationComponent,
    InscriptionDetailsComponent,
    L1IGComponent,
    L2IGComponent,
    L3IGComponent,
    M1IGComponent,
    M2IGComponent,
    L1SRComponent,
    L2SRComponent,
    L3SRComponent,
    M1SRComponent,
    M2SRComponent,
    L1GBComponent,
    L2GBComponent,
    L3GBComponent,
    M1GBComponent,
    M2GBComponent,
    EtudiantProfileComponent,
    EnseignantProfileComponent,
    ScolariteProfileComponent,
    AdminProfileComponent,
    UpdateEnseignantProfileComponent,
    UpdateSolariteProfileComponent,
    UpdateAdminProfileComponent,
    MatieresComponent,
    MatiereItemComponent,
    UeComponent,
    UeItemComponent,
    DeleteMatiereComponent,
    DenyInscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GraphQLModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, { provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent],
  entryComponents: [CreateUserComponent,
                   UpdateEnseignantProfileComponent, 
                   DeleteMatiereComponent,
                   DenyInscriptionComponent]
})
export class AppModule { }
