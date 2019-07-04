Feature: Login with different users

Scenario Outline: different users
Given Click on signin in homepage
When user enters un as "<username>" and psd as"<password>"
And click on login
Then verify Login pass  

Examples:
|username|password|
|Poornima|poorni123|
|lalitha|password123|