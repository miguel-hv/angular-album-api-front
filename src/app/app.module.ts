import { ArtistsService } from './shared/services/artists/artists.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { AlbumsService } from './shared/services/albums/albums.service';
import { AlbumsEditPageComponent } from './pages/albums-page/pages/albums-edit-page/albums-edit-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsPageComponent,
    GalleryComponent,
    AlbumsEditPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AlbumsService, ArtistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
