Feature: Login Scenarios

    @smoke
    Scenario: Login
        Given a user is on the login page of "<BASE_URL>"
        When a user enters username "<USERNAME>" in the username text box
        And a user enters password "<PASSWORD>" in the password text box
        And a user clicks on the Sign In button
        Then the user is redirected to the dashboard page
    
    Examples:      
      | BASE_URL                                     |USERNAME              | PASSWORD  |
      | https://mexil.it/chroma/site/login           |general@teacher.com  |   123456|
      


    @smoke
    Scenario Outline: bad login
        Given a user is on the login page of "<BASE_URL>"
        When a user enters username "<USERNAME>" in the username text box
        And a user enters password "<PASSWORD>" in the password text box
        And a user clicks on the Sign In button
        Then the user is shown an error message indicating invalid credentials
   
    Examples:      
      | BASE_URL                                     |USERNAME              | PASSWORD  |
      | https://mexil.it/chroma/site/login           |general@teacher.com   |   wrong123|
      | https://mexil.it/chroma/site/login           |blakidufii            |   123456  |
      | https://mexil.it/chroma/site/login           |adhfaufhu             |   298247  |
