import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './login-screen/signup.component';
import { LoginScreenComponent } from "./login-screen/login-screen.component";
import { StartComponent } from './start/start.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'login', component: LoginScreenComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'about', component: AboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
