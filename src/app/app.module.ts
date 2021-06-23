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
import { MenuComponent } from './core/components/menu/menu.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { ArtistPageComponent } from './pages/artist-page/artist-page.component';
import { GalleryArtistsComponent } from './shared/components/gallery-artists/gallery-artists.component';
import { ArtistEditPageComponent } from './pages/artist-page/pages/artist-edit-page/artist-edit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsPageComponent,
    GalleryComponent,
    AlbumsEditPageComponent,
    MenuComponent,
    FooterComponent,
    ArtistPageComponent,
    GalleryArtistsComponent,
    ArtistEditPageComponent,
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
