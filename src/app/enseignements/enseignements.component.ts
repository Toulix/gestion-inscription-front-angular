import { DeleteMatiereComponent } from './../delete-matiere/delete-matiere.component';
import { NotificationService } from './../shared/notification.service';
import { EnseignantsGQL, CreateEnseignementGQL } from './../../generated/graphql';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {  FormGroup,
          FormControl,
          FormBuilder,
          FormArray,
          Validators } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core'
import { map, switchMap} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { UeService } from '../ue.service';
import { MatDialog, MatDialogConfig} from "@angular/material/dialog";
interface Enseignant {
    id: string,
    nom?: string,
    prenom?: string,
    image?: string
}
@Component({
  selector: 'app-enseignements',
  templateUrl: './enseignements.component.html',
  styleUrls: ['./enseignements.component.css']
})
export class EnseignementsComponent implements OnInit, OnDestroy {
  semestre1: FormGroup;
  subscription: Subscription;
  enseignants: Enseignant[];
  data: any[]
  isUeSet : boolean = false;

  @Input() semestreName: string;
  @Input() semestreTitle: string;
  @Input() anneeUniversitaire: string;
  @Input() niveau: string;
  @Input() parcours: string;


  constructor(private matDialog: MatDialog, 
              private ueService : UeService,
              private notificationService: NotificationService,
              private enseignantsGQL: EnseignantsGQL,
              private fb: FormBuilder,
              private cdRef: ChangeDetectorRef,
              private createEnseignementGQL: CreateEnseignementGQL) { }
  
  
  createUes(ue) {
    // console.log(ue);
   if(this.ues().value.length == 0) {
     this.notificationService.info("Vous devez ajouter une UE avant d'enregistrer !");
     return null;
   }
     
    if(this.isUeSet == true ) {
      this.ueService.updateSingleUePerSemestre(ue)
        .subscribe(
          result => console.log(result)
        )
        return;
    }

   if(!!this.isUeSet) {
     console.log("Niditra tato izy");
     
      this.ueService.createUesPerSemestre(ue)
        .subscribe(
          result => console.log(result)
        )
   }

   if(this.isUeSet == false) {
    console.log("Niditra tato  @ false izy");
    
     this.ueService.createUesPerSemestre(ue)
       .subscribe(
         result => console.log(result)
       )
  }
    
  }
              
  ngOnInit(): void {
  this.subscription = this.enseignantsGQL
                          .watch()
                          .valueChanges
                          .pipe(
                            map(result => result.data.enseignants)
                          )
                          .subscribe(
                            enseignants => {
                              this.enseignants =  enseignants;
                            }
                          )

                
    this.semestre1 = this.fb.group({
   //   _id:'',
      niveau: this.niveau,
    	parcours: this.parcours,
    	anneeUniversitaire: this.anneeUniversitaire,
      semestreName: this.semestreName,
      ues: this.fb.array([])
    });

this.ueService.getSingleUePerSemestre(this.niveau,this.parcours,this.anneeUniversitaire, (this.semestreName).toString())
              .subscribe((result: any) => {
                if(result == null ) {
               //   this.isUeSet = false;
                  return;
                }
              else {
                this.isUeSet = true;
                  let data = [result];
                  for (let i = 0; i < data.length; i++) {
                  //  this.semestre1.get("_id").setValue(data[0]._id);
                    this.semestre1.get("semestreName").setValue(data[0].semestreName);
                    this.semestre1.get("niveau").setValue(data[0].niveau);
                    this.semestre1.get("parcours").setValue(data[0].parcours);
                    this.semestre1.get("anneeUniversitaire").setValue(data[0].anneeUniversitaire);
                    for (let j = 0; j < data[i].ues.length; j++) {
                      this.addUe();
                      
                      this.ues().controls[j].get('ueName')
                      .setValue(data[i].ues[j].ueName);
                        for (let k = 0; k < data[i].ues[j].matieres.length; k++) {
                          const matieres = data[i].ues[j].matieres[k];
                          console.log(" matieres " + matieres);
                          this.addUeMatiere(j);
                          this.getUeMatieres(j).controls[k].patchValue(matieres)
                        }
                    }
                }
              }
          }
  )
      
  }

