# test-angular-advanced-animations

> The application shows advanced features of Angular Animations module.

## Installation

```
$ npm install
```

## Usage

```
$ npm run start
```

Run the project in your browser

```
localhost:4200
```

## Angular build-in states

Angular has a build in state which offers us for exactly this situation - for element which is not attached to the DOM.

### The `void` state

Void is reserved state name, you shouldn't override it, which simple means the element is not attached to the DOM.

### The wildcard state `*`

The wildcard state means any state, which means you can go to/from state which name is not strictly specified in transition path.

The wildcard character (`*`) can be also used for dimensional properties, in cases where you don't know your actual dimensional property is.

**Example**

```
transition('state1 => state2', [
    animate(400, style({
        width: '*'
    }))
])
```

Additionally there are two quite common states transitions which can be replaced also by build-in aliases:

* `:enter` - alias to `void => *`
* `:leave` - alias to `* => void`

## Animation groups

Groups are the features in animations which allows to execute animations with different timing in parallel.

**Example**

```
export const animations = trigger('listState', [
    transition(':enter', [
        style({
            opacity: 0,
            backgroundColor: '#ffffff'
        }),
        group([
            animate(1000, style({
                opacity: 0.7
            })),
            animate('500ms ease-out', style({
                opacity: 1
            }))
        ]),
        animate(300, style({
            backgroundColor: 'lightblue'
        }))
    ])
]);
```

## Animation callbacks

The animation callback is called in two cases: when an animations is started and when it is finished.

**Example**

```
<div
    *ngFor="let testResult of testResults"
    @listState
    (@listState.start)="animationStarted($event)"
    (@listState.done)="animationCompleted($event)">
    {{ testResult }}
</div>
```
