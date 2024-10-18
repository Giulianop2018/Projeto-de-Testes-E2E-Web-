Feature: jsonplaceholder.typicode.com - Album Photos
  Scenario: Navigate to the album photos page and validate the data
    Given I am on the guide page
    When I navigate to the album photos page
    Then I should see the comments data
    And I should validate the data of the object with id 6