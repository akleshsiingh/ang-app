import { AuthorServices } from './author.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template:   ``
})
export class CourseComponent{
     authors 
    constructor(service:AuthorServices){
     this.authors = service.getAuthors()   
    }

    title ="my title";
    num :number = 564.890

    email="email@example.com";
    active = true;
    submit(){
        console.log(this.email);
    }

    summaryT ='   The textContent property sets or returns the text content of the specified node, and all its descendants.';
}