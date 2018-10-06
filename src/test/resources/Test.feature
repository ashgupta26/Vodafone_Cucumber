@Tag1
Feature: Login Test
This feature talks about the positive and negative login scenarios
aksjdf;lkaj
alsdkflkjashd
laksjdhfkljafsd

Background:
Given I am able to access magento web page

@Tag2
Scenario: Successful login scenario
When I update the username as "natarajan.ramanathan93@gmail.com"
And I update the password as "Welcome123"
And I click on the login button
Then I should find the magento id as "ID: MAG003417822"

@Tag3 @Tag4
Scenario Outline: Invalid login
When I update the username as "<user>"
And I update the password as "<pwd>"
And I click on the login button
Then I should see the error message as "Invalid login or password."
Examples:
|user			|pwd		|
|nat@gmail.com	|password1	|
|test@gmail.co	|pass2		|


