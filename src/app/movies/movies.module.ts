import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { RouterModule } from '@angular/router';
import { MovieItemComponent } from './movie-item/movie-item.component';

@NgModule({
  declarations: [MoviesListComponent, MovieItemComponent],
  imports: [CommonModule, RouterModule],
})
export class MoviesModule {}
