// Snippet 09 from Chapter 3
// Section: Functions In-Depth
// Subsection: Typing this
// Language: typescript
// Description: interface UIElement {
// 
interface UIElement {
  id: string;
  addClickListener(onClick: (this: UIElement, event: Event) => void): void;
}

// Assume 'button' is an object conforming to UIElement
declare const button: UIElement;

// Define the callback function, explicitly typing 'this'
function handleClick(this: UIElement, event: Event): void {
  console.log(`Clicked element with ID: ${this.id}`);
  // 'this' is guaranteed by TypeScript to be of type UIElement here
  // this.someOtherMethod(); // Would cause a compile error if UIElement doesn't have it
}

// Pass the callback - TypeScript checks if 'handleClick' matches the expected signature
button.addClickListener(handleClick);

// Example with an object method
interface Counter {
    count: number;
    increment(this: Counter): void; // Ensure 'this' is a Counter when called
}

const myCounter: Counter = {
    count: 0,
    increment() { // 'this' implicitly typed as Counter here due to interface context
        this.count++;
        console.log(`Count is now: ${this.count}`);
    }
};

myCounter.increment(); // OK, 'this' is myCounter

const standaloneIncrement = myCounter.increment;
// standaloneIncrement(); // Error (in strict mode): 'this' context is lost.
                         // TypeScript might catch this if configured correctly or if
                         // 'this' was explicitly typed in the implementation.

// Explicitly typing 'this' helps catch errors where context is lost.