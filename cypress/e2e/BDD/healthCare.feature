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