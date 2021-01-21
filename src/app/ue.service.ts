import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UeService {
  // http://localhost:3000/ue?niveau=L1&parcours=IG&anneeUniversitaire=2018-2019&semestreName=S1
  private SERVER_URL: string = 'http://localhost:3000/ue'

  constructor(private httpClient: HttpClient) { }
//ok
  getSingleUePerSemestre(niveau: string, parcours: string, anneeUniversitaire: string, semestreName: string) {
    return this.httpClient.get(
      `${this.SERVER_URL}?niveau=${niveau}&parcours=${parcours}&anneeUniversitaire=${anneeUniversitaire}&semestreName=${semestreName}`)
  }

  updateSingleUePerSemestre(ue) {
    return this.httpClient.patch(this.SERVER_URL, ue);
  }

  createUesPerSemestre(ue) {
    return this.httpClient.post(this.SERVER_URL, ue)
  }
} 
