import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  generatedPassword : string; 
  createUserFormGroup: FormGroup;
  defaultUser: String = '/assets/images/user_two.png'
 
  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<CreateUserComponent>) { 
  }

  ngOnInit(){
    this.createUserFormGroup = this.fb.group({
      username : ['', Validators.required, Validators.minLength(5)],
      password : ['', Validators.required, Validators.minLength(5)],
      roles: ['', Validators.required]
    })
  }

 generatePassword() {
    this.generatedPassword = Math.random().toString(36).slice(2);
    this.createUserFormGroup.get('password').setValue(this.generatedPassword);
    console.log(this.generatePassword);
  }

  onCreateUserToApi() {
    this.createUserFormGroup.reset();
    this.dialogRef.close();
  }

}
