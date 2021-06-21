import { AlbumsService } from 'src/app/shared/services/albums/albums.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() albumList:any;

  constructor(private albumService: AlbumsService) { }

  ngOnInit(): void {
  }

  albumDelete(album: string){
    this.albumService.deleteAlbum(album).subscribe();
    window.location.reload();
  }

}
