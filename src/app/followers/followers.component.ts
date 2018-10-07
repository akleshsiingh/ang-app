import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    for(let i=0;i<=10;i++)
    {
      this.followers.push({id:i,name: 'name '+i})
    }
    
    this.route.queryParamMap
      .subscribe( params => {
        let page = params.get('page');
        console.log('PAGE ',page);
      });
  }

  followers :any[]= [{id:1,name: 'vishnu'}] ;


}
