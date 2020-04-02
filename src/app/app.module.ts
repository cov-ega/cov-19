import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from './shared/shared.module';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {MaterialModule} from './shared/material-module/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SlidePanelComponent} from './signup/slide-panel';
import { ErrorNotFoundComponent } from './errors/error-not-found/error-not-found.component';
import {LottieAnimationViewModule} from 'ng-lottie';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './core/interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomePageComponent,
    NavbarComponent,
    SlidePanelComponent,
    ErrorNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LottieAnimationViewModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
