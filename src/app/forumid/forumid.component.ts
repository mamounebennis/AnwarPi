import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../Service/service.service";
import {ThemeaddComponent} from "../themeadd/themeadd.component";
import {PostaddComponent} from "../postadd/postadd.component";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-forumid',
  templateUrl: './forumid.component.html',
  styleUrls: ['./forumid.component.css']
})
export class ForumidComponent implements OnInit {
   zeze: any;
   wawa:any;
  modalRef: BsModalRef;

  constructor(private service:ServiceService,private router:Router,private route: ActivatedRoute,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.service.get("http://localhost:7000/api/posts/"+this.route.snapshot.params.id)
      .subscribe(data => {
        this.zeze = data;
      },  err => {
        console.log(err);
      });

    localStorage.removeItem('idpost');
    localStorage.setItem("idpost", this.route.snapshot.params.id);

    this.service.get("http://localhost:7000/api/posts")
      .subscribe(data => {
        this.wawa = data;
      },  err => {
        console.log(err);
      });

  }


  comment(e) {
    this.router.navigate(["/comment",e._id]);
  }

  show() {
    this.modalRef = this.modalService.show(PostaddComponent,  {
      initialState: {
      }
    });
  }
}
