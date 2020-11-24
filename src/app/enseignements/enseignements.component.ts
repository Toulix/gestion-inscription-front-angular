import { Enseignant } from './../../generated/graphql';
import { Component, Input, OnInit } from '@angular/core';
import {  FormGroup,
          FormControl,
          FormBuilder,
          FormArray,
          Validators } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core'


@Component({
  selector: 'app-enseignements',
  templateUrl: './enseignements.component.html',
  styleUrls: ['./enseignements.component.css']
})
export class EnseignementsComponent implements OnInit {
  semestre1: FormGroup;
  empForm: FormGroup;
  @Input() semestreTitle: string;


  constructor(private fb: FormBuilder,
              private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    // this.semestre1 = this.fb.group({
    //   semestreName: ['', Validators.required],
    //   ues: this.fb.array([])
    // })
    // this.empForm = this.fb.group({
    //   employees: this.fb.array([])
    // })

    this.semestre1 = this.fb.group({
      semestreName: '',
      ues: this.fb.array([])
    })
    
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    
    this.cdRef.detectChanges();
  }

    // employees(): FormArray {
    //   return this.empForm.get("employees") as FormArray
    // }

    ues(): FormArray {
      return this.semestre1.get("ues") as FormArray
    }

    // newEmployee(): FormGroup {
    //   return this.fb.group({
    //     firstName: '',
    //     lastName: '',
    //     skills: this.fb.array([])
    //   })
    // }

    newUe(): FormGroup {
      return this.fb.group({
        ueName: '',
        matieres: this.fb.array([])
      })
    }

    // addEmployee() {
    //  this.employees().push(this.newEmployee());
    // }

    addUe() {
      this.ues().push(this.newUe());
    }

    // removeEmployee(empIndex) {
    //   return this.employees().removeAt(empIndex);
    // }

    removeUe(ueIndex) {
      return this.ues().removeAt(ueIndex);
    }

    // //get
    // employeeSkills(empIndex): FormArray {
    //   return this.employees().at(empIndex).get("skills") as FormArray
    // }

    getUeMatieres(ueIndex): FormArray {
      return this.ues().at(ueIndex).get("matieres") as FormArray
    }

    // newSkill(): FormGroup {
    //   return this.fb.group({
    //     skill:'',
    //     exp: ''
    //   })
    // }

    newMatiere(): FormGroup {
      return this.fb.group({
        libelle: [''],
        abbreviation: [''],
        enseignementTheorique: [''],
        enseignementDirige: [''],
        enseignementPratique: [''],
        credit: 0,
        poids: [''],
        enseignant: '',
      })
    }

    // addEmployesSkill(empIndex) {
    //   this.employeeSkills(empIndex).push(this.newSkill());
    // }

    addUeMatiere(ueIndex) {
      this.getUeMatieres(ueIndex).push(this.newMatiere());
    }

    // removeEmployeeSkill(empIndex, skillIndex) {
    //   this.employeeSkills(empIndex).removeAt(skillIndex);
    // }

    removeUeMatiere(ueIndex, matiereIndex) {
      this.getUeMatieres(ueIndex).removeAt(matiereIndex)
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