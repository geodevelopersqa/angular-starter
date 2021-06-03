import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-var-starter',
  templateUrl: './var-starter.component.html',
  styleUrls: ['./var-starter.component.css']
})
export class VarStarterComponent implements OnInit {

  testVariable : number = 0;
  testString : string = '';
  testBoolean : boolean = false;

  unknowVaribale : any;

  varArray : number[] = [1,2,3,4];
  stringArray: string[] = []
  anyArray: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