  onSaveUe(ue) {

    // this.ueService.updateSingleUePerSemestre(ue)
    //     .subscribe();
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }


    ues(): FormArray {
      return this.semestre1.get("ues") as FormArray
    }


    newUe(): FormGroup {
      return this.fb.group({
        ueName: ['', Validators.required],
        matieres: this.fb.array([])
      })
    }

    addUe() {
      // if(this.isUeSet == false) {
      //   this.isUeSet = true
      // }
      
      this.ues().push(this.newUe());
    }

    removeUe(ueIndex) {
      if(this.semestre1.value.ues.length === 1) {
        this.isUeSet = false;
      }
      return this.ues().removeAt(ueIndex);
    }


    getUeMatieres(ueIndex): FormArray {
      return this.ues().at(ueIndex).get("matieres") as FormArray
    }


    newMatiere(): FormGroup {
      return this.fb.group({
        libelle: ['', Validators.required],
        abbreviation: ['', Validators.required],
        enseignementTheorique: null,
        enseignementDirige: null,
        enseignementPratique: null,
        credit: 0,
        poids: null,
        enseignant: '',
      })
    }


    addUeMatiere(ueIndex) {
      this.getUeMatieres(ueIndex).push(this.newMatiere());
      // console.log( this.getUeMatieres(ueIndex)[0]);
    }

    removeUeMatiere(ueIndex, matiereIndex) {
      //dialog êtes-vous sur de vouloir supprimer ?
    //  console.log(ue);
      
      if(this.isUeSet == true) {
       let dialogRef = this.matDialog.open(DeleteMatiereComponent);
       dialogRef.afterClosed()
                .subscribe(result => {
                  if(result == "true") {
                    this.getUeMatieres(ueIndex).removeAt(matiereIndex);
                    this.ueService.updateSingleUePerSemestre(this.semestre1.value)
                                  .subscribe(
                                    result => 
                                    {
                                      this.notificationService.succes("Suppression réussi")
                                    })
                      return null;
                  }
                  if(result == "false") {
                    return null;
                  }
                })
        //update the database
      }
      if(this.isUeSet == false) {
        this.getUeMatieres(ueIndex).removeAt(matiereIndex);
      //message de confirmation
    }
  }
    //tokony oe update (le bouton manga update)
    onSaveMatiere(ueIndex, matiereIndex) {
    const ue = this.semestre1.value.ues[ueIndex].ueName;
    const semestre = this.semestre1.value.semestreName;
    // const niveau = this.niveau;
    // const parcours = this.parcours;
    // const anneeUniversitaire = this.anneeUniversitaire;

    // const enseignement = {
    //   ...this.semestre1.value.ues[ueIndex].matieres[matiereIndex]
    //   , ue, semestre, niveau, parcours, anneeUniversitaire
    // }
    
    // console.log(enseignement);
    // this.createEnseignementGQL
    //     .mutate(
    //       {...enseignement}
    //     ).pipe(
    //       map( result => result.data.createEnseignement.id)
    //     )
    //     .subscribe(
          // id =>
          // this.semestre1.value.ues[ueIndex].matieres[matiereIndex].id = id
         // )
        this.notificationService.succes("Matière créer avec succès !")
    
    // console.log( this.semestre1.value.ues[ueIndex].matieres[matiereIndex]);
    // console.log(this.semestre1.value.ues[ueIndex].ueName);
    
    }

    //getEt() {
      // const et = this.semestre1.get('ues').value[0].matieres[0].enseignementTheorique;
      // const ed = this.semestre1.get('ues').value[0].matieres[0].enseignementDirige;
      // const ep = this.semestre1.get('ues').value[0].matieres[0].enseignementPratique;
      // console.log("Et :" + et );
      // console.log("Ed :" + ed );
      // console.log("Ep :" + ep );
      // console.log("Enseignement Théorique" 
      // + this.semestre1.value.ues[0].matieres[0].enseignementTheorique);
    //}

