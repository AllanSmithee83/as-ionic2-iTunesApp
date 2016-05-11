import {Page, NavController, NavParams} from 'ionic-angular';
import {Itunes} from '../../itunes/itunes';
import {ToSymbolPipe} from '../../itunes/symbol';
/*
  Generated class for the ArtistPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/artist/artist.html',
  pipes: [ToSymbolPipe]
})
export class ArtistPage {
	public artist: any;
	public albums: any;
  constructor(public nav: NavController, params:NavParams, itunes: Itunes) {
	this.artist= params.data;
	itunes.loadAlbums(this.artist.id)
      .subscribe(albums => this.albums = albums);
  }
}
