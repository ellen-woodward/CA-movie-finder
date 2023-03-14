import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IOMBDResponse } from '../omdbresponse';
import { catchError, Observable, throwError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {

  private _siteURL = "https://www.omdbapi.com/"
  private _key = "?apikey=c587ad9f&t="
  constructor(private _http:HttpClient) { }

  getMoviedata(movieName:string):Observable<IOMBDResponse>{
    return this._http.get<IOMBDResponse>(this._siteURL + this._key + movieName)
    .pipe(
      tap(data => console.log('Moviedata/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
    }

    private handleError(err:HttpErrorResponse){
      console.log('OmdbApiService: ' + err.message);
      return throwError(() => new Error("OmdbApiService: " + err.message))
    }
}
