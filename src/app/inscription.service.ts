import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private SERVER_URL: string = 'http://localhost:3000/inscriptions'

  constructor(private httpClient: HttpClient) { }

  createInscription(inscription) {
    return this.httpClient.post(this.SERVER_URL, inscription);
  }

}
