import { Niveau } from './../../model/niveau';
import { Parcours } from './../../model/parcours.model';
import { InscriptionService } from './../inscription.service';
import { AvatarBordereau } from './../../model/avatarBordereau';
import { UploadImagesService } from './../upload-images.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs'
import { AnneeUniversitaireService } from '../annee-universitaire.service';
import { ParcoursService } from '../parcours.service';
import { NiveauService } from '../niveau.service';
import { Promotion } from 'src/model/promotion.class';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {
  defaultAvatar: String ='/assets/images/Camera2.png';
  defaultBordereau: String = '/assets/images/Bill2.png';
  avatarImg: File[] = [];
  bordereauImg: File[]=[];

  // avatar and bordereau from the server
  avatarBordereau : AvatarBordereau;
  avatarFromApi: string;
  bordereauFromApi: string;

  isAvatarProvided: boolean = false;
  isBordereauProvided: boolean = false;

  studentFormGroup: FormGroup;
  infoBaccFormGroup: FormGroup;
  infoBordereauFormGroup: FormGroup;

  //all the inscriptions info to be sent to the server
  inscriptionData: any;

  idFoundPromotion: string;
  idFoundNiveau: string;

  public parcours: Parcours[];
  //private foundPromotion: Promotion ;
  // public libellePromotion = new Promise<any>((resolve, reject) => {
  //   this.anneeUniversitaireService.getCurrentAnneeUniversitaire().then(foundPromotion => {
  //    resolve(foundPromotion.libelle);
  //    this.foundPromotion = foundPromotion;
  //   })
  // })

   public foundPromotion = new Promise<any>((resolve, reject) => {
    this.anneeUniversitaireService.getCurrentAnneeUniversitaire().then(foundPromotion => {
     resolve(foundPromotion);
     this.idFoundPromotion = foundPromotion._id;
    })
  })
  
  public foundNiveau = new Promise<any>((resolve, reject) => {
    this.niveauService.getSingleNiveau('L1').then(foundNiveau => {
      resolve(foundNiveau);
      this.idFoundNiveau = foundNiveau._id
    }) })

  idSelectedParcours: string;
  

  formData = new FormData();

    constructor(private fb: FormBuilder,
                private uploadImages: UploadImagesService,
                private inscriptionService: InscriptionService,
                private anneeUniversitaireService: AnneeUniversitaireService,
                private parcoursService: ParcoursService,
                private niveauService: NiveauService,
                ) {} 

    ngOnInit(){
    //get all parcours
      this.parcoursService.getAllParcours().then(foundParcours => 
          this.parcours = foundParcours
      )

      this.studentFormGroup = this.fb.group({
        avatar: [null],
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        cin:[null],
        tel:['',Validators.required],
        mail: ['', Validators.email],
        adresse: [''],
        sexe:['', Validators.required],
        dateNaissance: [Date, Validators.required],
        lieuNaissance: ['', Validators.required],
        situationMatrimoniale: ['', Validators.required],
        pere: [''],
        statutPere: [''],
        professionPere: [''],
        mere: [''],
        statutMere: [''],
        professionMere: [''],
        tuteur: [''],
        statusTuteur: [''],
        professionTuteur: [''],
        adresseParentsTuteurs: [''],
      });
      this.infoBaccFormGroup = this.fb.group({
        serie: ['', Validators.required],
        mention: ['', Validators.required],
        anneeObtention: ['', Validators.required],
        origine: ['', Validators.required]
      })
      this.infoBordereauFormGroup = this.fb.group({
        bordereau: [null],
        numBordereau: ['', Validators.required],
        dateVersement: [Date, Validators.required],
        montant: [null, Validators.required]
      })
    }

    // public showNotification( type: string, message: string ): void {
    //   this.notifier.notify( type, message );
    // } 
//     <button class="button button--primary" (click)="showNotification( 'info', 'This library is built on top of Angular 2.' )">
//     Info me!
//   </button>
// <button class="button button--primary" (click)="showNotification( 'success', 'Notification successfully opened.' )">
//     Success me!
//   </button>
// <button class="button button--primary" (click)="showNotification( 'warning', 'Warning! But not an error! Just a warning!' )">
//     Warning me!
//   </button>
// <button class="button button--primary" (click)="showNotification( 'error', 'Whoops, something went wrong. Probably.' )">
//<notifier-container></notifier-container>
    onParcoursToggleGroup(idParcours) {
      this.idSelectedParcours = idParcours;
    }
       
    onSubmitInfoEtudiant() {
      console.log(this.studentFormGroup.value);
      if(this.avatarImg.length === 0) {
       this.studentFormGroup.setErrors({
         NoAvatarProvided: true
       });
      }
      
    }

    onSubmitInfoBacc() {
      console.log(this.infoBaccFormGroup.value);  
    }

    onSubmitInfoBordereau() {
      if(this.bordereauImg.length === 0) {
        this.infoBordereauFormGroup.setErrors({
          NoBordereauProvided: true
        });
       }
       //if all the stepper are valid
       //1-get the two images and store them into the formData
       this.formData.append('avatar', this.avatarImg[this.avatarImg.length - 1]);
       this.formData.append('bordereau', this.bordereauImg[this.bordereauImg.length - 1]);
       //2-Send all the images to the server via REST API
       // a) call the service for sending the image
       this.uploadImages.uploadAvatarAndBordereau(this.formData)
       .subscribe((result : AvatarBordereau)=> {
        // b) then store the image to avatarBordereau
        this.avatarBordereau = result;
        this.avatarFromApi = this.avatarBordereau.avatar;
        this.bordereauFromApi = this.avatarBordereau.bordereau;

        this.inscriptionData = 
      { 
        studentInfo: { ...this.studentFormGroup.value, avatar: this.avatarFromApi, ...this.infoBaccFormGroup.value },
        bordereauInfo: {...this.infoBordereauFormGroup.value, bordereau: this.bordereauFromApi },
        anneeUniversitaire: this.idFoundPromotion,
        niveau: this.idFoundNiveau,
        parcours: this.idSelectedParcours
      }
      
      console.log(this.inscriptionData);

      this.inscriptionService.createInscription(this.inscriptionData)
        .subscribe(result => {
          console.log(result);
        })
      });
    }

    onSelect(event){
    this.avatarImg.push(...event.addedFiles);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.defaultAvatar = event.target.result;
      }
    reader.readAsDataURL(this.avatarImg[this.avatarImg.length - 1]);
  
    if(this.isAvatarProvided == false) {
    this.isAvatarProvided = !this.isAvatarProvided;
    }
    }

    onSelectBordereau(event){
    this.bordereauImg.push(...event.addedFiles);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.defaultBordereau = event.target.result;
      }
    reader.readAsDataURL(this.bordereauImg[this.bordereauImg.length - 1]);
    if(this.isBordereauProvided == false) {
      this.isBordereauProvided = !this.isBordereauProvided;
      }    
    }
      
    onRemove(event){
      console.log(event);
      this.avatarImg.splice(this.avatarImg.indexOf(event), 1);
    }
}
