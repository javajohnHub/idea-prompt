import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';
import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { PromptComponent } from './prompt/prompt.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    PromptComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,

    AuthModule.forRoot({
      domain: 'johnedwards.auth0.com',
      clientId: 'XC1RbLfPaba8YT2K9KX0Xm3ub4lL4bmv',
    }),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
