import { Component, OnInit } from '@angular/core'
import { SharedHero } from '../shared/hero.service'
import { ActivatedRoute } from '@angular/router'
import { IEnemy } from '../shared/hero.model'

@Component({
    selector: 'enemy',
    templateUrl: './enemy.html',
    styleUrls: ['./enemy.css']
})

export class Enemy implements OnInit {
    enemy: IEnemy

    constructor(private sharedHero: SharedHero, private route: ActivatedRoute) { }

    ngOnInit(){
        this.enemy = this.sharedHero.getEnemy(+this.route.snapshot.params['id'])
    }
}