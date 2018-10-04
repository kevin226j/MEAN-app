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
  
  onResetForm() {
    setTimeout(()=> {
      this.formData.reset();
    }, 200)
  }

  getData() : void {
    this.photos = [];
    setTimeout(()=>{
      this.demoService.GetAll().subscribe((data: {}) => {
        this.photos = data;
      });
    }, 100)
  }

  deletePhoto(id : string){
    this.demoService.Delete(id).subscribe()
    setTimeout(()=>{
      this.getData();
    }, 1000);
  }

  editPhoto(id :string){
    this.demoService.GetById(id).subscribe(
      data => this.formData.patchValue(data)
    )
    this.currentId = id;
  }

// POST and PUT - method determined by this.currentId;
  onSubmit() {
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

