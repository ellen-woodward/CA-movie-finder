import { Component } from '@angular/core';
import { IOMBDResponse } from 'src/app/omdbresponse';
import { OmdbApiService } from 'src/app/services/omdb-api.service';


@Component({
  selector: 'app-searchtitle',
  templateUrl: './searchtitle.component.html',
  styleUrls: ['./searchtitle.component.css']
})
export class SearchtitleComponent {
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
