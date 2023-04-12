Feature: automationExercise Test Cases

Scenario: automationExercise - register user
Given Open automationExercise page
When Verify home page
And Register user
Then Delete user

Scenario: automationExercise - login user with correct email and password
Given Open automationExercise page
When Verify home page
Then Login user correctly

Scenario: automationExercise - login user with incorrect email and password
Given Open automationExercise page
When Verify home page
Then Login user incorrectly

Scenario: automationExercise - logout user
Given Open automationExercise page
When Verify home page
And Login user correctly
Then Logout user

Scenario: automationExercise - register user with existing email
Given Open automationExercise page
When Verify home page
Then Register user with existing email

Scenario: automationExercise - contact us form
Given Open automationExercise page
When Verify home page
Then Validate contact us form

Scenario: automationExercise - verify test cases page
Given Open automationExercise page
When Verify home page
Then Validate test cases page

Scenario: automationExercise - verify all products and product detail page
Given Open automationExercise page
When Verify home page
And Validate all products page
Then Verify product detail page

Scenario: automationExercise - search product
Given Open automationExercise page
When Verify home page
And Validate all products page
Then Search product

Scenario: automationExercise - verify subscription in home page
Given Open automationExercise page
When Verify home page
Then Validate and subscribe newsletter

Scenario: automationExercise - verify subscription in cart page
Given Open automationExercise page
When Verify home page
Then Validate and subscribe newsletter in cart

Scenario: automationExercise - add products in cart
Given Open automationExercise page
When Verify home page
Then Add products to cart and verify 

Scenario: automationExercise - verify product quantity in cart
Given Open automationExercise page
When Verify home page
When Increase any product quantity to 4 and add to cart 
Then Verify that product is displayed correctly

Scenario: automationExercise - place order and register while checkout
Given Open automationExercise page
When Verify home page
When Add product to cart
When Register and click cart
Then Place order
Then Delete user

Scenario: automationExercise - place order and register before checkout
Given Open automationExercise page
When Verify home page
When Register user
When Add product to cart
Then Place order
Then Delete user