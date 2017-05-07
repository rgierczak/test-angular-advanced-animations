# test-angular-advanced-animations

> ...

angular has a build in state which offers us for exactly this situation - for element which is not attached to the DOM.

Angular build-in states:

* The `void`
Void is reserved state name, you shouldn't override it, which simple means the element is not attached to the DOM.

* The wildcard state `*`
The wildcard state means any state, which means you can go to/from state which name is not strictly specified in transition path.

Additionally there are two quite common states transitions which can be replaced also by build-in aliases:

* `:enter` - alias to `void => *`
* `leave` - alias to `* => void`
