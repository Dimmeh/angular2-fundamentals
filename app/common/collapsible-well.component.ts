import {Component, Input} from '@angular/core'

@Component({
    selector: 'collapsible-well',
    templateUrl: './app/common/collapsible-well.component.html',
    styleUrls: ['./app/common/collapsible-well.component.css']
})

export class CollapsibleWellComponent {
    visible: boolean = false;

    toggleContent() {
        this.visible = !this.visible;
    }
}