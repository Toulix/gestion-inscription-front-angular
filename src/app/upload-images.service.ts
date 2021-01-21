import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UploadImagesService {
  private SERVER_URL: string = 'http://localhost:3000/images/students';
  private UPLOAD_ENSEIGNANT_PROFILE_URL = "http://localhost:3000/images/enseignants"; 
  private UPLOAD_SCOLARITE_PROFILE_URL = "http://localhost:3000/images/scolarites"; 
  private UPLOAD_ADMIN_PROFILE_URL = "http://localhost:3000/images/admin"; 

  constructor(private httpClient: HttpClient) { }

  uploadAvatarAndBordereau(formData: FormData ){
    return this.httpClient.post(this.SERVER_URL,formData);
  }

  uploadEnseignantImage(formData: FormData) {
    return this.httpClient.post(this.UPLOAD_ENSEIGNANT_PROFILE_URL, formData);
  }

  uploadScolariteImage(formData: FormData) {
    return this.httpClient.post(this.UPLOAD_SCOLARITE_PROFILE_URL, formData);
  }
  uploadAdminImage(formData: FormData) {
    return this.httpClient.post(this.UPLOAD_ADMIN_PROFILE_URL, formData);
  }
}
