

import { map, catchError } from 'rxjs/operators';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:any[];
  
  constructor(private service: PostsService) {}

  ngOnInit() {
    this.service.getPosts()
        .subscribe(
          response => {
          console.log(response)
          this.posts = response.json();
        },
          (errors: Response) =>{
            console.log("error found ",errors.status);
            
          });
  }

  addPost(x: HTMLInputElement){
    console.log('saving ',x.value)
    let post = {'title': x.value};
    x.value = ''
   this.service.addPost(post)
        .subscribe(response =>{
        
          post['id'] = response.json().id;
          console.log('posts',post);
          this.posts.splice(0,0,post);
        });
  }

  updatePost(post){
    console.log(post);
    this.service.patchPost(post)
              .subscribe(resp =>{
                console.log(resp.json())
              });
  }

  deletePost(post){
   this.service.deletePost(post.id)
      .subscribe(resp =>{
        console.log(resp.json());
        let i = this.posts.indexOf(post);
        this.posts.splice(i,1);
      },
      (error: AppError) => {

       // console.log(error)
        if(error instanceof NotFoundError)
           console.log('Not found error');
           else
          throwError(error);
      });
  }


}
