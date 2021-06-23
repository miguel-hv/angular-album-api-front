import { ArtistInterface } from 'src/app/core/models/ArtistInterface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-artists',
  templateUrl: './gallery-artists.component.html',
  styleUrls: ['./gallery-artists.component.scss']
})
export class GalleryArtistsComponent implements OnInit {

  @Input() artistList:ArtistInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
