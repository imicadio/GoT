import { Component } from '@angular/core'
import { SharedHero } from './shared/hero.service'
import { IHero } from './shared/hero.model'

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
    //zadeklarowana zmienna do której będę się odwoływać w html
    heroes:IHero[]

    //konstruktor przypisuje dane sharedService
    constructor(private sharedHero: SharedHero) { }
    
    //ngOnInit - dane wstrzyknięte ze SharedHero będące serwisem @Injectable()
    ngOnInit(){
        this.heroes = this.sharedHero.getHeroes()
    }
}