import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit {
  shangavi : number[] = [1,2,3,4,5,1,1,1,1,1,1,1];
  constructor() {
    
  }

  ngOnInit(): void {
    
  }

}
