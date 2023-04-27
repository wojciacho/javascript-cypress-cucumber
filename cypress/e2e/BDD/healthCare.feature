Feature: healthCare Test Cases

# Scenario: healthCare - validation
# Given Open healthCare page
# When Verify home page
# Then Go to login page and verify

# Scenario: healthCare - correctly user login
# Given Open healthCare page
# When Verify home page
# Then Go to login page and verify
# Then Login user correctly
# Then Logout user

# Scenario: healthCare - incorrectly user login
# Given Open healthCare page
# When Verify home page
# Then Go to login page and verify
# Then Login user incorrectly

# Scenario: healthCare - verify history page
# Given Open healthCare page
# When Verify home page
# Then Go to login page and verify
# Then Login user correctly
# Then Go to history page and verify
# Then Logout user

# Scenario: healthCare - correctly user login by clicking make appointment button
# Given Open healthCare page
# When Verify home page
# When Click make appointment button and verify url
# Then Login user correctly
# Then Logout user

# Scenario: healthCare - incorrectly user login by clicking make appointment button
# Given Open healthCare page
# When Verify home page
# When Click make appointment button and verify url
# Then Login user incorrectly

# Scenario: healthCare - making appointment in tokyo facility
# Given Open healthCare page
# When Verify home page
# Then Go to login page and verify
# Then Login user correctly
# Then Fill appointment form and book appointment
# Then Verify appointment summary
# Then Logout user

Scenario: healthCare - making appointment in hongkong facility
Given Open healthCare page
When Verify home page
Then Go to login page and verify
Then Login user correctly
Then Fill hongkong facility appointment form and book appointment
Then Verify hongkong appointment summary
Then Logout user



