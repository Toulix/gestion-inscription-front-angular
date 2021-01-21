import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private SERVER_URL: string = 'http://localhost:3000/inscriptions'
  private EMAIL_URL: string = 'http://localhost:3000/inscriptions/mail'
  constructor(private httpClient: HttpClient) { }

  createInscription(inscription) {
    return this.httpClient.post(this.SERVER_URL, inscription);
  }

  sendEmailToStudent(studentinfo) {
    console.log(studentinfo);
    return this.httpClient.post(this.EMAIL_URL, studentinfo);
  }
}
