# Form Validator

A simple form validation library to validate inputs like required fields, email format, password strength, etc.

## Installation

Install using npm:


## Usage

```javascript
const Validator = require('@yourusername/form-validator');

// Example usage:
const isEmailValid = Validator.email('test@example.com');
const isPasswordValid = Validator.passwordStrength('P@ssw0rd');

console.log(isEmailValid); // true
console.log(isPasswordValid); // true

## Validation Methods

required(value)
minLength(value, length)
maxLength(value, length)
email(value)
passwordStrength(value)
numeric(value)
matches(value, regex)