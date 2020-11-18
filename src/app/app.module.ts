import { AuthService } from './auth.service';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [CreateUserComponent]
})
export class AppModule { }
