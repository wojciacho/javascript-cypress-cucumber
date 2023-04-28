Feature: globalSqa Bank Test Cases

Scenario: globalSqa Bank - validation
Given Open globalSqa Bank page
When Verify home page
Then Click customer login and verify

Scenario: globalSqa Bank - verify bank manager page
Given Open globalSqa Bank page
When Verify home page
Then Click bank manager login and verify

Scenario: globalSqa Bank - add customer
Given Open globalSqa Bank page
When Verify home page
Then Click bank manager login and verify
Then Add customer

Scenario: globalSqaBank - check customers page
Given Open globalSqa Bank page
When Verify home page
Then Click bank manager login and verify
Then Check customers page