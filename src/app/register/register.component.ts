import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../Service/service.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  mode:number=0;
  errorMessage:string;
  username: any;
  name: any;
  password: any;
  email: any;
   sasa: any;
  constructor(private service:ServiceService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onRegister(value: any) {
    this.service.register(value)
      .subscribe(data=>{
          this.sasa=data;
          this.mode=1;
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your account has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigateByUrl("/login");
        },
        err=>{
          this.errorMessage=err.error.message;
          this.mode=0;
        })
  }

  retourlogin() {
    this.router.navigateByUrl("/login");
  }
}
