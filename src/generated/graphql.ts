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

export interface Admin {
  __typename?: 'Admin';
  id: Scalars['ID'];
  nom?: Maybe<Scalars['String']>;
  prenom?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  sexe?: Maybe<Scalars['String']>;
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
  libelle?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  enseignant?: Maybe<Scalars['String']>;
  semestre?: Maybe<Scalars['String']>;
  ue?: Maybe<Scalars['String']>;
  niveau?: Maybe<Scalars['String']>;
  parcours?: Maybe<Scalars['String']>;
  anneeUniversitaire?: Maybe<Scalars['String']>;
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
  etudiants: Array<Etudiant>;
  inscriptions: Array<Inscription>;
  inscription: Inscription;
  anneeUniversitaire: Promotion;
  enseignant: Enseignant;
  enseignants: Array<Enseignant>;
  scolarites: Array<Scolarite>;
  admins: Array<Admin>;
  admin: Admin;
  scolarite: Scolarite;
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


export interface QueryEnseignantArgs {
  enseignantId: Scalars['String'];
}


export interface QueryAdminArgs {
  adminId: Scalars['String'];
}


export interface QueryScolariteArgs {
  scolariteId: Scalars['String'];
}


export interface QueryMatieresParEnseignantArgs {
  enseignantName: Scalars['String'];
}

export interface Mutation {
  __typename?: 'Mutation';
  singIn: Scalars['String'];
  createUser: Utilisateur;
  addEnseignantProfileToUser: Utilisateur;
  addScolariteProfileToUser: Utilisateur;
  addAdminProfileToUser: Utilisateur;
  addEtudiantProfileToUser: Utilisateur;
  addMatriculeToEtudiant: Etudiant;
  updateInscription: Inscription;
  createDefaultEnseignantProfile: Enseignant;
  editEnseignantProfile: Enseignant;
  createDefaultScolariteProfile: Scolarite;
  editScolariteProfile: Scolarite;
  createDefaultAdminProfile: Admin;
  editAdminProfile: Admin;
  updateReclamation: Reclamation;
  createReclamation: Reclamation;
  createNote: Note;
  updateNote: Note;
  createMatiere: Matiere;
  deleteMatiere: Scalars['Boolean'];
  createEnseignement: Enseignement;
  updateEnseignement: Enseignement;
  deleteEnseignement: Scalars['Boolean'];
}


export interface MutationSingInArgs {
  password: Scalars['String'];
  username: Scalars['String'];
}


export interface MutationCreateUserArgs {
  createUserInput: CreateUserInput;
}


export interface MutationAddEnseignantProfileToUserArgs {
  idProfile: Scalars['String'];
  userId: Scalars['String'];
}


export interface MutationAddScolariteProfileToUserArgs {
  idProfile: Scalars['String'];
  userId: Scalars['String'];
}


export interface MutationAddAdminProfileToUserArgs {
  idProfile: Scalars['String'];
  userId: Scalars['String'];
}


export interface MutationAddEtudiantProfileToUserArgs {
  idProfile: Scalars['String'];
  userId: Scalars['String'];
}


export interface MutationAddMatriculeToEtudiantArgs {
  matricule: Scalars['String'];
  id: Scalars['String'];
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


export interface MutationEditAdminProfileArgs {
  updateAdminInput: UpdateAdminInput;
  adminId: Scalars['String'];
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


export interface MutationCreateMatiereArgs {
  abbreviation: Scalars['String'];
  libelle: Scalars['String'];
}


export interface MutationDeleteMatiereArgs {
  idMatiere: Scalars['String'];
}


export interface MutationCreateEnseignementArgs {
  createEnseignementInput: CreateEnseignementInput;
}


export interface MutationUpdateEnseignementArgs {
  updateEnseignementInput: UpdateEnseignementInput;
  enseignementId: Scalars['String'];
}


export interface MutationDeleteEnseignementArgs {
  idMatiere: Scalars['String'];
}

export interface CreateUserInput {
  username: Scalars['String'];
  password: Scalars['String'];
  roles: Scalars['String'];
  profile?: Maybe<Scalars['ID']>;
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

export interface UpdateAdminInput {
  nom?: Maybe<Scalars['String']>;
  prenom?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  sexe?: Maybe<Scalars['String']>;
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

export interface CreateEnseignementInput {
  libelle?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  enseignant?: Maybe<Scalars['String']>;
  semestre?: Maybe<Scalars['String']>;
  ue?: Maybe<Scalars['String']>;
  niveau?: Maybe<Scalars['String']>;
  parcours?: Maybe<Scalars['String']>;
  anneeUniversitaire?: Maybe<Scalars['String']>;
  enseignementTheorique?: Maybe<Scalars['Int']>;
  enseignementDirige?: Maybe<Scalars['Int']>;
  enseignementPratique?: Maybe<Scalars['Int']>;
  credit?: Maybe<Scalars['Float']>;
  poids?: Maybe<Scalars['Float']>;
}

export interface UpdateEnseignementInput {
  libelle?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  enseignant?: Maybe<Scalars['String']>;
  semestre?: Maybe<Scalars['String']>;
  ue?: Maybe<Scalars['String']>;
  niveau?: Maybe<Scalars['String']>;
  parcours?: Maybe<Scalars['String']>;
  anneeUniversitaire?: Maybe<Scalars['String']>;
  enseignementTheorique?: Maybe<Scalars['Int']>;
  enseignementDirige?: Maybe<Scalars['Int']>;
  enseignementPratique?: Maybe<Scalars['Int']>;
  credit?: Maybe<Scalars['Float']>;
  poids?: Maybe<Scalars['Float']>;
}

export type EditAdminProfileMutationVariables = Exact<{
  nom?: Maybe<Scalars['String']>;
  prenom?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  sexe?: Maybe<Scalars['String']>;
  enseignantId: Scalars['String'];
}>;


export type EditAdminProfileMutation = (
  { __typename?: 'Mutation' }
  & { editAdminProfile: (
    { __typename?: 'Admin' }
    & Pick<Admin, 'id' | 'nom' | 'prenom' | 'tel' | 'email' | 'image' | 'sexe'>
  ) }
);

export type CreateDefaultAdminProfileMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateDefaultAdminProfileMutation = (
  { __typename?: 'Mutation' }
  & { createDefaultAdminProfile: (
    { __typename?: 'Admin' }
    & Pick<Admin, 'id'>
  ) }
);

export type AddAdminProfileToUserMutationVariables = Exact<{
  idProfile: Scalars['String'];
  userId: Scalars['String'];
}>;


export type AddAdminProfileToUserMutation = (
  { __typename?: 'Mutation' }
  & { addAdminProfileToUser: (
    { __typename?: 'Utilisateur' }
    & Pick<Utilisateur, 'username' | 'roles' | 'profile'>
  ) }
);

export type AdminProfileQueryVariables = Exact<{
  adminId: Scalars['String'];
}>;


export type AdminProfileQuery = (
  { __typename?: 'Query' }
  & { admin: (
    { __typename?: 'Admin' }
    & Pick<Admin, 'id' | 'nom' | 'prenom' | 'tel' | 'email' | 'image' | 'sexe'>
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'Utilisateur' }
    & Pick<Utilisateur, 'id' | 'username' | 'roles' | 'profile'>
  ) }
);

export type EditEnseignantProfileMutationVariables = Exact<{
  nom?: Maybe<Scalars['String']>;
  prenom?: Maybe<Scalars['String']>;
  titre?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  sexe?: Maybe<Scalars['String']>;
  enseignantId: Scalars['String'];
}>;


export type EditEnseignantProfileMutation = (
  { __typename?: 'Mutation' }
  & { editEnseignantProfile: (
    { __typename?: 'Enseignant' }
    & Pick<Enseignant, 'id' | 'nom' | 'prenom' | 'titre' | 'tel' | 'email' | 'sexe'>
  ) }
);

export type CreateDefaultEnseignantProfileMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateDefaultEnseignantProfileMutation = (
  { __typename?: 'Mutation' }
  & { createDefaultEnseignantProfile: (
    { __typename?: 'Enseignant' }
    & Pick<Enseignant, 'id'>
  ) }
);

export type AddEnseignantProfileToUserMutationVariables = Exact<{
  idProfile: Scalars['String'];
  userId: Scalars['String'];
}>;


export type AddEnseignantProfileToUserMutation = (
  { __typename?: 'Mutation' }
  & { addEnseignantProfileToUser: (
    { __typename?: 'Utilisateur' }
    & Pick<Utilisateur, 'username' | 'roles' | 'profile'>
  ) }
);

export type EnseignantProfileQueryVariables = Exact<{
  enseignantId: Scalars['String'];
}>;


export type EnseignantProfileQuery = (
  { __typename?: 'Query' }
  & { enseignant: (
    { __typename?: 'Enseignant' }
    & Pick<Enseignant, 'id' | 'nom' | 'prenom' | 'titre' | 'tel' | 'email' | 'image' | 'sexe'>
  ) }
);

export type EnseignantsQueryVariables = Exact<{ [key: string]: never; }>;


export type EnseignantsQuery = (
  { __typename?: 'Query' }
  & { enseignants: Array<(
    { __typename?: 'Enseignant' }
    & Pick<Enseignant, 'id' | 'nom' | 'prenom' | 'image'>
  )> }
);

export type CreateEnseignementMutationVariables = Exact<{
  libelle?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  enseignant?: Maybe<Scalars['String']>;
  semestre?: Maybe<Scalars['String']>;
  ue?: Maybe<Scalars['String']>;
  niveau?: Maybe<Scalars['String']>;
  parcours?: Maybe<Scalars['String']>;
  anneeUniversitaire?: Maybe<Scalars['String']>;
  enseignementTheorique?: Maybe<Scalars['Int']>;
  enseignementDirige?: Maybe<Scalars['Int']>;
  enseignementPratique?: Maybe<Scalars['Int']>;
  credit?: Maybe<Scalars['Float']>;
  poids?: Maybe<Scalars['Float']>;
}>;


export type CreateEnseignementMutation = (
  { __typename?: 'Mutation' }
  & { createEnseignement: (
    { __typename?: 'Enseignement' }
    & Pick<Enseignement, 'id'>
  ) }
);

export type UpdateEnseignementMutationVariables = Exact<{
  libelle?: Maybe<Scalars['String']>;
  abbreviation?: Maybe<Scalars['String']>;
  enseignant?: Maybe<Scalars['String']>;
  semestre?: Maybe<Scalars['String']>;
  ue?: Maybe<Scalars['String']>;
  niveau?: Maybe<Scalars['String']>;
  parcours?: Maybe<Scalars['String']>;
  anneeUniversitaire?: Maybe<Scalars['String']>;
  enseignementTheorique?: Maybe<Scalars['Int']>;
  enseignementDirige?: Maybe<Scalars['Int']>;
  enseignementPratique?: Maybe<Scalars['Int']>;
  credit?: Maybe<Scalars['Float']>;
  poids?: Maybe<Scalars['Float']>;
  enseignementId: Scalars['String'];
}>;


export type UpdateEnseignementMutation = (
  { __typename?: 'Mutation' }
  & { updateEnseignement: (
    { __typename?: 'Enseignement' }
    & Pick<Enseignement, 'id'>
  ) }
);

export type DeleteEnseignementMutationVariables = Exact<{
  idMatiere: Scalars['String'];
}>;


export type DeleteEnseignementMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteEnseignement'>
);

export type AddMatriculeToEtudiantMutationVariables = Exact<{
  matricule: Scalars['String'];
  id: Scalars['String'];
}>;


export type AddMatriculeToEtudiantMutation = (
  { __typename?: 'Mutation' }
  & { addMatriculeToEtudiant: (
    { __typename?: 'Etudiant' }
    & Pick<Etudiant, 'nom' | 'prenom' | 'matricule'>
  ) }
);

export type UpdateInscriptionMutationVariables = Exact<{
  etat: Scalars['String'];
  id: Scalars['String'];
}>;


export type UpdateInscriptionMutation = (
  { __typename?: 'Mutation' }
  & { updateInscription: (
    { __typename?: 'Inscription' }
    & Pick<Inscription, 'etat'>
  ) }
);

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

export type EditScolariteProfileMutationVariables = Exact<{
  nom?: Maybe<Scalars['String']>;
  prenom?: Maybe<Scalars['String']>;
  fonction?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  sexe?: Maybe<Scalars['String']>;
  scolariteId: Scalars['String'];
}>;


export type EditScolariteProfileMutation = (
  { __typename?: 'Mutation' }
  & { editScolariteProfile: (
    { __typename?: 'Scolarite' }
    & Pick<Scolarite, 'id' | 'nom' | 'prenom' | 'fonction' | 'tel' | 'email' | 'sexe'>
  ) }
);

export type CreateDefaultScolariteProfileMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateDefaultScolariteProfileMutation = (
  { __typename?: 'Mutation' }
  & { createDefaultScolariteProfile: (
    { __typename?: 'Scolarite' }
    & Pick<Scolarite, 'id'>
  ) }
);

export type AddScolariteProfileToUserMutationVariables = Exact<{
  idProfile: Scalars['String'];
  userId: Scalars['String'];
}>;


export type AddScolariteProfileToUserMutation = (
  { __typename?: 'Mutation' }
  & { addScolariteProfileToUser: (
    { __typename?: 'Utilisateur' }
    & Pick<Utilisateur, 'username' | 'roles' | 'profile'>
  ) }
);

export type ScolariteProfileQueryVariables = Exact<{
  scolariteId: Scalars['String'];
}>;


export type ScolariteProfileQuery = (
  { __typename?: 'Query' }
  & { scolarite: (
    { __typename?: 'Scolarite' }
    & Pick<Scolarite, 'id' | 'nom' | 'prenom' | 'fonction' | 'tel' | 'email' | 'image' | 'sexe'>
  ) }
);

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  roles: Scalars['String'];
  profile?: Maybe<Scalars['ID']>;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'Utilisateur' }
    & Pick<Utilisateur, 'username' | 'roles' | 'profile'>
  ) }
);