    getSingleEt(ueIndex,matiereIndex ) {
      return this.semestre1.value.ues[ueIndex].matieres[matiereIndex].enseignementTheorique;
    //  return null; // It doesn't show anything
    }
    getSingleEd(ueIndex, matiereIndex) {
      return this.semestre1.value.ues[ueIndex].matieres[matiereIndex].enseignementDirige;
    }
    
    getSingleEp(ueIndex, matiereIndex ) {
      return this.semestre1.value.ues[ueIndex].matieres[matiereIndex].enseignementPratique;
    }

    getCredit(ueIndex, matiereIndex) {
      const credit = this.semestre1.value.ues[ueIndex].matieres[matiereIndex].credit;
      this.getCreditPerMatiere(ueIndex, matiereIndex);
      console.log("Crédit: " + credit );
      return credit;
    }

    getPoidsPerMatiere(ueIndex, matiereIndex) {
      const credit = this.semestre1.value.ues[ueIndex].matieres[matiereIndex].credit;
      const totalCredit = this.getTotalCreditPerUe(ueIndex);
      let poids = credit / totalCredit;
      this.getUeMatieres(ueIndex).controls[matiereIndex].get("poids").setValue(poids);
     // return poids;
    }

    getMatiere(ueIndex) {
      const ues =  this.getUeMatieres(ueIndex).controls[0].get("credit").value;
      console.log(ues);
    }

    getCreditPerMatiere(ueIndex, matiereIndex) {
      const creditPerMatiere = (this.getSingleEt(ueIndex,matiereIndex ) +
             this.getSingleEd(ueIndex, matiereIndex) +
             this.getSingleEp(ueIndex,matiereIndex))/16;
      this.getUeMatieres(ueIndex).controls[matiereIndex].get("credit").setValue(creditPerMatiere);

    // return creditPerMatiere;
     }

    getTotalCreditPerUe(ueIndex) {
      const arrayMatieres = this.semestre1.value.ues[ueIndex].matieres;
      // console.log(arrayMatieres);
      
      let totalCredit = 0;
      arrayMatieres.forEach(matiere => {
        // console.log("Crédit" + matiere.credit);
        totalCredit = totalCredit + matiere.credit;
      });
      // console.log("Total Crédit " + totalCredit);
      
      return totalCredit;
    }


  }

  // get uesForm() {
  //   return this.semestre1.get('ues') as FormArray
  // }



  // initUniteDEnseignement() {
  //   return this.fb.group({
  //     ueName: [''],
  //     matieres: this.fb.array([this.initMatieres()])
  //   })
  // }

  // initMatieres() {
  //   return this.fb.group({
  //     libelle: [''],
  //     abbreviation: [''],
  //     enseignementTheorique: [''],
  //     enseignementDirige: [''],
  //     enseignementPratique: [''],
  //     credit: [''],
  //     poids: [''] 
  //   })
  // }

  // addUniteDenseignement() {
  //   const ues = this.semestre1.get("ues") as FormArray;
  //   ues.push(this.initUniteDEnseignement());
  // }

  // removeUniteDenseignement(idUe) {
  //   const ueArray = this.semestre1.get("ues") as FormArray;
  //   ueArray.removeAt(idUe);
  // }

  // addMatiere(j) {
  //   console.log(j);
  //   const ueArray = this.semestre1.get("ues") as FormArray;
  //   const matieresArray = ueArray.controls[j].get("matieres") as FormArray;
  //   matieresArray.push(this.initMatieres())
  // }

  // removeMatiere(j) {
  //   console.log(j);
  //   const ueArray = this.semestre1.get("ues") as FormArray;
  //   const matieresArray = ueArray.controls[j].get("matieres") as FormArray ;
  //   matieresArray.removeAt(j);

  // }

  // getUniteDEnseignement(form) {
  //   return form.controls.ues.controls
  // }

  // getMatieres(form){
  //   return form.controls.matieres.controls
  // }

//}

interface Matiere {
  libelle: string;
  abbreviation: string;
  enseignementTheorique: Number;
  enseignementDirige: Number;
  enseignementPratique: Number;
  credit: Number;
  poids: Number;
  enseignant: string;
}
interface UE {
  ueName: string;
  matieres: [Matiere]
}
interface Enseignement {
  semestreName: string;
  ues : [UE]
}