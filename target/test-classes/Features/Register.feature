Feature: Register Testme

Scenario: user registering Testme app
Given user click on signup in home page
When user enters un as "poornima" and fn as "poornima" and ln as "Manokaran"
When user enters psd as "poorni123" and conpsd as "poorni123" 
And click on gender and email as "abc@gmail.com" and mobno as "9867056487"
And dob as "05/04/1998" and adr as "chennai" 
And user clicks secqns and ans as "Red"
And Click on Register
Then verify register successfully
