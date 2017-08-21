import { Component } from '@angular/core'
import { SharedHero } from './shared/hero.service'

@Component({
    selector: 'hero-list',
    template: `
    <div>
        <h1>Bohaterowie</h1>
        <hr>
        <div class="row">
            <div *ngFor="let hero of heroes" class="col-md-4 col-sm-6 col-xs-12">
                <hero-thumbnail [hero]="hero"></hero-thumbnail>
            </div>            
        </div>
    </div>
    `
})

export class HeroListComponent {
    heroes:any[]

    constructor(private sharedHero: SharedHero) { }
    
    ngOnInit(){
        this.heroes = this.sharedHero.getHeroes()
    }
}