import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServiceService} from "../Service/service.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {CommentaireComponent} from "../commentaire/commentaire.component";
import {AddforumComponent} from "../addforum/addforum.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  validatingForm: FormGroup;
  ben: any;
   caca: any;
  modalRef: BsModalRef;
   moii: any;

  constructor(private service:ServiceService,private router:Router,private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.service.get("https://forumbennis.herokuapp.com/api/forms")
      .subscribe(data => {
        this.ben = data;
      },  err => {
        console.log(err);
      });

    this.validatingForm = new FormGroup({
      contactFormModalName: new FormControl('', Validators.required),
      contactFormModalEmail: new FormControl('', Validators.email),
      contactFormModalSubject: new FormControl('', Validators.required),
      contactFormModalMessage: new FormControl('', Validators.required)
    });

    this.moii = localStorage.getItem("username");


  }



  changer(d) {
    this.router.navigate(["/forum",d._id]);
  }

  show() {
    this.modalRef = this.modalService.show(AddforumComponent,  {
      initialState: {
        title: ""
      }
    });

  }

  get contactFormModalEmail() {
    return this.validatingForm.get('contactFormModalEmail');
  }

  get contactFormModalSubject() {
    return this.validatingForm.get('contactFormModalSubject');
  }

  get contactFormModalMessage() {
    return this.validatingForm.get('contactFormModalMessage');
  }
  get contactFormModalName() {
    return this.validatingForm.get('contactFormModalName');
  }

  logOut() {
      localStorage.removeItem('username');
    this.router.navigateByUrl("/acc");
  }

  redirect(p:any) {
    this.router.navigate(["/theme",p._id]);
  }
}
