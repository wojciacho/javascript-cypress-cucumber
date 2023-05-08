Feature: openMrs E2E

Scenario: openMrs - validation
Given Open openMrs page
Then Verify home page

Scenario: openMrs - correctly user login
Given Open openMrs page
And Verify home page
Then Login user correctly