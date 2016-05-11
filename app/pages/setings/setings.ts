import {Page, NavController} from 'ionic-angular';
import {LanguageSetting} from './language';
/*
 Generated class for the SettingsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/setings/setings.html',
})
export class SettingsPage {
  public selectCountry: any;
  public countries: any;
  select(country) {
    this.selectCountry = country
    // Also keep inside service
    this.setting.country = country;
  }
  constructor(private nav: NavController, private setting: LanguageSetting) {
    this.countries = setting.countries;
  }
}

  
  
  
