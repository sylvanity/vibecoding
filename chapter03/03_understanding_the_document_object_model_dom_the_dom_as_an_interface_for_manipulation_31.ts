// Snippet 31 from Chapter 3
// Section: Understanding the Document Object Model (DOM)
// Subsection: The DOM as an Interface for Manipulation
// Language: typescript
// Description: const appDiv = document.getElementById('app');
// 
// Assume HTML has: <div id="app"><p>Initial content</p></div>

// Find an element by its ID
const appDiv = document.getElementById('app');

if (appDiv) { // Always check if the element was found
  // Modify its content
  const paragraph = appDiv.querySelector('p');
  if (paragraph) {
    paragraph.textContent = 'Content updated by TypeScript!';
  }

  // Create a new element
  const newButton = document.createElement('button');
  newButton.textContent = 'Click Me';

  // Add an event listener
  newButton.addEventListener('click', () => {
    alert('Button Clicked!');
  });

  // Add the new element to the DOM
  appDiv.appendChild(newButton);
}