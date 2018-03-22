import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';

import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDAI9gD-Kpxsk-km-YMa5JJts8TRS00ZCM",
    authDomain: "myapp-176d4.firebaseapp.com",
    databaseURL: "https://myapp-176d4.firebaseio.com",
    projectId: "myapp-176d4",
    storageBucket: "myapp-176d4.appspot.com",
    messagingSenderId: "867690478367"
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


  };
