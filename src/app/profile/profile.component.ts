import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subject, ReplaySubject, from, of, range,combineLatest } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id =this.route.snapshot.paramMap.get('id');
      console.log("SNAPPED ID ",id);
    this.route.paramMap
        .subscribe(params=>{
          console.log(params);
         
        });

    this.route.queryParamMap
        .subscribe(params => {
          let sort = params.get('sort');
          console.log('SORT TYPE ',sort);
        });

        // Observable.Pipe.combineLatest([
        //   this.route.queryParamMap,
        //   this.route.paramMap
        // ])

        combineLatest([
          this.route.paramMap,
          this.route.queryParamMap
        ])
        // .pipe(switchMap(params => {
         
        //   return params;
        // }))
        .subscribe(params => {
          let id = params[0].get('id');
          let sort = params[1].get('sort');
          console.log('USER ID IN RX ',id);
          console.log("IN RX",sort)
        });
  }

}
