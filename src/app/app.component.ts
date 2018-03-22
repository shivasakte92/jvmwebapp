import { Component } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  realitem: any;
  images1: any;
  title = 'app';

  public ssb = [];

  constructor(af: AngularFireDatabase) {

  let alphas = [];

  let realitem = [];

    af.list('/assets/ssb', { preserveSnapshot: true })
    .subscribe(snapshots=>{
    
        snapshots.forEach(snapshot => {

          alphas.push(snapshot.val());

        });

        realitem.push(alphas[0]);

        var asset2 = alphas[0].numplate;


        for(var i=0; i<alphas.length; i++){

        if(alphas[i].numplate != asset2){
        realitem.push(alphas[i]);
        asset2 = alphas[i].numplate;

        }

        }

        this.realitem = realitem;

    })

    this.ssb = alphas;

  }

  viewimages(real){

  let images1 = [];

    for(var i=0; i<this.ssb.length; i++){

    if(this.ssb[i].numplate == real.numplate){

      images1.push(this.ssb[i]);

    }

    }

    this.images1 = images1;

    console.log(images1);

    console.log(this.ssb);

  }

}
