
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
//import { Observable, EMPTY } from 'rxjs';
import { Observable } from 'rxjs';
import { NotFoundError } from '../common/not-found-error';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

//import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http:Http) { }

  getPosts(){
    return this.http.get(this.url);
  }

  addPost(post){
    return  this.http.post(this.url,JSON.stringify(post));
  }

  patchPost(post){
    return this.http.patch(this.url+"/"+post.id,{'id': post.id});
  }

  deletePost(id){
    return this.http.delete(this.url+"/"+id)
    .pipe(catchError((error: Response) => {
        if(error.status == 404)
          return throwError(new NotFoundError())
          
        return  throwError(new AppError(error)); 
      }))
  }

  deletePost2 (postID ){
    return  this.http.delete(this.url+"/"+postID);
  }
}
