Feature: demoBlaze Test Cases

Scenario: demoBlaze - validation
Given Open demoBlaze page
When Verify home page
When Go to phones category and verify
Then Click on Nexus 6 phone and verify

Scenario: demoBlaze - verify laptops page
Given Open demoBlaze page
When Verify home page
When Go to laptops category and verify
Then Click on MacBook Pro and verify

Scenario: demoBlaze - verify contact us modal
Given Open demoBlaze page
When Verify home page
When Click on contact us link and verify
Then Fill details and send message

Scenario: demoBlaze - register user with existing name
Given Open demoBlaze page
When Verify home page
When Click on sign up link and verify
Then Fill details and sign up

Scenario: demoBlaze - login user correctly
Given Open demoBlaze page
When Verify home page
When Click on log in link and verify
Then Fill details and log in verify and log out

Scenario: demoBlaze - login user incorrectly
Given Open demoBlaze page
When Verify home page
When Click on log in link and verify
Then Fill details and try to log in

Scenario: demoBlaze - checkout nexus phone without login
Given Open demoBlaze page
When Verify home page
When Go to phones category and verify
When Pick nexus 6 phone and verify
When Add product to cart and verify
Then Place order

Scenario: demoBlaze - checkout nexus phone after login
Given Open demoBlaze page
When Verify home page
When Click on log in link and verify
When Login correctly
When Go to phones category and verify
When Pick nexus 6 phone and verify
When Add product to cart and verify
Then Place order
Then Logout user

Scenario: demoBlaze - delete product from cart
Given Open demoBlaze page
When Verify home page
When Pick nexus 6 phone and verify
When Add product to cart and verify
Then Delete product from cart

Scenario: demoBlaze - verify monitors page
Given Open demoBlaze page
When Verify home page
When Go to monitors category and verify
Then Click on Apple monitor and verify