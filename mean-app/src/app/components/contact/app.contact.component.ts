import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

 
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
      name : this.formBuilder.control(null),
      email : this.formBuilder.control(null),
      message : this.formBuilder.control(null)
    });
  }

  onResetForm() {
    this.contactForm.reset();
  }

  onSubmitForm(e){
    e.preventDefault();
    console.log(this.contactForm.value);
    this.onResetForm();
  }
}