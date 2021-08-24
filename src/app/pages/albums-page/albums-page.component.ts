import { ArtistInterfaceJson } from './../../core/models/ArtistInterface';
import { ArtistsService } from './../../shared/services/artists/artists.service';
import { AlbumInterfaceJson } from './../../core/models/AlbumInterface';
import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/shared/services/albums/albums.service';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit {

  albumList: AlbumInterfaceJson[] = []; 
  artistList: ArtistInterfaceJson[] = []; 

  constructor(private albumsService: AlbumsService, private artistsService: ArtistsService) { }

  ngOnInit(): void {
    this.albumsService.getAlbums()
      .subscribe((data: AlbumInterfaceJson[])=>{this.albumList = data;});
    this.artistsService.getArtists()
      .subscribe((data: ArtistInterfaceJson[])=>{this.artistList = data;});
  } 

}
