import { Component } from '@angular/core';

import { showStateTrigger } from './animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        showStateTrigger
    ]
})
export class AppComponent {
    isShown: false;
}
