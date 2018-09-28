import { Component, OnInit } from '@angular/core';
import {DemoService} from '../../services/api/demo/demo.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Idemo} from '../../services/api/demo/IdemoEntity';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  constructor(private demoService : DemoService, private route: ActivatedRoute) {}
  
  list:any = [];

  ngOnInit() {
    this.getData();
  }

  getData () : void {
    this.list = [];
    this.demoService.getDemoData()
      .subscribe((data: {}) => {
        console.log(data);
        this.list = data;
      });
  }

}