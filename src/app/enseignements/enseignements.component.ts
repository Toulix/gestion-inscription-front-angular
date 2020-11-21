import { Component, Input, OnInit } from '@angular/core';
import {  FormGroup,
          FormControl,
          FormBuilder,
          FormArray,
          Validators } from '@angular/forms';


@Component({
  selector: 'app-enseignements',
  templateUrl: './enseignements.component.html',
  styleUrls: ['./enseignements.component.css']
})
export class EnseignementsComponent implements OnInit {
  semestre1: FormGroup;
  empForm: FormGroup;
  //@Input() semestreTitle: string;


  constructor(private fb: FormBuilder) { }

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
        credit: [''],
        poids: [''] 
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
