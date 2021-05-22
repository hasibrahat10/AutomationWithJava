Feature: Register a new User

  Scenario Outline: I want to Register as a New User
    Then I click on sing in link
    Then I have entered an email address as "<email>" and click on create an account
    And I have entered the users information and click register
    Then I am on the My Account screen "Welcome to your account. Here you can manage all o"
    Examples:
      | email                 |
      | demot@yopmail.com     |
      | hasib99@yopmail.com   |






