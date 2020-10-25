import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent {
  defaultAvatar: String ='/assets/images/Camera2.png';
  defaultBordereau: String = '/assets/images/Bill2.png';
  avatarImg: File[] = [];
  bordereauImg: File[]=[];

  constructor() {} 

  onSelect(event){
    this.avatarImg.push(...event.addedFiles);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.defaultAvatar = event.target.result;
      }
  reader.readAsDataURL(this.avatarImg[this.avatarImg.length - 1]);
}

onSelectBordereau(event){
  this.bordereauImg.push(...event.addedFiles);
  const reader = new FileReader();
  reader.onload = (event: any) => {
    this.defaultBordereau = event.target.result;
    }
  reader.readAsDataURL(this.bordereauImg[this.bordereauImg.length - 1]);
  }

  onRemove(event){
    console.log(event);
    this.avatarImg.splice(this.avatarImg.indexOf(event), 1);
  }
}
