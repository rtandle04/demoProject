import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { GoshalaapiService } from '../goshalaapi.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {

  user: User=new User("Ramakanth","rtandle@gmail.com","12345","jkjfkd");

  constructor(private goshalaapi: GoshalaapiService) { }

  ngOnInit() {
   
  }

  public saveEntity(){
    this.goshalaapi.saveEntity(this.user).subscribe(
        res =>{
          console.log(res);
          alert("Saved the user information successfully");
        },
        error=>{
          alert("error while saving the data");
    }
    );
}
}
