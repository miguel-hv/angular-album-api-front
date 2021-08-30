import { ArtistInterfaceJson } from './../../../../core/models/ArtistInterface';
import { ArtistsService } from './../../../../shared/services/artists/artists.service';
import { AlbumsService } from 'src/app/shared/services/albums/albums.service';
import {
  AlbumInterface,
  AlbumInterfaceJson,
} from './../../../../core/models/AlbumInterface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-albums-edit-page',
  templateUrl: './albums-edit-page.component.html',
  styleUrls: ['./albums-edit-page.component.scss'],
})
export class AlbumsEditPageComponent implements OnInit {
  getTodayDate(): number {
    const dateToday = new Date();
    const offset = dateToday.getTimezoneOffset();
    const dateTodayParsed = new Date(dateToday.getTime() - offset * 60 * 1000);
    return +dateTodayParsed.toISOString().substr(0, 4);
  }

  // albumCreateForm: FormGroup = null;
  albumCreateForm: any = null;
  albumId: string = '';
  isAddMode: boolean = false;
  submitted: boolean = false;
  artistList: ArtistInterfaceJson[] = [];
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private artistsService: ArtistsService,
    private albumsService: AlbumsService,
    private router: Router
  ) {
    this.albumCreateForm = this.formBuilder.group({
      title: ['', Validators.required],
      artist: ['', Validators.required],
      cover: ['', Validators.pattern(this.reg)],
      year: ['', [Validators.min(1909), Validators.max(this.getTodayDate())]],
      genre: [''],
    });
  }

  ngOnInit(): void {
    this.albumId = this.route.snapshot.params['id'];
    this.isAddMode = !this.albumId;

    this.artistsService
      .getArtists()
      .subscribe((data: ArtistInterfaceJson[]) => {
        this.artistList = data;
      });

    if (!this.isAddMode) {
      this.albumsService
        .getAlbum(this.albumId)
        .subscribe((data: AlbumInterfaceJson) => {
          console.log('data', data);
          this.artistList = [
            {
              _id: '',
              name: data.artistId,
              photoUrl: '',
              birthdate: '',
              deathdate: '',
            },
          ];
          this.albumCreateForm.controls['title'].setValue(data.title);
          this.albumCreateForm.controls['artist'].setValue(data.artistId);
          this.albumCreateForm.controls['cover'].setValue(data.coverUrl);
          this.albumCreateForm.controls['year'].setValue(data.year);
          this.albumCreateForm.controls['genre'].setValue(data.genre);
        });
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.albumCreateForm.valid) {
      const album: AlbumInterface = {
        title: this.albumCreateForm.get('title').value,
        artistId: this.albumCreateForm.get('artist').value,
        coverUrl: this.albumCreateForm.get('cover').value,
        year: this.albumCreateForm.get('year').value,
        genre: this.albumCreateForm.get('genre').value,
      };
console.log(album);
      if (this.isAddMode) {
        this.albumsService.addAlbum(album).subscribe((album) => {
          console.log(album);
        if(album){
          alert(`Album ${album.title} was added to the collection!`);
          this.albumCreateForm.reset();
          this.router.navigate(['/albums']);
        }
        },
        (err)=>{
          console.log(err);
          alert(`Sorry, it was not possible to save your album.`);
        });
      } else {
        let albumJSON = {album, _id: this.albumId};
        this.albumsService
          .updateAlbum(album, this.albumId)
          .subscribe((album) => {
          if(album){
          alert(`Album info ${album.title} was updated!`);
            this.albumCreateForm.reset();
            this.router.navigate(['/albums']);
          }
          },
          (err)=>{
            console.log(err);
            alert(`Sorry, it was not possible to update the album info.`);
          });
      }
      this.submitted = false;

    }
  }
}
