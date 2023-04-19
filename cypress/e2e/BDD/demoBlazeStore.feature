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
