import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

class Promotion {
  _id: string;
  libelle: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnneeUniversitaireService {
  private SERVER_URL: string = 'http://localhost:3000/annee-universitaire/active';

  constructor(private httpClient: HttpClient) { }

  getCurrentAnneeUniversitaire() {
    return this.httpClient.get(this.SERVER_URL).toPromise()
    .then(response => response as Promotion);
  }
}
