import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  //Group Form Signup


signUp = new FormGroup({
  name:new FormControl("",[Validators.required]),
  email:new FormControl("",[Validators.required,Validators.maxLength(50)]),
  password:new FormControl("",[Validators.required,Validators.minLength(5)])
})

onSubmit(){
console.log(this.signUp.value);
}

get name(){
  return this.signUp.get("name");
}

get email(){
  return this.signUp.get("email");
}

get password(){
  return this.signUp.get("name");
}

}
