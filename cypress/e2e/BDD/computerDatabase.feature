Feature: computerDatabase E2E

Scenario: computerDatabase - validation
Given Opening computerDatabase page
When Page loads check assets when page loads
And Type Ace and filter
Then Go to home page

Scenario: computerDatabase - changing computer name
Given Opening computerDatabase page
When Page loads check assets when page loads
And Type Ace and filter
And Click ACE computer and change computer name
Then Go to home page


Scenario: computerDatabase - adding introduced and discontinued date
Given Opening computerDatabase page
When Page loads check assets when page loads
And Type Ace and filter
And Click ACE computer and add date
Then Go to home page

Scenario: computerDatabase - adding apple company  introduced and discontinued date 
Given Opening computerDatabase page
When Page loads check assets when page loads
And Type Ace and filter
And Click ACE computer and add apple company, date
Then Go to home page

Scenario: computerDatabase - adding new computer
Given Opening computerDatabase page
When Page loads check assets when page loads
And Add new computer to base
Then Go to home page

Scenario: computerDatabase - check the test behavior with putting invalid date
Given Opening computerDatabase page
When Page loads check assets when page loads
And Add new computer to base with invalid date
Then Go to home page


Scenario: computerDatabase - check the test behavior without putting computer name
Given Opening computerDatabase page
When Page loads check assets when page loads
And Add new computer to base without name
Then Go to home page

Scenario: computerDatabase - delete ACE computer
Given Opening computerDatabase page
When Page loads check assets when page loads
Then Click ACE computer and delete
