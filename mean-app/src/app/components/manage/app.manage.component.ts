import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, PatternValidator} from '@angular/forms';
import {ObservableMedia} from '@angular/flex-layout';
import { ActivatedRoute, Router } from '@angular/router';
import { tap} from "rxjs/operators";
import { SwalComponent } from '@toverux/ngx-sweetalert2';


import {IPhoto} from '../gallery/Iphoto.entity';
import {DemoService} from '../../services/api/demo/demo.service';

 
@Component({
  selector: 'app-manage-component',
  templateUrl: './app.manage.component.html',
  styleUrls: [ './app.manage.component.css' ]
})

export class ManageComponent{

  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;
  @ViewChild('submitSwal') private submitSwal: SwalComponent;

  photos : any = [];
  formData : FormGroup;
  private currentId : string;

  constructor(private formBuilder : FormBuilder, private demoService : DemoService, private route: ActivatedRoute) { 
    this.buildForm();
  }

  //Build Form
  private buildForm () {
    this.formData = this.formBuilder.group({
      fullURL : this.formBuilder.control(null),
      thumbURL : this.formBuilder.control(null),
      caption : this.formBuilder.control(null)
    });
  }

  ngOnInit() {
    this.getData();
  }
  //Reset Form
  private onResetForm(): void {
    setTimeout(()=> {
      this.formData.reset();
    }, 200)
  }
  //GET method
  private getData() : void {
    this.photos = [];
    setTimeout(()=>{
      this.demoService.GetAll().subscribe((data: {}) => {
        this.photos = data;
      });
    }, 100)
  }

  // DELETE and re-populate form with GET BY ID - method determined by passed in 'action';
  private onClick(id: string, action: string) : void {
    if (action === 'edit'){
      this.demoService.GetById(id).subscribe(
        data => this.formData.patchValue(data)
      )
      this.currentId = id;
    } else if (action === 'delete'){
        this.deleteSwal.show().then(res => {
          if (res.value){
            this.demoService.Delete(id).subscribe();
            this.getData();
          }
        });
    }
  }

// POST and PUT - method determined by this.currentId;
  private onSubmit() : void {
    if (this.currentId !== undefined) {
      this.demoService.Put(this.currentId, this.formData.value).subscribe(
        (success) => {
          this.currentId = undefined;
          this.submitSwal.show();
        },
        err => console.log('error updating')
      )
    } else {
        this.demoService.Post(this.formData.value).subscribe(
          (success) => {
            this.submitSwal.show();
          },
          err => console.log('error posting'));
    }
    this.onResetForm();
    this.getData();
  }
}

