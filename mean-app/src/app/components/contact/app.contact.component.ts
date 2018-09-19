import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, PatternValidator} from '@angular/forms';

 
@Component({
  selector: 'app-contact-component',
  templateUrl: './app.contact.component.html',
  styleUrls: [ './app.contact.component.css' ]
})
export class ContactComponent{
  contactForm : FormGroup;

  constructor(private formBuilder : FormBuilder) { 
    this.buildForm();
  }
  
  private buildForm () {
    this.contactForm = this.formBuilder.group({
      name : this.formBuilder.control(null,Validators.required),
      email : this.formBuilder.control(null,[
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      message : this.formBuilder.control(null,Validators.required)
    });
  }


  //RESET
  onResetForm() {
    this.contactForm.reset();
  }
  //SUBMIT
  onSubmitForm(e){
    e.preventDefault();
    console.log(this.contactForm.value);
    this.onResetForm();
  }
}