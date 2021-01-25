import { Component, OnInit } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {ServiceService} from "../Service/service.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-postadd',
  templateUrl: './postadd.component.html',
  styleUrls: ['./postadd.component.css']
})
export class PostaddComponent implements OnInit {

  description: any;
  titre: any;
  moii: any;
  message: any;

  constructor(public modalRef: BsModalRef,private service:ServiceService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.moii = localStorage.getItem("idpost");
  }

  onRegisterforum(value: any) {
    this.service.addtheme(environment.baseURL+"api/post/create/"+this.moii,value)
      .subscribe(data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Ce post a eté crée ! ',
          showConfirmButton: false,
          timer: 1500
        });
        window.location.reload();
      },  err => {
        console.log(err);
      });
  }



}
