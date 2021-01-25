import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../Service/service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AddforumComponent} from "../addforum/addforum.component";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {ThemeaddComponent} from "../themeadd/themeadd.component";

@Component({
  selector: 'app-themeid',
  templateUrl: './themeid.component.html',
  styleUrls: ['./themeid.component.css']
})
export class ThemeidComponent implements OnInit {
  moii: any;
  wawa: any;
   zeze: any;
  modalRef: BsModalRef;
  public ided: any;

  constructor(private service:ServiceService,private router:Router,private route: ActivatedRoute,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.moii = localStorage.getItem("username");
    localStorage.removeItem('id');
    localStorage.setItem("id", this.route.snapshot.params.id);

    this.service.get("https://forumbennis.herokuapp.com/api/themes/"+this.route.snapshot.params.id)
      .subscribe(data => {
        this.zeze = data;
      },  err => {
        console.log(err);
      });
  }
  logOut() {
    localStorage.removeItem('username');
    this.router.navigateByUrl("/acc");
  }

  redirect(p: any) {
    this.router.navigate(["/forum",p._id]);
  }

  show() {
    this.modalRef = this.modalService.show(ThemeaddComponent,  {
      initialState: {
      }
    });
  }
}
