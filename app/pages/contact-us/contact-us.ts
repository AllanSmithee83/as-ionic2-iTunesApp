import {Page, NavController} from 'ionic-angular';
import {Validators, FormBuilder} from 'angular2/common';

/*
  Generated class for the ContactUsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/contact-us/contact-us.html',
})
export class ContactUsPage {
 public contactForm: any;
  constructor(public nav: NavController, FB: FormBuilder) {  
  this.contactForm = FB.group({
  	 name: ['', Validators.required],
	 email: ['', Validators.required]
  })
  }
  
   submitForm() {

   }
  
}
