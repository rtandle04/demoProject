import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    user: User = {
      userId:1,  
      userName: 'Ramu',
      emailId: 'rtandle@gmail.com',
      contribution: '1000',
      photo: 'myphoto'
  };

  
  constructor(private  http: HttpClient) { 
    
  }
  ngOnInit() {

    
  }
 
 /* getAllEntity(): Observable<any> {
    return this.http.get<any>(this.actionUrl)
  } */
}
