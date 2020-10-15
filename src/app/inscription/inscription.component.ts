import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent {
  title = 'inscription works !';
  uploadeFilesFromView: File[] = [];
  
  imageUrl: String ='/assets/images/camera.png';

  constructor() {} 
 

  onSelect(event){
    // console.log(event);
    this.uploadeFilesFromView.push(...event.addedFiles);
    // console.log(this.uploadeFilesFromView[0]);
    // console.log(...event.addedFiles);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
  }
  reader.readAsDataURL(this.uploadeFilesFromView[this.uploadeFilesFromView.length - 1]);
}

  // onRemove(event){
  //   console.log(event);
  //   this.files.splice(this.files.indexOf(event), 1);
  // }
}
