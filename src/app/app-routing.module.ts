import { HomeComponent } from './home/home.component';
import { InscriptionDetailsComponent } from './inscription-details/inscription-details.component';
import { InscriptionListComponent } from './inscription-list/inscription-list.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'home', component: HomeComponent},

  { path:'', component: LoginComponent},
  { 
    path:'inscriptions', 
    component: InscriptionListComponent,
    children: [
      { path: ':id', component: InscriptionDetailsComponent}
    ] //individual inscriptions
  }, //liste des inscriptions
  { path:'inscription' , component: InscriptionComponent}, //page d'inscription
  { path:'login' , component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
