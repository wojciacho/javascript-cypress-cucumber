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


