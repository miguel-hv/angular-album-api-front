import { AlbumInterface } from './../../../core/models/AlbumInterface';
import { AlbumsService } from 'src/app/shared/services/albums/albums.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() albumList: any;

  constructor(private albumService: AlbumsService) { }

  ngOnInit(): void {
  }

  albumDelete(albumId: string){
    this.albumService.deleteAlbum(albumId).subscribe();
    window.location.reload();
  }

}
