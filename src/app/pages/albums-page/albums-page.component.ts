import { ArtistsService } from './../../shared/services/artists/artists.service';
import { AlbumInterface } from './../../core/models/AlbumInterface';
import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/shared/services/albums/albums.service';
import { ArtistInterface } from 'src/app/core/models/ArtistInterface';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit {

  albumList: AlbumInterface[] = []; 
  artistList: ArtistInterface[] = []; 

  constructor(private albumsService: AlbumsService, private artistsService: ArtistsService) { }

  ngOnInit(): void {
    this.albumsService.getAlbums()
      .subscribe((data: any)=>{this.albumList = data;});
    this.artistsService.getArtists()
      .subscribe((data: any)=>{this.artistList = data;});
  } 

}
