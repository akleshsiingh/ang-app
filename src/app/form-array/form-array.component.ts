import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    form = new FormGroup({
      topics : new FormArray([])
    });

    addTopic(topic: HTMLInputElement){
      console.log('adding');
      let e = this.form.get('topics') as FormArray;
      e.push(new FormControl(topic.value));
      topic.value='';
    }

    get topics(){
      return this.form.get('topics') as FormArray;
    }
    onRemove(t:FormControl){
      console.log('remove');
      let i = this.topics.controls.indexOf(t);
      this.topics.removeAt(i);
      console.log('remove ',i);
    }
}
