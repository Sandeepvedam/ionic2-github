/**
 * Created by Sandeep Vedam
 * @ app.ts
 */

// Load the required dependencies
import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';

// @Components is decorator. It will load the templates and we can define some other attributes.
@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'              // It is for routing the pages.
})
export class MyApp {
  rootPage: any = HomePage;                                      // Default root page is HomePage

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);                                          // We are bootstraping the application. It is entry point to load our app.
