import { animate, group, keyframes, style, transition, trigger } from '@angular/animations';

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
        animate('2000ms cubic-bezier(.16,.78,.9,.30)', style({
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
            animate('500ms ease-out', keyframes([
                style({
                    backgroundColor: '#ffffff',
                    offset: 0
                }),
                style({
                    backgroundColor: '#ff0000',
                    offset: 0.8
                }),
                style({
                    backgroundColor: '#00ff00',
                    offset: 1
                })
            ]))
        ]),
        animate(300, style({
            backgroundColor: 'lightblue'
        }))
    ]),
    transition(':leave', animate(300, style({
        opacity: 0
    })))
]);
