import { AlbumInterface } from './../../core/models/AlbumInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:3000/';

const albumsGet = baseUrl + 'albums/all';
const albumsPost = baseUrl + 'album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) {}
    
  getAlbums() {
    return this.http.get(albumsGet);
  } 
  
  addAlbum (album:AlbumInterface) {
    return this.http.post(albumsPost, album);
  }

}
