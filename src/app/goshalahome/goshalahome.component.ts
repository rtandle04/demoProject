import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';
import { GoshalaapiService } from '../goshalaapi.service';

@Component({
  selector: 'app-goshalahome',
  templateUrl: './goshalahome.component.html',
  styleUrls: ['./goshalahome.component.css']
})
export class GoshalahomeComponent implements OnInit {
  private getUrl:string;

  userList : Array<any> = [];
  
  user: User = {
    userId:1,  
    userName: 'Ramu',
    emailId: 'rtandle@gmail.com',
    contribution: '1000',
    photo: 'myphoto'
};

columns =["UserId","Name","Email","Contribution","photo"]

  constructor(private goshalaapi: GoshalaapiService) { } 

  ngOnInit() {
    
  } 

  public getAllEntity(){
    this.goshalaapi.getEntity().subscribe(
      res => {
        this.userList = res;
        console.log("User list ========== ");
        console.log(this.userList);
      },
      error => {
        alert("error calling the method")
      }
    );
  }  

  public saveEntity(){
    this.goshalaapi.saveEntity(this.user).subscribe(
        res =>{
         //location.reload();
          alert("user is saved successfully");
        },
        error=>{
          alert("error while saving the data");
    }
    );
  }

  public deleteEntity(user1 : User){
    this.goshalaapi.deleteEntity(user1).subscribe(
      res =>{
        location.reload();
        alert("user is deleted successfully");
        console.debug(res);
      },
      error=>{
        alert("error while deleting the data");
  }
  );
  }
}