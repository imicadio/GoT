import { Component, OnInit } from '@angular/core'
import { SharedHero } from '../shared/hero.service'
import { ActivatedRoute } from '@angular/router'
import { IFriends } from '../shared/hero.model'

@Component({
    selector: 'friends',
    templateUrl: './friends.html'
})

export class Friends implements OnInit{
    friends: IFriends

    constructor(private sharedHero: SharedHero, private route: ActivatedRoute) { }

    ngOnInit(){
        this.friends = this.sharedHero.getFriend(+this.route.snapshot.params['id'])
    }
}