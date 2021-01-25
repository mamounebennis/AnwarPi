import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../Service/service.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-themeadd',
  templateUrl: './themeadd.component.html',
  styleUrls: ['./themeadd.component.css']
})
export class ThemeaddComponent implements OnInit {
  description: any;
  titre: any;
   moii: any;

  constructor(public modalRef: BsModalRef,private service:ServiceService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.moii = localStorage.getItem("id");
  }

  onRegisterforum(value: any) {
    this.service.addtheme("http://localhost:7000/api/theme/create/"+this.moii,value)
      .subscribe(data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Ce theme a eté crée ! ',
          showConfirmButton: false,
          timer: 1500
        });
        this.chercher();
      },  err => {
        console.log(err);
      });
  }

  chercher() {
    this.service.get("http://localhost:7000/api/themes/"+this.moii)
      .subscribe(data => {
      },  err => {
        console.log(err);
      });
  }
}
