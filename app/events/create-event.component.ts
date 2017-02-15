import {Component} from '@angular/core'
import {Router} from "@angular/router";
import {EventService} from "./shared/event.service";

@Component({
    templateUrl: './app/events/create-event.component.html' ,
    styleUrls: ['./app/events/create-event.component.css'] ,
})

export class CreateEventComponent {
    isDirty:boolean = true;

    constructor(private router: Router, private eventService:EventService){

    }

    //For editing check: https://app.pluralsight.com/player?course=angular-fundamentals&author=jim-cooper&name=angular-fundamentals-m6&clip=9&mode=live

    saveEvent(formValues){
        this.eventService.saveEvent(formValues).subscribe(event => {
                this.router.navigate(['/events']);
                this.isDirty = false
            }
        )
    }

    cancel(){
        this.router.navigate(['/events'])
    }
}