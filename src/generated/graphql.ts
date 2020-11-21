import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
}



export interface Utilisateur {
  __typename?: 'Utilisateur';
  id: Scalars['ID'];
  username: Scalars['String'];
  password: Scalars['String'];
  roles: Scalars['String'];
  profile?: Maybe<Scalars['ID']>;
}

export interface Parcour {
  __typename?: 'Parcour';
  id: Scalars['ID'];
  abbreviation: Scalars['String'];
  description: Scalars['String'];
}

export interface Niveau {
  __typename?: 'Niveau';
  id: Scalars['ID'];
  libelle: Scalars['String'];
  description: Scalars['String'];
}

export interface Promotion {
  __typename?: 'Promotion';
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  libelle: Scalars['String'];
  debut: Scalars['DateTime'];
  fin: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
}


export interface Bordereau {
  __typename?: 'Bordereau';
  id: Scalars['ID'];
  bordereau: Scalars['String'];
  numBordereau: Scalars['String'];
  dateVersement: Scalars['DateTime'];
  montant: Scalars['Float'];
}

export interface Etudiant {
  __typename?: 'Etudiant';
  id: Scalars['ID'];
  matricule?: Maybe<Scalars['String']>;
  avatar: Scalars['String'];
  nom: Scalars['String'];
  cin: Scalars['String'];
  prenom: Scalars['String'];
  tel: Scalars['String'];
  mail: Scalars['String'];
  adresse: Scalars['String'];
  sexe: Scalars['String'];
  dateNaissance: Scalars['DateTime'];
  lieuNaissance: Scalars['String'];
  situationMatrimoniale: Scalars['String'];
  pere?: Maybe<Scalars['String']>;
  statutPere?: Maybe<Scalars['String']>;
  professionPere?: Maybe<Scalars['String']>;
  mere?: Maybe<Scalars['String']>;
  statutMere?: Maybe<Scalars['String']>;
  professionMere?: Maybe<Scalars['String']>;
  tuteur?: Maybe<Scalars['String']>;
  statusTuteur?: Maybe<Scalars['String']>;
  professionTuteur?: Maybe<Scalars['String']>;
  adresseParentsTuteurs?: Maybe<Scalars['String']>;
  serie: Scalars['String'];
  mention: Scalars['String'];
  anneeObtention: Scalars['String'];
  origine: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
}

export interface Inscription {
  __typename?: 'Inscription';
  id: Scalars['ID'];
  etat?: Maybe<Scalars['String']>;
  etudiant: Etudiant;
  bordereau: Bordereau;
  anneeUniversitaire: Promotion;
  niveau: Niveau;
  parcours: Parcour;
  date: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
}

export interface Enseignant {
  __typename?: 'Enseignant';
  id: Scalars['ID'];
  nom?: Maybe<Scalars['String']>;
  prenom?: Maybe<Scalars['String']>;
  titre?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  sexe?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
}

export interface Scolarite {
  __typename?: 'Scolarite';
  id: Scalars['ID'];
  nom?: Maybe<Scalars['String']>;
  prenom?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  sexe?: Maybe<Scalars['String']>;
  fonction?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
}

export interface Matiere {
  __typename?: 'Matiere';
  id: Scalars['ID'];
  libelle?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
}

export interface Reclamation {
  __typename?: 'Reclamation';
  id: Scalars['ID'];
  etudiant: Etudiant;
  niveau: Niveau;
  parcours: Parcour;
  anneeUniversitaire: Promotion;
  enseignant: Enseignant;
  matiere: Matiere;
  motif?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
  etat: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
}

export interface Note {
  __typename?: 'Note';
  id: Scalars['ID'];
  etudiant: Etudiant;
  valeur: Scalars['Float'];
  matiere: Matiere;
  niveau: Niveau;
  parcours: Parcour;
  anneeUniversitaire: Promotion;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
}

