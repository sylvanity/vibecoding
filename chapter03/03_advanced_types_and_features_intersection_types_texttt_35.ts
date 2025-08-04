// Snippet 35 from Chapter 3
// Section: Advanced Types and Features
// Subsection: Intersection Types (\texttt{\&
// Source: Introduction to Programming with TypeScript/Advanced Types and Features.tex (line 67)
// Language: typescript
// Description: interface Clickable {
// 
interface Clickable {
  onClick(event: MouseEvent): void;
}

interface Focusable {
  onFocus(event: FocusEvent): void;
  onBlur(event: FocusEvent): void;
}

// Combine interfaces using intersection
type InteractiveElement = Clickable & Focusable;

// An object of this type must implement methods from both interfaces
const button: InteractiveElement = {
  onClick: (e) => console.log("Clicked!"),
  onFocus: (e) => console.log("Focused!"),
  onBlur: (e) => console.log("Blurred!")
};

// Type alias intersection for combining object shapes
type NameInfo = { firstName: string; lastName: string; };
type ContactInfo = { email: string; phone?: string; };

type Person = NameInfo & ContactInfo;

const contact: Person = {
  firstName: "Sylvia",
  lastName: "Brown",
  email: "sylvia.b@example.com"
  // phone is optional
};