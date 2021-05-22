$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Registration.feature");
formatter.feature({
  "name": "Register a new User",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "I want to Register as a New User",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I click on sing in link",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.RegistrationSteps.i_click_on_sing_in_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have entered an email address and click on create an account",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.RegistrationSteps.i_have_entered_an_email_address_and_click_on_create_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have entered the users information and click register",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.RegistrationSteps.i_have_entered_the_users_information_and_click_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am on the My Account screen \"Welcome to your account. Here you can manage all o\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.RegistrationSteps.i_am_on_the_My_Account_screen(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...you can manage all o[]\u003e but was:\u003c...you can manage all o[f your personal information and orders.]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.RegistrationSteps.i_am_on_the_My_Account_screen(RegistrationSteps.java:28)\r\n\tat ✽.I am on the My Account screen \"Welcome to your account. Here you can manage all o\"(file:///F:/AutomationWithJava/src/test/java/features/Registration.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});