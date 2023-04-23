import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot([
    {
      path: "", component: MoviesListComponent
    },
    {
      path: "movies", component: MoviesListComponent
    },
  ])],
})
export class ApplicationRoutesModule {}
