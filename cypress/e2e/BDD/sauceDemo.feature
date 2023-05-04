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

Scenario: sauceDemo - removing product from cart
Given Opening saucedemo page
When Filling login details
And Add two products to cart
And Remove products from cart with assertion
Then Logout and assert home page

Scenario: sauceDemo - removing product from home page
Given Opening saucedemo page
When Filling login details
And Add two products to cart
And Remove products from home page with assertion
Then Logout and assert home page

Scenario: sauceDemo - filtering options
Given Opening saucedemo page
When Filling login details
And Select price low to high and assert
And Select price high to low and assert
Then Logout and assert home page

Scenario: sauceDemo - incorrectly user login
Given Opening saucedemo page
When Login user incorrectly
Then Verify error message

Scenario: sauceDemo - check footer
Given Opening saucedemo page
When Filling login details
Then Check footer

Scenario: sauceDemo - reset app state
Given Opening saucedemo page
When Filling login details
And Add two products to cart
Then Restart app state