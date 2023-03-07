import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { StartComponent } from './start/start.component';
import { ScorecardLocalComponent } from './scorecard-local/scorecard-local.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LoginSelectComponent } from './login-select/login-select.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ImpressumComponent,
    StartComponent,
    ScorecardLocalComponent,
    LoginScreenComponent,
    LoginSelectComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
