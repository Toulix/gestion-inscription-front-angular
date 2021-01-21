
import { UploadImagesService } from './../../upload-images.service';
import { EditScolariteProfileGQL} from './../../../generated/graphql';
import { Router } from '@angular/router';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ChangeDetectorRef } from '@angular/core';

interface ScolariteImage {
  realScolariteAvatar: string;
}
@Component({
  selector: 'app-update-solarite-profile',
  templateUrl: './update-solarite-profile.component.html',
  styleUrls: ['./update-solarite-profile.component.css']
})
export class UpdateSolariteProfileComponent implements OnInit {
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;
  updateScolariteProfileFormGroup: FormGroup;
  defaultScolariteAvatar: string = "/assets/images/icons8_Male_User_100px.png";
  scolariteImageToUpload: File = null;
  formData = new FormData();
  scolariteImageFromAPI: ScolariteImage;
  imgScolariteFromApi: String;
  realScolariteAvatar = `http://localhost:3000/images/${this.data.image}`

  constructor(private fb: FormBuilder,
    private cdRef: ChangeDetectorRef,
    public  dialogRef: MatDialogRef<UpdateSolariteProfileComponent>,
    private editScolariteProfileGQL : EditScolariteProfileGQL,
    private uploadImagesService: UploadImagesService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.updateScolariteProfileFormGroup =
    this.fb.group({
      nom: [this.data.nom, Validators.required],
      prenom: [this.data.prenom, Validators.required],
      fonction: this.data.fonction,
      tel: this.data.tel,
      email: [this.data.email, Validators.required],
      image: this.data.image,
      sexe: [this.data.sexe, Validators.required],
    })
  }

  handleFileInput(file: FileList) {
    console.log("File input" + file);
    
    this.scolariteImageToUpload= file.item(0);
    console.log("enseignantImageToUpload " + this.scolariteImageToUpload);
    
    const reader = new FileReader(); 
    reader.onload= (event: any) => {
      this.defaultScolariteAvatar = event.target.result;
      this.realScolariteAvatar = event.target.result;
    }
    reader.readAsDataURL(this.scolariteImageToUpload);
    
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    
    this.cdRef.detectChanges();
  }


  onClickUpload() {
    const fileInput = this.fileUpload.nativeElement;
    fileInput.click();

  }
  
  onUpdateScolariteProfile() {
    if(this.scolariteImageToUpload == null) {
        const { 
          nom,
          prenom,
          fonction,
          tel,
          email,
          image,
          sexe 
        } = this.updateScolariteProfileFormGroup.value;

        this.editScolariteProfileGQL.mutate({
          nom,
          prenom,
          fonction,
          tel,
          email,
          image,
          sexe,
          scolariteId: this.data.id
        }).subscribe();
        
        this.dialogRef.close();
        return;
    }

    this.formData.append("scolariteImage", this.scolariteImageToUpload);
    //si le scolarite a déjà une image pas besoin d'uploader un image
    if(this.realScolariteAvatar)
    this.uploadImagesService.uploadScolariteImage(this.formData)
    .subscribe((result: ScolariteImage)=> {
      console.log(result.realScolariteAvatar);
      
      this.scolariteImageFromAPI = result;

      this.imgScolariteFromApi = this.scolariteImageFromAPI.realScolariteAvatar;
      this.updateScolariteProfileFormGroup.get("image")
          .setValue(this.imgScolariteFromApi);

      
            const { 
              nom,
              prenom,
              fonction,
              tel,
              email,
              image,
              sexe 
            } = this.updateScolariteProfileFormGroup.value;

            this.editScolariteProfileGQL.mutate({
              nom,
              prenom,
              fonction,
              tel,
              email,
              image,
              sexe,
              scolariteId: this.data.id
            }).subscribe();

    this.router.navigate(['/scolariteProfile',this.data.id ])
        .then(() => {
          window.location.reload();
        });

            })

    this.dialogRef.close();
  }

}
