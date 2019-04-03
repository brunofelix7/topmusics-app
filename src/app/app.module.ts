/** ANGULAR MODULES */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxLoadingModule } from 'ngx-loading';
import { CountdownModule } from 'ngx-countdown';

/** ROUTING */

/**GUARDS */

/**SERVICES */
import { AuthService } from './services/auth.service';
import { ArtistService } from './services/artist.service';
import { AlbumService } from './services/album.service';
import { MusicService } from './services/music.service';

/**COMPONENTS */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MusicListComponent } from './components/music-list/music-list.component';
import { MusicFormComponent } from './components/music-form/music-form.component';
import { MusicDetailsComponent } from './components/music-details/music-details.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumFormComponent } from './components/album-form/album-form.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { ArtistFormComponent } from './components/artist-form/artist-form.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		NotFoundComponent,
		DashboardComponent,
		LoginComponent,
		RegisterComponent,
		MusicListComponent,
		MusicFormComponent,
		MusicDetailsComponent,
		AlbumListComponent,
		AlbumFormComponent,
		AlbumDetailsComponent,
		ArtistListComponent,
		ArtistFormComponent,
		ArtistDetailsComponent,
		UnauthorizedComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		CountdownModule,
		NgxLoadingModule.forRoot({})
	],
	providers: [
		AuthService,
		ArtistService,
		AlbumService,
		MusicService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
