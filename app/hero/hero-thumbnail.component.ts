import { Component, Input } from '@angular/core'
import { SlicePipe } from '@angular/common'

@Component({
    selector: 'hero-thumbnail',
    template: `
    <div [routerLink]="[hero.id]" class="well hoverwell thumbnail">
        <h2>{{ hero?.name }}</h2>
        <div><p>{{ hero?.opis.length > 255 ? (hero?.opis | slice:0:255) + '...' : (hero?.opis) }}</p></div>
        <br/>
    </div>
    `,
    styles: [`
    .thumbnail { min-height: 210px; }
    `]
})

export class HeroThumbnailComponent {
    //dane pobrane z rodzica 
    //w tej sytuacji z hero-list.component
    @Input() hero:any
}