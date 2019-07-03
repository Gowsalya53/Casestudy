$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Login2.feature");
formatter.feature({
  "name": "Login with different users",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "different users",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Click on signin in homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters un as \"\u003cusername\u003e\" and psd as\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "name": "verify Login pass",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Poornima",
        "poorni123"
      ]
    },
    {
      "cells": [
        "AlexUser",
        "Alex@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "different users",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Click on signin in homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Login2.click_on_signin_in_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters un as \"Poornima\" and psd as\"poorni123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login2.user_enters_un_as_and_psd_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Login2.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify Login pass",
  "keyword": "Then "
});
formatter.match({
  "location": "Login2.verify_Login_pass()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "different users",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Click on signin in homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Login2.click_on_signin_in_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters un as \"AlexUser\" and psd as\"Alex@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login2.user_enters_un_as_and_psd_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Login2.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify Login pass",
  "keyword": "Then "
});
formatter.match({
  "location": "Login2.verify_Login_pass()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Product.feature");
formatter.feature({
  "name": "purchase product in TestMe App",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user login and searches for the product",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user click on signin in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Product.user_click_on_signin_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters un as \"Poornima\" and psd as \"poorni123\" and click on login",
  "keyword": "When "
});
formatter.match({
  "location": "Product.user_enters_un_as_and_psd_as_and_click_on_login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters search product as \"Head\" and click find details",
  "keyword": "And "
});
formatter.match({
  "location": "Product.user_enters_search_product_as_and_click_find_details(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the add to cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "Product.verify_the_add_to_cart_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Register.feature");
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
formatter.match({
  "location": "Stepdefs.user_click_on_signup_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters un as \"poornima\" and fn as \"poornima\" and ln as \"Manokaran\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.user_enters_un_as_and_fn_as_and_ln_as(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters psd as \"poorni123\" and conpsd as \"poorni123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.user_enters_psd_as_and_conpsd_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on gender and email as \"abc@gmail.com\" and mobno as \"9867056487\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.click_on_gender_and_email_as_and_mobno_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "dob as \"05/04/1998\" and adr as \"chennai\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.dob_as_and_adr_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks secqns and ans as \"Red\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.user_clicks_secqns_and_ans_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Register",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.click_on_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.verify_register_successfully()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Login]\u003e but was:\u003c[Sign Up]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepdef.Stepdefs.verify_register_successfully(Stepdefs.java:71)\r\n\tat ✽.verify register successfully(src/test/resources/Features/Register.feature:11)\r\n",
  "status": "failed"
});
formatter.uri("src/test/resources/Features/cart.feature");
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