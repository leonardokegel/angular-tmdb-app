import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { movieApiInterceptorProvider } from './interceptors/movies-api.interceptor';
import { MoviesModule } from './movies/movies.module';
import { RouterModule } from '@angular/router';
import { ApplicationRoutesModule } from './app-routes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MoviesModule,
    RouterModule,
    ApplicationRoutesModule
  ],
  providers: [movieApiInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
