import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';


@Injectable({
  providedIn: 'root'
})
export class GoshalaapiService {

    private getEntityUrl="http://localhost:8080/getAll";
    private saveEntityurl="http://localhost:8080/saveEntity";
    private deleteEntityurl="http://localhost:8080/deleteEntity";
    
  constructor(private httpClient:HttpClient) { }


  public getEntity() : Observable<User []>{
    return this.httpClient.get<User []>(this.getEntityUrl);
  }

  public saveEntity(user : User) : Observable <any>{
    return this.httpClient.post<any>(this.saveEntityurl,user,{responseType:'text' as 'json'});
  }

  public deleteEntity(user : User) : Observable <any>{
    return this.httpClient.post<any>(this.deleteEntityurl,user,{responseType:'text' as 'json'});
  }

}
