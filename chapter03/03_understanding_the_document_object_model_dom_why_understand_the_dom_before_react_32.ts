// Snippet 32 from Chapter 3
// Section: Understanding the Document Object Model (DOM)
// Subsection: Why Understand the DOM Before React?
// Language: typescript
// Description: let count = 0;
// 
// Imperative approach - manually managing multiple DOM elements
let count = 0;

function updateCounter(newCount: number) {
  count = newCount;
  
  // Must remember to update ALL elements that display the count
  const display1 = document.getElementById('counter-display-1');
  const display2 = document.getElementById('counter-display-2');
  const display3 = document.getElementById('counter-display-3');
  
  if (display1) display1.textContent = count.toString();
  if (display2) display2.textContent = count.toString();
  if (display3) display3.textContent = count.toString();
  
  // Also update button states based on count
  const decrementBtn = document.getElementById('decrement-btn');
  if (decrementBtn) {
    decrementBtn.disabled = count <= 0;
  }
}

// Event handlers must call the update function
document.getElementById('increment-btn')?.addEventListener('click', () => {
  updateCounter(count + 1);
});

document.getElementById('decrement-btn')?.addEventListener('click', () => {
  updateCounter(count - 1);
});