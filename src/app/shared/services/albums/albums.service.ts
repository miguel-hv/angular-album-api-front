import { AlbumInterface } from './../../../core/models/AlbumInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:3000/';

const albumsAllUrl = baseUrl + 'albums/all';
const albumSingleUrl = baseUrl + 'album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) {}
    
  getAlbums() {
    return this.http.get(albumsAllUrl);
  } 
  
  getAlbum(albumId: string) {
    return this.http.get(`${albumSingleUrl}/${albumId}`);
  } 

  addAlbum (album: AlbumInterface) {
    return this.http.post(albumSingleUrl, album);
  }

  deleteAlbum (albumId: string) {
    return this.http.delete(`${albumSingleUrl}/${albumId}`);
  }

  updateAlbum (album:AlbumInterface, albumId:string) {
    return this.http.put(`${albumSingleUrl}/${albumId}`, album);
  }


}
