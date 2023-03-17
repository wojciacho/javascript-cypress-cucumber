Feature: eCommerce E2E Validation

@Regression
Scenario: eCommerce products delivery
Given Opening eCommerce Page
When Fill few fields and assert
When Go to store and add items to cart
And Validate total prices in cart
Then Select the country, submit and verify alert message