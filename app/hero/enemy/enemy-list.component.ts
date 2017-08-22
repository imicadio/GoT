import { Component, Input } from '@angular/core'
import { IEnemy } from '../shared/hero.model'

@Component({
    selector: 'enemy-list',
    template: '<md-list-item *ngFor="let enemys of enemy">{{ enemys?.name }}</md-list-item>'
})

export class EnemyListComponent{
    @Input() enemy: IEnemy[]
}