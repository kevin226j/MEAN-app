import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, PatternValidator} from '@angular/forms';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

import {GmailService} from '../../services/api/gmail/gmail.service';
import {IEmail} from '../../services/api/gmail/IEmailEntity';

 
@Component({
  selector: 'app-contact-component',
  templateUrl: './app.contact.component.html',
  styleUrls: [ './app.contact.component.css' ]
})
export class ContactComponent{

  @ViewChild('messageSentSwal') private messageSentSwal: SwalComponent;

  contactForm : FormGroup;
  data = {} as IEmail;

  constructor(private formBuilder : FormBuilder, private gmailService : GmailService) { 
    this.buildForm();
  }
  
  private buildForm () : void {
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
  private onResetForm() {
    this.contactForm.reset();
  }
  //SUBMIT
  private onSubmitForm(e) : void{
    e.preventDefault();
    this.data.name = this.contactForm.value.name;
    this.data.email = this.contactForm.value.email;
    this.data.message = this.contactForm.value.message;
    
    this.gmailService.sendEmailtoHost(this.data).subscribe(()=>{
      this.messageSentSwal.show();
    })
    this.onResetForm();
  }
}