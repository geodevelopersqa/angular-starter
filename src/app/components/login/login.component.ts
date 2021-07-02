import { Component, OnInit } from '@angular/core';
import { ComminService } from 'src/app/services/commin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  result: any;

  constructor(private api: ComminService) { }

  ngOnInit(): void {
    this.fetchApi();
  }

  fetchApi() {
    this.api.getApi('user').then((razika:any) => {
      // {status:200,data:[object]}
      this.result = razika.data;
      console.log(this.result);
    });
  }

}
