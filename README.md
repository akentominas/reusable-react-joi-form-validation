# How to use it:

### 1) Install Joi library & Bootstrap (Optional)
---
> $npm i joi-browser

> $npm i bootstrap

### 2) formValidation.jsx (/reusable-joi-validation-for-forms/src/form-components/formValidation.jsx)
---
> This file does not have to be modified. All its logic has already been implemented for Joi Form Validation library functionality.

### 3) reusableInputField.jsx (reusable-joi-validation-for-forms/src/form-components/reusableInputField.jsx)
---
> This is a simple reusable form component, using bootstrap. This form component has props which are needed for essential form functionality. (Note that in case we have the prop "error" populated, this form will show the corresponding alert error message under the form itself)

### 4) login.jsx (reusable-joi-validation-for-forms\src\form-components\login.jsx)
---
> This is the only component that modifications needs to be done.

`You need to have:`

- The `login` component should `extend` the `formValidation` in order to adopt its reusable functions
- `data` + `errors` states.

The `data` state, contains an object of properties, which represents each of the input fields that we have on our form. (username, password, email etc...)

The `errors` state will be updated in case of Joi validation fails on some of the fields we have.


- A `schema` which will be passed to the Joi library for the validation of each of the input field that we might need in our form (more about Joi validation methods here: https://joi.dev/api/). Joi methods are chained with each other.

- Pass the corresponding states to each of the forms
