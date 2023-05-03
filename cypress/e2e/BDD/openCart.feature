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

Scenario: openCart - change currency to euro
Given Open openCart page
When Verify home page
Then Change currency to euro and verify

Scenario: openCart - change currency to pound
Given Open openCart page
When Verify home page
Then Change currency to pound and verify

Scenario: openCart - change currency to us dollar
Given Open openCart page
When Verify home page
Then Change currency to us dollar and verify

Scenario: openCart - add HP laptop to cart and verify alert
Given Open openCart page
When Verify home page
Then Click on desktops and verify
Then Add HP laptop to cart
Then Check HP laptop details
Then Add to cart and verify alert

Scenario: openCart - register user
Given Open openCart page
When Verify home page
Then Register account

Scenario: openCart - verify tablets page
Given Open openCart page
When Verify home page
Then Click on tablets category and verify