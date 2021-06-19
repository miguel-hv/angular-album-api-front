import { AlbumsService } from 'src/app/shared/services/albums.service';
import { AlbumInterface } from './../../../../core/models/AlbumInterface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-albums-edit-page',
  templateUrl: './albums-edit-page.component.html',
  styleUrls: ['./albums-edit-page.component.scss']
})
export class AlbumsEditPageComponent implements OnInit {

  // albumCreateAndModify: FormGroup = null;
  public albumCreateForm: any = null;
  public submitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder, private albumsService: AlbumsService) { 

    this.albumCreateForm=this.formBuilder.group({
      title: ['', Validators.required],
      artist: [''],
      cover: [''],
      year: ['', [Validators.required, Validators.min(0), Validators.max(9999)]],
      genre: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.submitted = true;
    
    if(this.albumCreateForm.valid){

      const album: AlbumInterface = {
        title: this.albumCreateForm.get('title').value,
        artistId: this.albumCreateForm.get('artist').value,
        coverUrl: this.albumCreateForm.get('cover').value,
        year: this.albumCreateForm.get('year').value,
        genre: this.albumCreateForm.get('genre').value,
      }
      console.log(album);

      // this.albumCreateForm.reset();
      this.albumsService.addAlbum(album).subscribe(res => {console.log(res)});
      this.submitted = false;
    }
  }

}
