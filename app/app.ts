import {App, IonicApp, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {SearchPage} from './pages/search/search';
import {SettingsPage} from './pages/setings/setings';
import {JSONP_PROVIDERS} from 'angular2/http';
import {Itunes} from './itunes/itunes';
import {ContactUsPage} from './pages/contact-us/contact-us';
import {LanguageSetting} from './pages/setings/language';

@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [ JSONP_PROVIDERS, Itunes, LanguageSetting],
})
class MyApp {
  rootPage: any = SearchPage;
  pages: Array<{title: string, component: any}>

  constructor(private app: IonicApp, private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
    	  { title: 'Search', component: SearchPage },
		   { title: 'Settings', component: SettingsPage },
		   { title: 'Contact us', component: ContactUsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
