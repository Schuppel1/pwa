import { NgModule, isDevMode } from '@angular/core';
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
import { ServiceWorkerModule } from '@angular/service-worker';

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
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
