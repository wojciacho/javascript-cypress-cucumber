Feature: sauceDemo E2E

Scenario: sauceDemo - validation
Given Opening saucedemo page
When Filling login details
And Go to the store and assert products visibility
Then Logout and assert home page

Scenario: sauceDemo - buying backpack
Given Opening saucedemo page
When Filling login details
And Select backpack and complete a purchase
Then Logout and assert home page

Scenario: sauceDemo - buying jacket
Given Opening saucedemo page
When Filling login details
And Select jacket and complete a purchase
Then Logout and assert home page