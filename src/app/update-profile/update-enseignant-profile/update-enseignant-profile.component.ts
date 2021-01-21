import { NotificationService } from './../../shared/notification.service';
import { UploadImagesService } from './../../upload-images.service';
import { UpdateEnseignantInput } from './../../../generated/graphql';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { EditEnseignantProfileGQL } from 'src/generated/graphql';


interface EnseignantImage {
  realAvatar: string;
}

@Component({
  selector: 'app-update-enseignant-profile',
  templateUrl: './update-enseignant-profile.component.html',
  styleUrls: ['./update-enseignant-profile.component.css']
})
export class UpdateEnseignantProfileComponent implements OnInit {
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;


  updateEnseignantProfileFormGroup: FormGroup;
  defaultEnseignantAvatar: string = "/assets/images/icons8_Male_User_100px.png";
  enseignantImageToUpload: File = null;
  formData = new FormData();
  enseignantImageFromAPI: EnseignantImage;
  imgEnseignantFromApi: String;
  realAvatar = `http://localhost:3000/images/${this.data.image}`

  constructor(private fb: FormBuilder,
              public  dialogRef: MatDialogRef<UpdateEnseignantProfileComponent>,
              private editEnseignantProfileGQL : EditEnseignantProfileGQL,
              private uploadImagesService: UploadImagesService,
              private router: Router,
              private notificationService: NotificationService,
              @Inject(MAT_DIALOG_DATA) public data:any) { }


           
  ngOnInit(): void {
    this.updateEnseignantProfileFormGroup =
      this.fb.group({
        nom: [this.data.nom, Validators.required],
        prenom: [this.data.prenom, Validators.required],
        titre: this.data.titre,
        tel: this.data.tel,
        email: [this.data.email, Validators.required],
        image: this.data.image,
        sexe: [this.data.sexe, Validators.required],
      })
  }

  handleFileInput(file: FileList) {
    console.log("File input" + file);
    
    this.enseignantImageToUpload= file.item(0);
    console.log("enseignantImageToUpload " + this.enseignantImageToUpload);
    
    const reader = new FileReader(); 
    reader.onload= (event: any) => {
      this.defaultEnseignantAvatar = event.target.result;
      this.realAvatar = event.target.result;
    }
    reader.readAsDataURL(this.enseignantImageToUpload);
    
  }

  onClickUpload() {
    const fileInput = this.fileUpload.nativeElement;
    fileInput.click();

  }
  
  onUpdateEnseignantProfile() {
    if(this.enseignantImageToUpload == null) {
        const { 
          nom,
          prenom,
          titre,
          tel,
          email,
          image,
          sexe 
        } = this.updateEnseignantProfileFormGroup.value;

        this.editEnseignantProfileGQL.mutate({
          nom,
          prenom,
          titre,
          tel,
          email,
          image,
          sexe,
          enseignantId: this.data.id
        }).subscribe();
        this.dialogRef.close();
        this.notificationService.info("Profil modifié avec succès !");
       
        return;
    }

    this.formData.append("enseignantImage", this.enseignantImageToUpload);
    //si le prof a déjà une image pas besoin d'uploader un image
    if(this.realAvatar)
    this.uploadImagesService.uploadEnseignantImage(this.formData)
    .subscribe((result: EnseignantImage)=> {
      console.log(result.realAvatar);
      
      this.enseignantImageFromAPI = result

      this.imgEnseignantFromApi = this.enseignantImageFromAPI.realAvatar;
      this.updateEnseignantProfileFormGroup.get("image")
          .setValue(this.imgEnseignantFromApi);

      
            const { 
              nom,
              prenom,
              titre,
              tel,
              email,
              image,
              sexe 
            } = this.updateEnseignantProfileFormGroup.value;

            this.editEnseignantProfileGQL.mutate({
              nom,
              prenom,
              titre,
              tel,
              email,
              image,
              sexe,
              enseignantId: this.data.id
            }).subscribe();

            this.router.navigate(['/enseignantProfile',this.data.id ])
            .then(() => {
              window.location.reload();
              
            }).then(() => {
              this.notificationService.info("Profil modifié avec succès !");
            });
            })
    
    this.dialogRef.close();

   
  }
 
}