export interface Enseignement {
  __typename?: 'Enseignement';
  id: Scalars['ID'];
  matiere: Matiere;
  enseignant: Enseignant;
  niveau: Niveau;
  parcours: Parcour;
  anneeUniversitaire: Promotion;
  enseignementTheorique?: Maybe<Scalars['Int']>;
  enseignementDirige?: Maybe<Scalars['Int']>;
  enseignementPratique?: Maybe<Scalars['Int']>;
  credit?: Maybe<Scalars['Float']>;
  poids?: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
}

export interface Query {
  __typename?: 'Query';
  users: Array<Utilisateur>;
  me: Utilisateur;
  inscriptions: Array<Inscription>;
  inscription: Inscription;
  anneeUniversitaire: Promotion;
  enseignants: Array<Enseignant>;
  scolarites: Array<Scolarite>;
  reclamations: Array<Reclamation>;
  reclamationPerEnseignant: Array<Reclamation>;
  notes: Array<Note>;
  enseignements: Array<Enseignement>;
  matieresParEnseignant: Enseignement;
  matieresOfCurrentEnseignant: Enseignement;
}


export interface QueryInscriptionArgs {
  id: Scalars['String'];
}


export interface QueryAnneeUniversitaireArgs {
  id: Scalars['String'];
}


export interface QueryMatieresParEnseignantArgs {
  idEnseignant: Scalars['String'];
}

export interface Mutation {
  __typename?: 'Mutation';
  singIn: Scalars['String'];
  createUser: Utilisateur;
  addProfileToUser: Utilisateur;
  updateInscription: Inscription;
  createDefaultEnseignantProfile: Enseignant;
  editEnseignantProfile: Enseignant;
  createDefaultScolariteProfile: Scolarite;
  editScolariteProfile: Scolarite;
  updateReclamation: Reclamation;
  createReclamation: Reclamation;
  createNote: Note;
  updateNote: Note;
}


export interface MutationSingInArgs {
  password: Scalars['String'];
  username: Scalars['String'];
}


export interface MutationCreateUserArgs {
  createUserInput: CreateUserInput;
}


export interface MutationAddProfileToUserArgs {
  idProfile: Scalars['String'];
  userId: Scalars['String'];
}


export interface MutationUpdateInscriptionArgs {
  etat: Scalars['String'];
  id: Scalars['String'];
}


export interface MutationEditEnseignantProfileArgs {
  updateEnseignantInput: UpdateEnseignantInput;
  enseignantId: Scalars['String'];
}


export interface MutationEditScolariteProfileArgs {
  updateScolariteInput: UpdateScolariteInput;
  scolariteId: Scalars['String'];
}


export interface MutationUpdateReclamationArgs {
  reclamationId: Scalars['ID'];
  etat?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['Float']>;
}


export interface MutationCreateReclamationArgs {
  createReclamationData: CreateReclamationInput;
}


export interface MutationCreateNoteArgs {
  CreateNoteInput: CreateNoteInput;
}


export interface MutationUpdateNoteArgs {
  valeur: Scalars['Float'];
  idNote: Scalars['String'];
}

export interface CreateUserInput {
  username: Scalars['String'];
  password: Scalars['String'];
  roles: Scalars['String'];
}

export interface UpdateEnseignantInput {
  nom?: Maybe<Scalars['String']>;
  prenom?: Maybe<Scalars['String']>;
  titre?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  sexe?: Maybe<Scalars['String']>;
}

export interface UpdateScolariteInput {
  nom?: Maybe<Scalars['String']>;
  prenom?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  sexe?: Maybe<Scalars['String']>;
  fonction?: Maybe<Scalars['String']>;
}

export interface CreateReclamationInput {
  etudiant: Scalars['ID'];
  niveau: Scalars['ID'];
  parcours: Scalars['ID'];
  anneeUniversitaire: Scalars['ID'];
  enseignant: Scalars['ID'];
  matiere: Scalars['ID'];
  motif?: Maybe<Scalars['ID']>;
  note?: Maybe<Scalars['Float']>;
  etat?: Maybe<Scalars['Float']>;
}

