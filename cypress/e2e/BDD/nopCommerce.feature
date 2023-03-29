Feature: nopCommerce E2E

Scenario: nopCommerce - validation
Given Opening nopCommerce page
When Check navbar when page loads
And Go to computers page and assert
Then Go to home page

Scenario: nopCommerce - check gift cards page
Given Opening nopCommerce page
When Check navbar when page loads
And Go to gift cards page and assert
Then Go to home page

Scenario: nopCommerce - check books page
Given Opening nopCommerce page
When Check navbar when page loads
And Go to books page and assert
Then Go to home page