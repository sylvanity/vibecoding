// Snippet 12 from Chapter 3
// Section: Structuring Data: Objects, Interfaces, and Type Aliases
// Subsection: Interfaces: Defining Object Shapes
// Language: typescript
// Description: interface Product {
// 
interface Product {
  readonly sku: string; // Cannot be changed after creation
  name: string;
  price: number;
  description?: string; // Optional property
  tags?: string[];      // Optional array of strings
}

const product1: Product = {
  sku: "ABC-123",
  name: "Laptop Stand",
  price: 49.99
  // description and tags are optional, so omitting them is fine
};

const product2: Product = {
  sku: "XYZ-789",
  name: "Wireless Mouse",
  price: 25.50,
  description: "Ergonomic wireless mouse",
  tags: ["electronics", "computer accessories"]
};

// product1.sku = "DEF-456"; // Error: Cannot assign to 'sku' because it is a read-only property.
product1.price = 45.00; // OK: price is not readonly

if (product2.description) {
  console.log(product2.description.toUpperCase()); // OK: Check if optional property exists
}