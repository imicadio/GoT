import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { IHero } from '../hero/shared/hero.model'

const REGEX = /^[0-9](,[0-9])*$/; 
const REGEX_NAME = /^[a-zA-Z ._-]*$/;
const urlR = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;




@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit {
  
  ngOnInit() {
  }

  dane(formValues){
    console.log(formValues)
  }


  friendsFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(REGEX)]);

  enemyFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(REGEX)]);

  nazwaFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(REGEX_NAME)]); 

  urlRFormControl = new FormControl('', [
     Validators.required,
     Validators.pattern(urlR)]);
}
