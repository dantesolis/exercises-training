/**********************************************************
Implement a simple Event Emitter

- allows to register event listeners
- emits messages to all listeners
- multiple channels supported
- a message is a single item (a primitive, object, array, but just 1 item)
- synchronous listener invoking

API:
- constructor: ee = new EventEmitter()
- subscription: ee.on(CHANNEL, LISTENER)
- emit: ee.trigger(CHANNEL, ITEM)
- unsubscribe: ee.off(CHANNEL, LISTENER)

EventEmitter constructor must be available in the global scope

// this exercise is just a simplification
// for a real world implementation of an EventEmitter, compare with: https://github.com/mroderick/PubSubJS
**********************************************************/

// implement EventEmitter here
let EventEmitter; // let, var, const, function, class - your choice
