import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Material Components
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { CardAlbumComponent } from './shared/components/card-album/card-album.component';

// Services
import { ApiService } from '../services/api.service';
import { AlbumService } from '../services/album.service';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { DialogCreateAlbumComponent } from './shared/components/dialog-create-album/dialog-create-album.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardAlbumComponent,
    DialogComponent,
    DialogCreateAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [ApiService, AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
