Feature: healthCare Test Cases

Scenario: healthCare - validation
Given Open healthCare page
When Verify home page
Then Go to login page and verify

Scenario: healthCare - correctly user login
Given Open healthCare page
When Verify home page
Then Go to login page and verify
Then Login user correctly
Then Logout user

Scenario: healthCare - incorrectly user login
Given Open healthCare page
When Verify home page
Then Go to login page and verify
Then Login user incorrectly

Scenario: healthCare - verify history page
Given Open healthCare page
When Verify home page
Then Go to login page and verify
Then Login user correctly
Then Go to history page and verify
Then Logout user

Scenario: healthCare - correctly user login by clicking make appointment button
Given Open healthCare page
When Verify home page
When Click make appointment button and verify url
Then Login user correctly
Then Logout user

