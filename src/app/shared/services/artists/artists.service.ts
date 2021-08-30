import { ArtistInterface } from './../../../core/models/ArtistInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// const baseUrl = 'http://localhost:3000/';
const baseUrl = 'https://node-album-api.herokuapp.com/';

const artistsGet = baseUrl + 'artists/all';
const artistPost = baseUrl + 'artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient) {}

  getArtists() {
    return this.http.get(artistsGet);
  } 
  
  addArtist (artist:ArtistInterface) {
    return this.http.post(artistPost, artist);
  }
}
