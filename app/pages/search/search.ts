import {Page, NavController, ActionSheet, Modal, Keyboard, Alert}  from 'ionic-angular';
import {Itunes} from '../../itunes/itunes';
import {PreviewModal} from './preview';
import {ArtistPage} from '../artist/artist';
/*
  Generated class for the SearchPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/search/search.html',
  providers: [Itunes]
})
export class SearchPage {
	public results: any;	
	public keyword: string = '';
	private _unfilteredResults: any;
	public usesFilter: boolean = false;

  constructor(private nav: NavController,  private itunes: Itunes, private keyboard:Keyboard) {
	this.results = [];
	this.keyword = '';
	this.usesFilter = false;
	this._unfilteredResults = [];
  
  }
  
  
  goToArtist(result) {
   this.nav.push(ArtistPage, {
     id:result.artistId,
     name: result.artistName
   });
  }
  
  
  search(){
	
    this.itunes.search(this.keyword)
	 .subscribe(
	 results => { 
	 if(!results.length) {
       let alert = Alert.create({
          title: 'The iTunes API says....',
          subTitle: 'No match found!',
          buttons: ["I'll try again"]
        });
        this.nav.present(alert);
        }	else {
		this.results=results;
		this.usesFilter = null;
		}
		
  });
  }
  
  
   openPreview(track) {
    let alert = Alert.create({
      title: 'Are you sure?',
      subTitle: 'that you want to open a preview...',
      buttons: [{
        text: 'No',
      },{
        text: 'Yes!',
        handler: () => {
          // Alternatively this.nav.last() instead of alert
          alert.dismiss(null).then(() => {
            // Resolves once animation is completed
            let modal = Modal.create(PreviewModal, {
              track: track
            });
            this.nav.present(modal);
          })
          // Prevent the alert from being dismissed "automatically"
          return false;
        }
      }]
    })
    this.nav.present(alert);
  }
  
   userPressedCancel(){
   
  }
	
	
	 keyHasBeenPressed(e) {
    this.keyboard.close();
    if(this.keyword === '') {
      let alert = Alert.create({
        title: 'Empty search not allowed',
        subTitle: 'Please key in your search below',
       
        buttons: [
          {
            text: 'Cancel',
          },
          {
            text: 'Search',
            handler: data => {
              if(data.term) {
                this.keyword = data.term;
                this.search();
                // automatically dismiss
                return true;
              }
              // Don't allow to dismiss
              return false;
            }
          }
        ],
		 inputs: [{
          name: 'term',
          placeholder: 'Search for...'
        }]
      })
      this.nav.present(alert);
    } else {
      this.search();
    }
  }
  
 
	
  openFilters() {
    let sheet = ActionSheet.create({
     title: 'Filter by...',
     buttons: [
	 {
          text: 'Movies only',
          handler: () => {
          this.results = this._unfilteredResults.filter((item) => item.kind === 'feature-movie');
           this.usesFilter = true;
          }
	},
    {
         text: 'Songs only',
         handler: () => {
            this.results = this._unfilteredResults.filter((item) => item.kind === 'song');
            this.usesFilter = true;
          }
     },
        {
          text: 'Clear',
          style: 'destructive',
          handler: () => {
            console.debug('Clearing filter');
            this.results = this._unfilteredResults;
            this.usesFilter = false;
          }
        },
        {
          text: 'Cancel',
          style: 'cancel'
        }
      ]
    })
	//create but not display until present	
    this.nav.present(sheet);
  }
  
  
  
  
  
 
 
 
 
 
 
  
  
}
