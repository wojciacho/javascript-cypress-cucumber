Feature: magentoSoftware E2E

Scenario: magentoSoftware - validation
Given Opening magentoSoftware page
When Page loads check navbar
And Check women page
Then Go to home page

Scenario: magentoSoftware - check woman page
Given Opening magentoSoftware page
When Page loads check navbar
And Go to women page and assert
Then Go to home page
