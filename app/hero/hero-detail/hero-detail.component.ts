import { Component, OnInit } from '@angular/core';
import { SharedHero } from '../shared/hero.service'
import { ActivatedRoute } from '@angular/router'
import { IHero } from '../shared/hero.model'

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

//OnInit pobieranie DI
export class HeroDetailComponent implements OnInit {
  hero:IHero
  
  /*cos = [
    {name: "Rambo", ktos: [1]},
    {name: "Ezio", ktos:[0, 2]},
    {name: "Batman", ktos: [0, 1]}
  ]*/

  heroes: IHero[] 

  constructor(private sharedHero: SharedHero, private route: ActivatedRoute) { }

  ngOnInit() {
    this.hero = this.sharedHero.getHero(+this.route.snapshot.params['id'])
    this.heroes = this.sharedHero.getHeroes() 
  }
}
