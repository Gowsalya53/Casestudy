Feature: purchase product in TestMe App



Scenario: user login and searches for the product
Given user click on signin in home page
When user enters un as "Poornima" and psd as "poorni123" and click on login
And user enters search product as "Head" and click find details
Then verify the add to cart page 

