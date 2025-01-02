# TypeScript: Incorrect Parameter Type in Function

This example demonstrates a common TypeScript error: passing an array to a function that expects a string. The code includes a solution using type assertion and function overloading to handle various input types.

## Bug
The `greeter` function expects a string but receives an array, leading to a compilation error.

## Solution
The solution provides two approaches:

1.  **Type Assertion:** Explicitly converts the input to a string using a type assertion.
2.  **Function Overloading:** Creates multiple function signatures to handle both string and array inputs.