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

Scenario: magentoSoftware - check summary
Given Opening magentoSoftware page
When Page loads check hot sellers section
And Add procuct to cart and check summary
Then Go to home page

Scenario: magentoSoftware - check customer login without registering
Given Opening magentoSoftware page
When Page loads check navbar
And Login into store and check error message
Then Go to home page

Scenario: magentoSoftware - check footer
Given Opening magentoSoftware page
When Page loads check navbar
When Check footer links
Then Go to home page

Scenario: magentoSoftware - check tops category from men page
Given Opening magentoSoftware page
When Page loads check navbar
When Click Tops category and assert
Then Go to home page

Scenario: magentoSoftware - check bottoms category from men page
Given Opening magentoSoftware page
When Page loads check navbar
When Click Bottoms category and assert
Then Go to home page

