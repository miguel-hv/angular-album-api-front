import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:3000/';

const albumsGet = baseUrl + 'albums/all';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) {}
    
  getAlbums() {
    return this.http.get(albumsGet);
  } 
  
}
