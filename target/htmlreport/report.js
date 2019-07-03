$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/cart.feature");
formatter.feature({
  "name": "adding cart",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "the one where the user moves to cart without adding any item to it",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user login into testme app",
  "keyword": "Given "
});
formatter.match({
  "location": "cart.user_login_into_testme_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for the product",
  "keyword": "When "
});
formatter.match({
  "location": "cart.user_searches_for_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "try to proceed pay without adding to cart",
  "keyword": "And "
});
formatter.match({
  "location": "cart.try_to_proceed_pay_without_adding_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "TestMe does not display cart item",
  "keyword": "Then "
});
formatter.match({
  "location": "cart.testme_does_not_display_cart_item()"
});
formatter.result({
  "status": "passed"
});
});