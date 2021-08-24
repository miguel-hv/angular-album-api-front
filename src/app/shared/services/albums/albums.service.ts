import { Observable } from 'rxjs';
import {
  AlbumInterface,
  AlbumInterfaceJson,
} from './../../../core/models/AlbumInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:3001/';

const albumsAllUrl = baseUrl + 'albums/all';
const albumSingleUrl = baseUrl + 'album';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<AlbumInterfaceJson[]> {
    return this.http.get<AlbumInterfaceJson[]>(albumsAllUrl);
  }

  getAlbum(albumId: string): Observable<AlbumInterfaceJson> {
    return this.http.get<AlbumInterfaceJson>(`${albumSingleUrl}/${albumId}`);
  }

  addAlbum(album: AlbumInterface): Observable<AlbumInterfaceJson> {
    return this.http.post<AlbumInterfaceJson>(albumSingleUrl, album);
  }

  deleteAlbum(albumId: string): Observable<any> {
    return this.http.delete(`${albumSingleUrl}/${albumId}`);
  }

  updateAlbum(
    album: AlbumInterface,
    albumId: string
  ): Observable<AlbumInterfaceJson> {
    return this.http.put<AlbumInterfaceJson>(
      `${albumSingleUrl}/${albumId}`,
      album
    );
  }
}
