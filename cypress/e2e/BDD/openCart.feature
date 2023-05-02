Feature: openCart Test Cases

Scenario: openCart - validation
Given Open openCart page
When Verify home page
Then Click shopping cart and verify

Scenario: openCart - check footer
Given Open openCart page
When Verify home page
Then Check footer on home page

Scenario: openCart - validate desktops page
Given Open openCart page
When Verify home page
Then Click on desktops and verify

Scenario: openCart - incorrectly user login
Given Open openCart page
When Verify home page
Then Login user incorrectly