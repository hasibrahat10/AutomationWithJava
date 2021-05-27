Feature: I want to cart Item to Checkout Process

  Scenario: Add to cart and checkout process
    Then I click on sign in link
    And I have entered the users information username as "hasib99@yopmail.com" and password as "1234567"
    Then I click on login
    When I navigate to Dresses category and click on Printed Dress Item
    Then I click on add to cart item
    And I have completed the checkout
    Then select payment method and confirm my order
    And I expect the text "Order confirmation"