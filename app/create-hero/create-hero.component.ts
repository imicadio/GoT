import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { IHero } from '../hero/shared/hero.model'

const REGEX = /^[0-9](,[0-9])*$/; 
const REGEX_NAME = /^[a-zA-Z ._-]*$/;
const urlR = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html'
})
export class CreateHeroComponent implements OnInit {
  
  ngOnInit() {
  }

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3)  
    ]),
    password: new FormControl('', Validators.required)
  });

  get username(){
    return this.form.get('username');
  }

  dodaj(para){
    console.log(para)
  }
  
}
