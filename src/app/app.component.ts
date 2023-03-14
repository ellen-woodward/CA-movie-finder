import { Component } from '@angular/core';
import { IOMBDResponse } from './omdbresponse';
import { OmdbApiService } from './services/omdb-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie-Finder';
  movieData!:IOMBDResponse;
  errorMessage:any;

  constructor(private _omdbService:OmdbApiService){}

    getMovieDetails(movieName:string):Boolean{
      this._omdbService.getMoviedata(movieName).subscribe(
        movieData => {
          this.movieData = movieData;
          console.log("Director name: " + this.movieData.Director);
        }
      )
      return false;
    }
}
