import { animate, group, style, transition, trigger } from '@angular/animations';

export const showStateTrigger = trigger('showState', [
    // transition('void => *', [
    //     style({
    //         opacity: 0
    //     }),
    //     animate(300)
    // ]),
    // transition('* => void', animate(300, style({
    //     opacity: 0
    // })))

    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(300)
    ]),
    transition(':leave', animate(300, style({
        opacity: 0
    })))
]);

export const animateStateTrigger = trigger('animateState', [
    transition('* => *', [
        animate(400, style({
            width: 0
        })),
        animate(400, style({
            width: '*'
        }))
    ])
]);

export const listStateTrigger = trigger('listState', [
    transition(':enter', [
        style({
            opacity: 0,
            backgroundColor: '#ffffff'
        }),
        group([
            animate(1000, style({
                opacity: 0.7
            })),
            animate(2000, style({
                backgroundColor: '#ff0000'
            }))
        ]),
        animate(300, style({
            backgroundColor: 'lightblue'
        }))
    ]),
    transition(':leave', animate(300, style({
        opacity: 0
    })))
]);
