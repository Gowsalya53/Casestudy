Feature: purchase product in TestMe App



Scenario: user login and searches for the product
Given user click on signin in home page
When user enters un as "lalitha" and psd as "password123" and click on login
And user enters search product as "Head" and click find details
Then verify the add to cart page 

