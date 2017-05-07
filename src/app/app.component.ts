import { Component } from '@angular/core';

import { animateStateTrigger, listStateTrigger, showStateTrigger } from './animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        showStateTrigger,
        animateStateTrigger,
        listStateTrigger
    ]
})
export class AppComponent {
    isShown = false;
    animate = false;
    width = 400;
    testResults = [];

    onAddElement() {
        this.testResults.push(Math.random());
    }
}
