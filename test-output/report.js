$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Registration.feature");
formatter.feature({
  "name": "Register a new User",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "I want to Register as a New User",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I click on sing in link",
  "keyword": "Then "
});
formatter.step({
  "name": "I have entered an email address as \"\u003cemail\u003e\" and click on create an account",
  "keyword": "Then "
});
formatter.step({
  "name": "I have entered the users information and click register",
  "keyword": "And "
});
formatter.step({
  "name": "I am on the My Account screen \"Welcome to your account. Here you can manage all o\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email"
      ]
    },
    {
      "cells": [
        "demot@yopmail.com"
      ]
    },
    {
      "cells": [
        "hasib99@yopmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "I want to Register as a New User",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "I have entered an email address as \"demot@yopmail.com\" and click on create an account",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.RegistrationSteps.iHaveEnteredAnEmailAddressAsAndClickOnCreateAnAccount(java.lang.String)"
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
formatter.scenario({
  "name": "I want to Register as a New User",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "I have entered an email address as \"hasib99@yopmail.com\" and click on create an account",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.RegistrationSteps.iHaveEnteredAnEmailAddressAsAndClickOnCreateAnAccount(java.lang.String)"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_gender1\"}\n  (Session info: chrome\u003d90.0.4430.212)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8IIG3HH\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\asus\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:63148}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ed65e8a961742a38d5a4a5e438873bf2\n*** Element info: {Using\u003did, value\u003did_gender1}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat pages.RegistrationPage.userInformation(RegistrationPage.java:111)\r\n\tat stepDefinitions.RegistrationSteps.i_have_entered_the_users_information_and_click_register(RegistrationSteps.java:21)\r\n\tat ✽.I have entered the users information and click register(file:///F:/AutomationWithJava/src/test/java/features/Registration.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am on the My Account screen \"Welcome to your account. Here you can manage all o\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.RegistrationSteps.i_am_on_the_My_Account_screen(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});