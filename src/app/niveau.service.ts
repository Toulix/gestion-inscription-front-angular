import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Niveau } from './../model/niveau';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  private SERVER_URL: string = 'http://localhost:3000/niveau'
  constructor(private httpClient: HttpClient) { }

  getSingleNiveau(niveau: string) {
    return this.httpClient.get(`${this.SERVER_URL}?n=${niveau}`).toPromise()
    .then(response => response as Niveau);
  }
}
