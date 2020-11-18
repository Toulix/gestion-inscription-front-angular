import { Parcours } from './../model/parcours.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ParcoursService {
  private SERVER_URL: string = 'http://localhost:3000/parcours'
  constructor(private httpClient: HttpClient) { }

  getAllParcours(): Promise<Parcours[]> {
    return this.httpClient.get(this.SERVER_URL)
                          .toPromise()
                          .then(response => response as Parcours[]);
  }
}
