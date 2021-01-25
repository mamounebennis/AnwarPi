import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../Service/service.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public mode = 0;
  username: any;
  password: any;
  email: any;
   moii: any;

  constructor(private service:ServiceService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onLogin(value: any) {
    this.service.login(value)
      .subscribe(resp => {
          localStorage.setItem("username", this.username);
          this.moii = localStorage.getItem("username");
          console.log(this.moii);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          });

          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
          this.router.navigateByUrl("/acceuil");
        },
        err => {
          this.mode = 1;
        })
  }

}
