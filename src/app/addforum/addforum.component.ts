import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceService} from "../Service/service.service";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-addforum',
  templateUrl: './addforum.component.html',
  styleUrls: ['./addforum.component.css']
})
export class AddforumComponent implements OnInit {
  title;
  validatingForm: FormGroup;
  mode: any;
  titre: any;
  name: any;
  constructor(public modalRef: BsModalRef,private service:ServiceService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      contactFormModalName: new FormControl('', Validators.required),
      contactFormModalEmail: new FormControl('', Validators.email),
      contactFormModalSubject: new FormControl('', Validators.required),
      contactFormModalMessage: new FormControl('', Validators.required)
    });
  }

  onRegisterforum(value: any) {
    this.service.addtheme(environment.baseURL+"api/form/create",value)
      .subscribe(data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Ce forum a eté crée ! ',
          showConfirmButton: false,
          timer: 1500
        });
        window.location.reload();

      },  err => {
        console.log(err);
      });
  }
}
