import { ArtistsService } from './../../../../shared/services/artists/artists.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ArtistInterface } from 'src/app/core/models/ArtistInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-edit-page',
  templateUrl: './artist-edit-page.component.html',
  styleUrls: ['./artist-edit-page.component.scss']
})
export class ArtistEditPageComponent implements OnInit {

  artistList: ArtistInterface[] = []; 
  artistsCreateForm: any = null;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private artistsService: ArtistsService, 
    private router: Router
  ) {  
    this.artistsCreateForm = this.formBuilder.group({
    name: ['', Validators.required],
    photoUrl: ['', Validators.required],
    birthDate: ['', Validators.required],
    deathDate: ['', [Validators.required, Validators.min(0), Validators.max(9999)]],
  });}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    
    if(this.artistsCreateForm.valid){

      // const artist: ArtistInterface = { 
      const artist: any = {
        // _id: '',
        name: this.artistsCreateForm.get('name').value,
        photoUrl: this.artistsCreateForm.get('photoUrl').value,
        birthdate: this.artistsCreateForm.get('birthDate').value,
        deathDate: this.artistsCreateForm.get('deathDate').value,
      }

      this.artistsService.addArtist(artist).subscribe();

      this.submitted = false;
      this.artistsCreateForm.reset();
      this.router.navigate(['/artists']);

    }
  }
}