export interface CreateNoteInput {
  etudiant: Scalars['ID'];
  valeur: Scalars['Float'];
  matiere: Scalars['ID'];
  niveau: Scalars['ID'];
  parcours: Scalars['ID'];
  anneeUniversitaire: Scalars['ID'];
}

export type InscriptionsListQueryVariables = Exact<{ [key: string]: never; }>;


export type InscriptionsListQuery = (
  { __typename?: 'Query' }
  & { inscriptions: Array<(
    { __typename?: 'Inscription' }
    & Pick<Inscription, 'id' | 'etat' | 'date'>
    & { etudiant: (
      { __typename?: 'Etudiant' }
      & Pick<Etudiant, 'id' | 'avatar' | 'nom' | 'prenom' | 'mail'>
    ), niveau: (
      { __typename?: 'Niveau' }
      & Pick<Niveau, 'libelle'>
    ), parcours: (
      { __typename?: 'Parcour' }
      & Pick<Parcour, 'abbreviation'>
    ), anneeUniversitaire: (
      { __typename?: 'Promotion' }
      & Pick<Promotion, 'libelle'>
    ), bordereau: (
      { __typename?: 'Bordereau' }
      & Pick<Bordereau, 'numBordereau' | 'bordereau'>
    ) }
  )> }
);

export type InscriptionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type InscriptionQuery = (
  { __typename?: 'Query' }
  & { inscription: (
    { __typename?: 'Inscription' }
    & Pick<Inscription, 'id' | 'etat' | 'date'>
    & { etudiant: (
      { __typename?: 'Etudiant' }
      & Pick<Etudiant, 'id' | 'avatar' | 'nom' | 'prenom' | 'cin' | 'mail' | 'matricule' | 'tel' | 'adresse' | 'sexe' | 'dateNaissance' | 'lieuNaissance' | 'situationMatrimoniale' | 'pere' | 'statutPere' | 'professionPere' | 'mere' | 'statutMere' | 'professionMere' | 'tuteur' | 'statusTuteur' | 'serie' | 'mention' | 'anneeObtention' | 'origine'>
    ), niveau: (
      { __typename?: 'Niveau' }
      & Pick<Niveau, 'libelle'>
    ), parcours: (
      { __typename?: 'Parcour' }
      & Pick<Parcour, 'abbreviation'>
    ), bordereau: (
      { __typename?: 'Bordereau' }
      & Pick<Bordereau, 'numBordereau' | 'bordereau' | 'dateVersement' | 'montant'>
    ), anneeUniversitaire: (
      { __typename?: 'Promotion' }
      & Pick<Promotion, 'libelle'>
    ) }
  ) }
);

export const InscriptionsListDocument = gql`
    query inscriptionsList {
  inscriptions {
    id
    etudiant {
      id
      avatar
      nom
      prenom
      mail
    }
    niveau {
      libelle
    }
    parcours {
      abbreviation
    }
    anneeUniversitaire {
      libelle
    }
    bordereau {
      numBordereau
      bordereau
    }
    etat
    date
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InscriptionsListGQL extends Apollo.Query<InscriptionsListQuery, InscriptionsListQueryVariables> {
    document = InscriptionsListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InscriptionDocument = gql`
    query inscription($id: String!) {
  inscription(id: $id) {
    id
    etudiant {
      id
      avatar
      nom
      prenom
      cin
      mail
      matricule
      tel
      adresse
      sexe
      dateNaissance
      lieuNaissance
      situationMatrimoniale
      pere
      statutPere
      professionPere
      mere
      statutMere
      professionMere
      tuteur
      statusTuteur
      serie
      mention
      anneeObtention
      origine
    }
    niveau {
      libelle
    }
    parcours {
      abbreviation
    }
    bordereau {
      numBordereau
      bordereau
      dateVersement
      montant
    }
    anneeUniversitaire {
      libelle
    }
    etat
    date
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InscriptionGQL extends Apollo.Query<InscriptionQuery, InscriptionQueryVariables> {
    document = InscriptionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }