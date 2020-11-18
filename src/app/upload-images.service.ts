import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '@apollo/client/core';

@Injectable({
  providedIn: 'root'
})
export class UploadImagesService {
  private SERVER_URL: string = 'http://localhost:3000/images/students';

  constructor(private httpClient: HttpClient) { }

  uploadAvatarAndBordereau(formData: FormData ){
    return this.httpClient.post(this.SERVER_URL,formData);
  }
}
