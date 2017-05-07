import { Component } from '@angular/core';

import { animateStateTrigger, showStateTrigger } from './animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        showStateTrigger,
        animateStateTrigger
    ]
})
export class AppComponent {
    isShown = false;
    animate = false;
    width = 400;
}
