import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ForumidComponent } from './forumid/forumid.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import {FormsModule} from "@angular/forms";
import { AddforumComponent } from './addforum/addforum.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AccComponent } from './acc/acc.component';
import { ThemeidComponent } from './themeid/themeid.component';
import { ThemeaddComponent } from './themeadd/themeadd.component';
import { PostaddComponent } from './postadd/postadd.component';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ForumidComponent,
    CommentaireComponent,
    AddforumComponent,
    LoginComponent,
    RegisterComponent,
    AccComponent,
    ThemeidComponent,
    ThemeaddComponent,
    PostaddComponent
  ],
    imports: [
      SweetAlert2Module.forRoot(),
      SweetAlert2Module,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
      ReactiveFormsModule,
        ModalModule.forRoot(),
      MDBBootstrapModule.forRoot(),
      SweetAlert2Module.forChild({ /* options */ }),

    ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