export const EditAdminProfileDocument = gql`
    mutation editAdminProfile($nom: String, $prenom: String, $tel: String, $email: String, $image: String, $sexe: String, $enseignantId: String!) {
  editAdminProfile(
    updateAdminInput: {nom: $nom, prenom: $prenom, tel: $tel, email: $email, image: $image, sexe: $sexe}
    adminId: $enseignantId
  ) {
    id
    nom
    prenom
    tel
    email
    image
    sexe
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EditAdminProfileGQL extends Apollo.Mutation<EditAdminProfileMutation, EditAdminProfileMutationVariables> {
    document = EditAdminProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateDefaultAdminProfileDocument = gql`
    mutation createDefaultAdminProfile {
  createDefaultAdminProfile {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateDefaultAdminProfileGQL extends Apollo.Mutation<CreateDefaultAdminProfileMutation, CreateDefaultAdminProfileMutationVariables> {
    document = CreateDefaultAdminProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddAdminProfileToUserDocument = gql`
    mutation addAdminProfileToUser($idProfile: String!, $userId: String!) {
  addAdminProfileToUser(idProfile: $idProfile, userId: $userId) {
    username
    roles
    profile
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddAdminProfileToUserGQL extends Apollo.Mutation<AddAdminProfileToUserMutation, AddAdminProfileToUserMutationVariables> {
    document = AddAdminProfileToUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AdminProfileDocument = gql`
    query adminProfile($adminId: String!) {
  admin(adminId: $adminId) {
    id
    nom
    prenom
    tel
    email
    image
    sexe
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AdminProfileGQL extends Apollo.Query<AdminProfileQuery, AdminProfileQueryVariables> {
    document = AdminProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MeDocument = gql`
    query me {
  me {
    id
    username
    roles
    profile
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MeGQL extends Apollo.Query<MeQuery, MeQueryVariables> {
    document = MeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EditEnseignantProfileDocument = gql`
    mutation editEnseignantProfile($nom: String, $prenom: String, $titre: String, $tel: String, $email: String, $image: String, $sexe: String, $enseignantId: String!) {
  editEnseignantProfile(
    updateEnseignantInput: {nom: $nom, prenom: $prenom, titre: $titre, tel: $tel, email: $email, image: $image, sexe: $sexe}
    enseignantId: $enseignantId
  ) {
    id
    nom
    prenom
    titre
    tel
    email
    sexe
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EditEnseignantProfileGQL extends Apollo.Mutation<EditEnseignantProfileMutation, EditEnseignantProfileMutationVariables> {
    document = EditEnseignantProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateDefaultEnseignantProfileDocument = gql`
    mutation createDefaultEnseignantProfile {
  createDefaultEnseignantProfile {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateDefaultEnseignantProfileGQL extends Apollo.Mutation<CreateDefaultEnseignantProfileMutation, CreateDefaultEnseignantProfileMutationVariables> {
    document = CreateDefaultEnseignantProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddEnseignantProfileToUserDocument = gql`
    mutation addEnseignantProfileToUser($idProfile: String!, $userId: String!) {
  addEnseignantProfileToUser(idProfile: $idProfile, userId: $userId) {
    username
    roles
    profile
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddEnseignantProfileToUserGQL extends Apollo.Mutation<AddEnseignantProfileToUserMutation, AddEnseignantProfileToUserMutationVariables> {
    document = AddEnseignantProfileToUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EnseignantProfileDocument = gql`
    query enseignantProfile($enseignantId: String!) {
  enseignant(enseignantId: $enseignantId) {
    id
    nom
    prenom
    titre
    tel
    email
    image
    sexe
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EnseignantProfileGQL extends Apollo.Query<EnseignantProfileQuery, EnseignantProfileQueryVariables> {
    document = EnseignantProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EnseignantsDocument = gql`
    query enseignants {
  enseignants {
    id
    nom
    prenom
    image
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EnseignantsGQL extends Apollo.Query<EnseignantsQuery, EnseignantsQueryVariables> {
    document = EnseignantsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateEnseignementDocument = gql`
    mutation createEnseignement($libelle: String, $abbreviation: String, $enseignant: String, $semestre: String, $ue: String, $niveau: String, $parcours: String, $anneeUniversitaire: String, $enseignementTheorique: Int, $enseignementDirige: Int, $enseignementPratique: Int, $credit: Float, $poids: Float) {
  createEnseignement(
    createEnseignementInput: {libelle: $libelle, abbreviation: $abbreviation, enseignant: $enseignant, semestre: $semestre, ue: $ue, niveau: $niveau, parcours: $parcours, anneeUniversitaire: $anneeUniversitaire, enseignementTheorique: $enseignementTheorique, enseignementDirige: $enseignementDirige, enseignementPratique: $enseignementPratique, credit: $credit, poids: $poids}
  ) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateEnseignementGQL extends Apollo.Mutation<CreateEnseignementMutation, CreateEnseignementMutationVariables> {
    document = CreateEnseignementDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateEnseignementDocument = gql`
    mutation updateEnseignement($libelle: String, $abbreviation: String, $enseignant: String, $semestre: String, $ue: String, $niveau: String, $parcours: String, $anneeUniversitaire: String, $enseignementTheorique: Int, $enseignementDirige: Int, $enseignementPratique: Int, $credit: Float, $poids: Float, $enseignementId: String!) {
  updateEnseignement(
    updateEnseignementInput: {libelle: $libelle, abbreviation: $abbreviation, enseignant: $enseignant, semestre: $semestre, ue: $ue, niveau: $niveau, parcours: $parcours, anneeUniversitaire: $anneeUniversitaire, enseignementTheorique: $enseignementTheorique, enseignementDirige: $enseignementDirige, enseignementPratique: $enseignementPratique, credit: $credit, poids: $poids}
    enseignementId: $enseignementId
  ) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateEnseignementGQL extends Apollo.Mutation<UpdateEnseignementMutation, UpdateEnseignementMutationVariables> {
    document = UpdateEnseignementDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteEnseignementDocument = gql`
    mutation deleteEnseignement($idMatiere: String!) {
  deleteEnseignement(idMatiere: $idMatiere)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteEnseignementGQL extends Apollo.Mutation<DeleteEnseignementMutation, DeleteEnseignementMutationVariables> {
    document = DeleteEnseignementDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddMatriculeToEtudiantDocument = gql`
    mutation addMatriculeToEtudiant($matricule: String!, $id: String!) {
  addMatriculeToEtudiant(matricule: $matricule, id: $id) {
    nom
    prenom
    matricule
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddMatriculeToEtudiantGQL extends Apollo.Mutation<AddMatriculeToEtudiantMutation, AddMatriculeToEtudiantMutationVariables> {
    document = AddMatriculeToEtudiantDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateInscriptionDocument = gql`
    mutation updateInscription($etat: String!, $id: String!) {
  updateInscription(etat: $etat, id: $id) {
    etat
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateInscriptionGQL extends Apollo.Mutation<UpdateInscriptionMutation, UpdateInscriptionMutationVariables> {
    document = UpdateInscriptionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
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
export const EditScolariteProfileDocument = gql`
    mutation editScolariteProfile($nom: String, $prenom: String, $fonction: String, $tel: String, $email: String, $image: String, $sexe: String, $scolariteId: String!) {
  editScolariteProfile(
    updateScolariteInput: {nom: $nom, prenom: $prenom, fonction: $fonction, tel: $tel, email: $email, image: $image, sexe: $sexe}
    scolariteId: $scolariteId
  ) {
    id
    nom
    prenom
    fonction
    tel
    email
    sexe
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EditScolariteProfileGQL extends Apollo.Mutation<EditScolariteProfileMutation, EditScolariteProfileMutationVariables> {
    document = EditScolariteProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateDefaultScolariteProfileDocument = gql`
    mutation createDefaultScolariteProfile {
  createDefaultScolariteProfile {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateDefaultScolariteProfileGQL extends Apollo.Mutation<CreateDefaultScolariteProfileMutation, CreateDefaultScolariteProfileMutationVariables> {
    document = CreateDefaultScolariteProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddScolariteProfileToUserDocument = gql`
    mutation addScolariteProfileToUser($idProfile: String!, $userId: String!) {
  addScolariteProfileToUser(idProfile: $idProfile, userId: $userId) {
    username
    roles
    profile
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddScolariteProfileToUserGQL extends Apollo.Mutation<AddScolariteProfileToUserMutation, AddScolariteProfileToUserMutationVariables> {
    document = AddScolariteProfileToUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ScolariteProfileDocument = gql`
    query scolariteProfile($scolariteId: String!) {
  scolarite(scolariteId: $scolariteId) {
    id
    nom
    prenom
    fonction
    tel
    email
    image
    sexe
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ScolariteProfileGQL extends Apollo.Query<ScolariteProfileQuery, ScolariteProfileQueryVariables> {
    document = ScolariteProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateUserDocument = gql`
    mutation createUser($username: String!, $password: String!, $roles: String!, $profile: ID) {
  createUser(
    createUserInput: {username: $username, password: $password, roles: $roles, profile: $profile}
  ) {
    username
    roles
    profile
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    document = CreateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }