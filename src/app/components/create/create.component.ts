import { Component, OnInit } from '@angular/core';
import { ComminService } from 'src/app/services/commin.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private common: ComminService) { }

  ngOnInit(): void {
  }

  createPosts() {
    const dataParam = {
      "name": "morpheus",
      "job": "leader"
    }
    this.common.postApi(dataParam,'users').then(res => {

    }).catch(err => {
      
    })
  }

}
