import { ArtistInterface, ArtistInterfaceJson } from './../../../core/models/ArtistInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// const baseUrl = 'http://localhost:3001/';
const baseUrl = 'https://node-album-api.herokuapp.com/';


const artistsGet = baseUrl + 'artists/all';
const artistPost = baseUrl + 'artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient) {}

  getArtists(): Observable<ArtistInterfaceJson[]> {
    return this.http.get<ArtistInterfaceJson[]>(artistsGet);
  } 
  
  addArtist(artist:ArtistInterface): Observable<ArtistInterface> {
    return this.http.post<ArtistInterface>(artistPost, artist);
  }
}
