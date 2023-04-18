Feature: automationExercise Test Cases

# Scenario: automationExercise - register user
# Given Open automationExercise page
# When Verify home page
# And Register user
# Then Delete user

# Scenario: automationExercise - login user with correct email and password
# Given Open automationExercise page
# When Verify home page
# Then Login user correctly

# Scenario: automationExercise - login user with incorrect email and password
# Given Open automationExercise page
# When Verify home page
# Then Login user incorrectly

# Scenario: automationExercise - logout user
# Given Open automationExercise page
# When Verify home page
# And Login user correctly
# Then Logout user

# Scenario: automationExercise - register user with existing email
# Given Open automationExercise page
# When Verify home page
# Then Register user with existing email

# Scenario: automationExercise - contact us form
# Given Open automationExercise page
# When Verify home page
# Then Validate contact us form

# Scenario: automationExercise - verify test cases page
# Given Open automationExercise page
# When Verify home page
# Then Validate test cases page

# Scenario: automationExercise - verify all products and product detail page
# Given Open automationExercise page
# When Verify home page
# And Validate all products page
# Then Verify product detail page

# Scenario: automationExercise - search product
# Given Open automationExercise page
# When Verify home page
# And Validate all products page
# Then Search product

# Scenario: automationExercise - verify subscription in home page
# Given Open automationExercise page
# When Verify home page
# Then Validate and subscribe newsletter

# Scenario: automationExercise - verify subscription in cart page
# Given Open automationExercise page
# When Verify home page
# Then Validate and subscribe newsletter in cart

# Scenario: automationExercise - add products in cart
# Given Open automationExercise page
# When Verify home page
# Then Add products to cart and verify 

# Scenario: automationExercise - verify product quantity in cart
# Given Open automationExercise page
# When Verify home page
# When Increase any product quantity to 4 and add to cart 
# Then Verify that product is displayed correctly

# Scenario: automationExercise - place order and register while checkout
# Given Open automationExercise page
# When Verify home page
# When Add product to cart
# When Register and click cart
# Then Place order
# Then Delete user

# Scenario: automationExercise - place order and register before checkout
# Given Open automationExercise page
# When Verify home page
# When Register user
# When Add product to cart
# Then Place order
# Then Delete user

# Scenario: automationExercise - place order and login before checkout
# Given Open automationExercise page
# When Verify home page
# When Login user
# When Add product to cart
# Then Place order
# Then Logout user

# Scenario: automationExercise - remove product from cart
# Given Open automationExercise page
# When Verify home page
# Then Add product and remove from cart

# Scenario: automationExercise - view category products
# Given Open automationExercise page
# When Verify categories on left side bar
# When Click on women dress category and verify
# Then Click on men jeans category and verify

# Scenario: automationExercise - view brand products
# Given Open automationExercise page
# When Verify brands on left side bar and click on polo brand
# Then Click on other brand and verify

# Scenario: automationExercise - search product and verify cart after login
# Given Open automationExercise page
# When Click on products and verify
# When Search product
# When Add searched product to cart
# Then Login user correctly
# Then Go to cart page and verify

# Scenario: automationExercise - add review on product
# Given Open automationExercise page
# When Click on products and verify
# When Click on view product and write review
# Then Submit review and verify message

# Scenario: automationExercise - add to cart from recommended items
# Given Open automationExercise page
# When Verify displaying recommended items
# When Add product to cart and click view cart
# Then Verify that product is displayed

# Scenario: automationExercise - view kids products
# Given Open automationExercise page
# When Verify home page
# When Verify kids category on left side
# Then Click on kids tops category and verify

Scenario: automationExercise - verify babyhug brand
Given Open automationExercise page
When Verify home page
Then Verify brands on left side bar and click on babyhug brand

Scenario: automationExercise - view babyhug brand then go to men jeans category and verify page
Given Open automationExercise page
When Verify home page
Then Verify brands on left side bar and click on babyhug brand
Then Click on men jeans category and verify