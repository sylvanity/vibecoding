// Snippet 58 from Chapter 3
// Section: Object-Oriented Programming (OOP) Basics
// Subsection: Getters and Setters
// Language: typescript
// Description: class Temperature {
// 
class Temperature {
    private _celsius: number = 0; // Private backing property

    // Getter for Celsius
    get celsius(): number {
        console.log("Getting Celsius");
        return this._celsius;
    }

    // Setter for Celsius (with validation)
    set celsius(value: number) {
        console.log(`Setting Celsius to ${value}`);
        if (value < -273.15) {
            throw new Error("Temperature below absolute zero!");
        }
        this._celsius = value;
    }

    // Getter for Fahrenheit (computed)
    get fahrenheit(): number {
        return (this._celsius * 9/5) + 32;
    }

    // Setter for Fahrenheit (computes Celsius)
    set fahrenheit(value: number) {
        this.celsius = (value - 32) * 5/9; // Uses the celsius setter
    }
}

let temp = new Temperature();
temp.celsius = 25;      // Calls the celsius setter
console.log(temp.celsius);    // Calls the celsius getter -> 25
console.log(temp.fahrenheit); // Calls the fahrenheit getter -> 77
temp.fahrenheit = 32;   // Calls the fahrenheit setter, which calls celsius setter
console.log(temp.celsius);    // Calls the celsius getter -> 0