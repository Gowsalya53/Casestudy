Feature: adding cart


Scenario: the one where the user moves to cart without adding any item to it
Given user login into testme app
When user searches for the product
And try to proceed pay without adding to cart
Then TestMe does not display cart item