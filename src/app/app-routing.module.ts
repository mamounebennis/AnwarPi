  import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {ForumidComponent} from "./forumid/forumid.component";
import {CommentaireComponent} from "./commentaire/commentaire.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AccComponent} from "./acc/acc.component";
  import {ConfirmationValidateurDirective} from "../assets/confirmation-validateur.directive";
  import {ThemeidComponent} from "./themeid/themeid.component";
  import {ThemeaddComponent} from "./themeadd/themeadd.component";
  import {PostaddComponent} from "./postadd/postadd.component";


const routes: Routes = [
  {path:'', redirectTo:"acc",pathMatch:"full"},
  {path:'acceuil',component:AcceuilComponent},
  {path:'forum/:id',component:ForumidComponent},
  {path:'comment/:id',component:CommentaireComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'acc',component:AccComponent},
  {path:'theme/:id',component:ThemeidComponent},
  {path:'themeadd',component:ThemeaddComponent},
  {path:'postadd',component:PostaddComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [
        ConfirmationValidateurDirective
    ],
    exports: [RouterModule, ConfirmationValidateurDirective]
})
export class AppRoutingModule { }
