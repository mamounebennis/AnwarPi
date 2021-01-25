import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../Service/service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  message: any;
  comment: any;
   moii: any;



  constructor(private service:ServiceService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.get("https://forumbennis.herokuapp.com/api/comments/"+this.route.snapshot.params.id)
      .subscribe(data => {
        this.comment = data;
      },  err => {
        console.log(err);
      });

    this.moii = localStorage.getItem("username");
  }

  Chercher(){
    this.service.get(environment.baseURL+"api/comments/"+this.route.snapshot.params.id)
      .subscribe(data => {
        this.comment = data;
      },  err => {
        console.log(err);
      });
  }


  onRegistercours() {
    let info = {"message": this.message};
    this.service.addtheme(environment.baseURL+"api/comment/create/"+this.route.snapshot.params.id,info)
      .subscribe(data => {
        this.Chercher();
      },  err => {
        console.log(err);
      });
    (<HTMLInputElement> document.getElementById("message")).value ="";

  }
}
