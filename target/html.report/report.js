$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Register.feature");
formatter.feature({
  "name": "Register Testme",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user registering Testme app",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user click on signup in home page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters un as \"Poornima\" and fn as \"poornima\" and ln as \"Manokaran\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters psd as \"poorni123\" and conpsd as \"poorni123\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click on gender and email as \"abc@gmail.com\" and mobno as \"9867056487\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "dob as \"05/04/1998\" and adr as \"chennai\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks secqns and ans as \"Red\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Click on Register",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify register successfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});