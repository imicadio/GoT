import { Component, Input } from '@angular/core'
import { IFriends } from '../shared/hero.model'

@Component({
    selector: 'friends-list',
    template: '<md-list-item *ngFor="let friend of friends"><a [routerLink]="[friend.id]">{{ friend.name }}</a></md-list-item>'
})

export class FriendsListComponent{
    @Input() friends: IFriends[]
}