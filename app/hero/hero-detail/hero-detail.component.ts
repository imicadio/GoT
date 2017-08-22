import { Component, OnInit } from '@angular/core';
import { SharedHero } from '../shared/hero.service'
import { ActivatedRoute } from '@angular/router'
import { IHero, IEnemy,IFriends } from '../shared/hero.model'

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})

//OnInit pobieranie DI
export class HeroDetailComponent implements OnInit {
  hero:IHero

  constructor(private sharedHero: SharedHero, private route: ActivatedRoute) { }

  ngOnInit() {
    this.hero = this.sharedHero.getHero(+this.route.snapshot.params['id'])
  }
}
