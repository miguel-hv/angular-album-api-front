import { AlbumInterfaceJson } from './../../../core/models/AlbumInterface';
import { AlbumsService } from 'src/app/shared/services/albums/albums.service';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

let subscriptionDelete: Subscription;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() albumList: AlbumInterfaceJson[] = [];
  // @Input() albumList: AlbumInterface[] = [];

  constructor(private albumService: AlbumsService) {}

  ngOnInit(): void {}

  albumDelete(albumId: string, albumTitle: string) {
    if (confirm(`Would you like to delete ${albumTitle}?`)) {
      this.albumService.deleteAlbum(albumId).subscribe((album) => {
        console.log(album);
        if (album) {
          window.location.reload();
          alert(`Album ${album.title} was deleted from the collection!`);
        }
      });
    }
  }
}
