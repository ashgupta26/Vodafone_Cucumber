$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "This feature talks about the positive and negative login scenarios\r\naksjdf;lkaj\r\nalsdkflkjashd\r\nlaksjdhfkljafsd",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Tag1"
    }
  ]
});
formatter.before({
  "duration": 193225,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am able to access magento web page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.i_am_able_to_access_magento_web_page()"
});
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 33246974777,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Successful login scenario",
  "description": "",
  "id": "login-test;successful-login-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Tag2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I update the username as \"natarajan.ramanathan93@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I update the password as \"Welcome123\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should find the magento id as \"ID: MAG003417822\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "natarajan.ramanathan93@gmail.com",
      "offset": 26
    }
  ],
  "location": "Steps.i_update_the_username_as(String)"
});
formatter.result({
  "duration": 222304877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome123",
      "offset": 26
    }
  ],
  "location": "Steps.i_update_the_password_as(String)"
});
formatter.result({
  "duration": 137442885,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_the_login_button()"
});
formatter.result({
  "duration": 121057125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ID: MAG003417822",
      "offset": 33
    }
  ],
  "location": "Steps.i_should_fin_the_magento_id_as(String)"
});
formatter.result({
  "duration": 5726359705,
  "status": "passed"
});
});