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
  messageSnackbar: string = "";
  existsMessage: boolean = false;

  getTodayDate(): string {
    const dateToday= new Date;
    const offset = dateToday.getTimezoneOffset();
    const dateTodayParsed = new Date(dateToday.getTime() - (offset*60*1000));
    return dateTodayParsed.toISOString().split('T')[0];
  }

  constructor(
    private formBuilder: FormBuilder,
    private artistsService: ArtistsService, 
    private router: Router
  ) {  
    this.artistsCreateForm = this.formBuilder.group({
    name: ['', Validators.required],
    photoUrl: ['', Validators.required],
    birthdate: ['', Validators.required],
    deathdate: [''],
  });}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    
    if(this.artistsCreateForm.valid){

      const artist: ArtistInterface = { 
        name: this.artistsCreateForm.get('name').value,
        photoUrl: this.artistsCreateForm.get('photoUrl').value,
        birthdate: this.artistsCreateForm.get('birthdate').value,
        deathdate: this.artistsCreateForm.get('deathdate').value,
      }

      this.artistsService.addArtist(artist).subscribe((artist) => {
        console.log(artist);
        if(artist){
          alert(`Artist ${artist.name} was added to the collection!`);
          this.artistsCreateForm.reset();
          this.router.navigate(['/artists']);
        }
        // } else {
        //   console.log("error artist");
        //   alert(`Sorry, it was not possible to update the collection.`);
        // }
      },
      (err)=>{
        console.log(err);
        alert(`Sorry, it was not possible to save your new artist.`);
      });
      this.submitted = false;


    }
  }
}
