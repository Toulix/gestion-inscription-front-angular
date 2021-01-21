import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UploadImagesService } from 'src/app/upload-images.service';
import { EditAdminProfileGQL } from 'src/generated/graphql';


interface AdminImage {
  realAdminAvatar: string;
}

@Component({
  selector: 'app-update-admin-profile',
  templateUrl: './update-admin-profile.component.html',
  styleUrls: ['./update-admin-profile.component.css']
})
export class UpdateAdminProfileComponent implements OnInit {
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;

  updateAdminProfileFormGroup: FormGroup;
  defaultAdminAvatar: string = "/assets/images/icons8_Male_User_100px.png";
  adminImageToUpload: File = null;
  formData = new FormData();
  adminImageFromAPI: AdminImage;
  imgAdminFromApi: String;
  realAdminAvatar = `http://localhost:3000/images/${this.data.image}`

  constructor(private fb: FormBuilder,
    public  dialogRef: MatDialogRef<UpdateAdminProfileComponent>,
    private editAdminProfileGQL : EditAdminProfileGQL,
    private uploadImagesService: UploadImagesService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.updateAdminProfileFormGroup =
      this.fb.group({
        nom: [this.data.nom, Validators.required],
        prenom: [this.data.prenom, Validators.required],
        tel: this.data.tel,
        email: [this.data.email, Validators.required],
        image: this.data.image,
        sexe: [this.data.sexe, Validators.required],
      })
  }


  handleFileInput(file: FileList) {
    console.log("File input" + file);
    
    this.adminImageToUpload = file.item(0);
    console.log("enseignantImageToUpload " + this.adminImageToUpload);
    
    const reader = new FileReader(); 
    reader.onload= (event: any) => {
      this.defaultAdminAvatar = event.target.result;
      this.realAdminAvatar = event.target.result;
    }
    reader.readAsDataURL(this.adminImageToUpload);
    
  }

  onClickUpload() {
    const fileInput = this.fileUpload.nativeElement;
    fileInput.click();

  }
  
  onUpdateAdminProfile() {
    if(this.adminImageToUpload == null) {
        const { 
          nom,
          prenom,
          tel,
          email,
          image,
          sexe 
        } = this.updateAdminProfileFormGroup.value;

        this.editAdminProfileGQL.mutate({
          nom,
          prenom,
          tel,
          email,
          image,
          sexe,
          enseignantId: this.data.id
        }).subscribe();
        this.dialogRef.close();
        this.router.navigate['/enseignantProfile']
        return;
    }

    this.formData.append("adminImage", this.adminImageToUpload);
    //si le prof a déjà une image pas besoin d'uploader un image
  //  if(this.realAdminAvatar)
    this.uploadImagesService.uploadAdminImage(this.formData)
    .subscribe((result: AdminImage)=> {
      console.log(result.realAdminAvatar);
      
      this.adminImageFromAPI = result

      this.imgAdminFromApi = this.adminImageFromAPI.realAdminAvatar;
      this.updateAdminProfileFormGroup.get("image")
          .setValue(this.imgAdminFromApi);

            const { 
              nom,
              prenom,
              tel,
              email,
              image,
              sexe 
            } = this.updateAdminProfileFormGroup.value;

            this.editAdminProfileGQL.mutate({
              nom,
              prenom,
              tel,
              email,
              image,
              sexe,
              enseignantId: this.data.id,
              
            })
            .subscribe();

            this.router.navigate(['/adminProfile',this.data.id ])
            .then(() => {
              window.location.reload();
            });
    
            })

    this.dialogRef.close();
  }
}
