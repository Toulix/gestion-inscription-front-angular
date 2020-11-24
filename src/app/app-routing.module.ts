import { EtudiantProfileComponent } from './profile/etudiant-profile/etudiant-profile.component';
import { EnseignantProfileComponent } from './profile/enseignant-profile/enseignant-profile.component';
import { ScolariteProfileComponent } from './profile/scolarite-profile/scolarite-profile.component';
import { AdminProfileComponent } from './profile/admin-profile/admin-profile.component';
import { M2GBComponent } from './m2-gb/m2-gb.component';
import { M1GBComponent } from './m1-gb/m1-gb.component';
import { L3GBComponent } from './l3-gb/l3-gb.component';
import { L2GBComponent } from './l2-gb/l2-gb.component';
import { L1GBComponent } from './l1-gb/l1-gb.component';
import { M2SRComponent } from './m2-sr/m2-sr.component';
import { M1SRComponent } from './m1-sr/m1-sr.component';
import { L3SRComponent } from './l3-sr/l3-sr.component';
import { L2SRComponent } from './l2-sr/l2-sr.component';
import { L1SRComponent } from './l1-sr/l1-sr.component';
import { M2IGComponent } from './m2-ig/m2-ig.component';
import { M1IGComponent } from './m1-ig/m1-ig.component';
import { L3IGComponent } from './l3-ig/l3-ig.component';
import { L2IGComponent } from './l2-ig/l2-ig.component';
import { L1IGComponent } from './l1-ig/l1-ig.component';
import { EnseignementsComponent } from './enseignements/enseignements.component';
import { HomeComponent } from './home/home.component';
import { InscriptionDetailsComponent } from './inscription-details/inscription-details.component';
import { InscriptionListComponent } from './inscription-list/inscription-list.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { 
    path:'home',
    component: HomeComponent
  },
  { 
    path:'',
    component: LoginComponent
  },
  {
     path: 'inscriptions/:id',
     component: InscriptionDetailsComponent
  },  //individual inscriptions
  { 
    path:'inscriptions', 
    component: InscriptionListComponent,
  }, //liste des inscriptions
  { 
    path:'inscription',
    component: InscriptionComponent
  }, //page d'inscription
  { 
    path:'login',
    component: LoginComponent
  },
  {
    path: 'enseignements',
    component: EnseignementsComponent
  },
  {
    path: 'L1IG',
    component: L1IGComponent
  },
  {
    path: 'L2IG',
    component: L2IGComponent
  },
  {
    path: 'L3IG',
    component: L3IGComponent
  },
  {
    path: 'M1IG',
    component: M1IGComponent
  },
  {
    path: 'M2IG',
    component: M2IGComponent
  },
  {
    path: 'L1GB',
    component: L1GBComponent
  },
  {
    path: 'L2GB',
    component: L2GBComponent
  },
  {
    path: 'L3GB',
    component: L3GBComponent
  },
  {
    path: 'M1GB',
    component: M1GBComponent
  },
  {
    path: 'M2GB',
    component: M2GBComponent
  },
  {
    path: 'L1SR',
    component: L1SRComponent
  },
  {
    path: 'L2SR',
    component: L2SRComponent
  },
  {
    path: 'L3SR',
    component: L3SRComponent
  },
  {
    path: 'M1SR',
    component: M1SRComponent
  },
  {
    path: 'M2SR',
    component: M2SRComponent
  },
  {
    path: 'adminProfile/:id',
    component: AdminProfileComponent
  },
  {
    path: 'enseignantProfile/:id',
    component: EnseignantProfileComponent
  },
  {
    path: 'scolariteProfile/:id',
    component: ScolariteProfileComponent
  },
  {
    path: 'etudiantProfile/:id',
    component: EtudiantProfileComponent
  },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
