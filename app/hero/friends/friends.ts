import { Component, OnInit } from '@angular/core'
import { SharedHero } from '../shared/hero.service'
import { ActivatedRoute } from '@angular/router'
import { IHero } from '../shared/hero.model'

@Component({
    selector: 'friends',
    templateUrl: './friends.html',
    styleUrls: ['./friends.css']
})

export class Friends implements OnInit{
    friends: IHero

    constructor(private sharedHero: SharedHero, private route: ActivatedRoute) { }

    ngOnInit(){
        this.friends = this.sharedHero.getFriend(+this.route.snapshot.params['id'])
    }
}