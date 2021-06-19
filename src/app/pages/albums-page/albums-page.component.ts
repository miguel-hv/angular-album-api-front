import { AlbumInterface } from './../../core/models/AlbumInterface';
import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/shared/services/albums.service';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit {

  albumList: AlbumInterface[] = []; 

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.albumsService.getAlbums()
      .subscribe((data: any)=>{
        // const results: any[] = data;

        this.albumList = data;

      })  
  } 

}
