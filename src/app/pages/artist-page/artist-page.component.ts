import { ArtistInterfaceJson } from './../../core/models/ArtistInterface';
import { ArtistInterface } from 'src/app/core/models/ArtistInterface';
import { ArtistsService } from './../../shared/services/artists/artists.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss']
})
export class ArtistPageComponent implements OnInit {

  artistList: ArtistInterface[] = []; 

  constructor(private artistsService: ArtistsService) {}

  ngOnInit(): void {
    this.artistsService.getArtists()
      .subscribe((data: ArtistInterfaceJson[])=>{this.artistList = data;
        console.log(data);});
      
  }
}
