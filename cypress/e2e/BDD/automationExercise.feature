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
