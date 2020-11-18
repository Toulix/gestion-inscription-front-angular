import { Etudiant } from './etudiant.model';


export interface Inscription {
    etudiant: Etudiant,
    niveau: String,
    date: Date,
    annee_universitaire: String,
    parcours: String,
    etat: boolean,
}