import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, NgModelGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import Client from '../../models/client';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [ReactiveFormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css', 
})
export class ClientComponent implements OnInit {

  client: Client = new Client()
  formClient!: FormGroup

  ngOnInit(): void {
    this.formClient = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      companyName: new FormControl('',[Validators.required]),
      vatNumber: new FormControl(),
      streetName: new FormControl('',[Validators.required]),
      numberLetterAddress: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required]),
      zipCode: new FormControl('',[Validators.required]),
    },[Validators.required])
  }

  validateError(inputName: string):boolean{
    if(this.formClient.controls[inputName].errors &&  this.formClient.controls[inputName].touched){
      return true
    }
    return false
  }

  validateTouched(inputName: string):boolean{
    if( !this.formClient.controls[inputName].errors &&  this.formClient.controls[inputName].touched){
      return true
    }
    return false
  }

  submit(){
    

  }  

}
