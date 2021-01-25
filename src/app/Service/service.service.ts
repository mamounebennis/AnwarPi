import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }
  public modifytheme(url, data) {
    return this.httpClient.put(url, data);
  }

  login(user){
    return this.httpClient.post("https://forumbennis.herokuapp.com/api/signin",user,{ observe: 'response'
    });
  }
  register(user){
    return this.httpClient.post("https://forumbennis.herokuapp.com/api/signup",user);
  }

  public get(url){
    return this.httpClient.get(url);
  }

  public addtheme(url, data) {
    return this.httpClient.post(url, data);
  }


  public Deletetheme(url){
    return this.httpClient.delete(url);
  }

  logout(){
    return this.httpClient.get("https://forumbennis.herokuapp.com/api/signout");
  }

}
