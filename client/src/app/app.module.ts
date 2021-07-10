import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'johnedwards.auth0.com',
      clientId: 'FKsvPc1gazDswrxuFzvZk1oyTXFDZ6hl',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
